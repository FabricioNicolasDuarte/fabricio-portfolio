import { createClient } from '@supabase/supabase-js'
import { PORTAL_DEMO_CREDENTIALS, PORTAL_SEED } from '~/content/portal-seed.js'

const AUTH_KEY = 'fd-portal-auth'
const DATA_KEY = 'fd-portal-data'

let browserClient = null

function emptyStore() {
  return structuredClone(PORTAL_SEED)
}

function mapClient(row) {
  return {
    id: row.id,
    name: row.name,
    contact: row.contact,
    email: row.email,
    country: row.country,
    status: row.status,
    notes: row.notes,
  }
}

function mapProject(row) {
  return {
    id: row.id,
    clientId: row.client_id,
    name: row.name,
    status: row.status,
    phase: row.phase,
    shareToken: row.share_token,
    repoUrl: row.repo_url || '',
    demoUrl: row.demo_url || '',
    paymentGateway: row.payment_gateway || '',
    budgetRef: Number(row.budget_ref) || 0,
    budgetProposed: Number(row.budget_proposed) || 0,
    opsMonthly: Number(row.ops_monthly) || 0,
    currency: row.currency || 'USD',
    updatedAt: row.updated_at,
    summary: row.summary || '',
  }
}

function mapDoc(row) {
  return {
    id: row.id,
    projectId: row.project_id,
    title: row.title,
    kind: row.kind,
    href: row.href || '',
    note: row.note || '',
    downloadable: Boolean(row.downloadable),
    visibleToClient: Boolean(row.visible_to_client),
  }
}

function mapMilestone(row) {
  return {
    id: row.id,
    projectId: row.project_id,
    label: row.label,
    status: row.status,
    due: row.due,
  }
}

export function usePortal() {
  const config = useRuntimeConfig()
  const url = config.public.supabaseUrl
  const key = config.public.supabaseAnonKey
  const supabaseReady = Boolean(url && key)

  const session = useState('fd-portal-session', () => null)
  const store = useState('fd-portal-store', () => emptyStore())
  const ready = useState('fd-portal-ready', () => false)

  function getClient() {
    if (!import.meta.client || !supabaseReady) return null
    if (!browserClient) browserClient = createClient(url, key)
    return browserClient
  }

  function loadLocal() {
    if (!import.meta.client) return
    try {
      const raw = localStorage.getItem(AUTH_KEY)
      session.value = raw ? JSON.parse(raw) : null
    } catch {
      session.value = null
    }
    try {
      const data = localStorage.getItem(DATA_KEY)
      store.value = data ? JSON.parse(data) : emptyStore()
    } catch {
      store.value = emptyStore()
    }
    ready.value = true
  }

  function persistAuth() {
    if (!import.meta.client) return
    if (session.value) localStorage.setItem(AUTH_KEY, JSON.stringify(session.value))
    else localStorage.removeItem(AUTH_KEY)
  }

  function persistStore() {
    if (!import.meta.client) return
    localStorage.setItem(DATA_KEY, JSON.stringify(store.value))
  }

  async function fetchAdminData(supabase) {
    const [clientsRes, projectsRes, docsRes, milesRes] = await Promise.all([
      supabase.from('clients').select('*').order('name'),
      supabase.from('projects').select('*').order('updated_at', { ascending: false }),
      supabase.from('documents').select('*').order('created_at'),
      supabase.from('milestones').select('*').order('label'),
    ])
    if (clientsRes.error) throw clientsRes.error
    if (projectsRes.error) throw projectsRes.error
    if (docsRes.error) throw docsRes.error
    if (milesRes.error) throw milesRes.error
    store.value = {
      clients: (clientsRes.data || []).map(mapClient),
      projects: (projectsRes.data || []).map(mapProject),
      documents: (docsRes.data || []).map(mapDoc),
      milestones: (milesRes.data || []).map(mapMilestone),
    }
  }

  async function resolveRole(supabase, userId) {
    const { data } = await supabase.from('profiles').select('role, full_name').eq('id', userId).maybeSingle()
    return data
  }

  async function applyAuthSession(supabase, authSession) {
    if (!authSession?.user) {
      session.value = null
      return
    }
    const profile = await resolveRole(supabase, authSession.user.id)
    session.value = {
      email: authSession.user.email,
      name: profile?.full_name || authSession.user.user_metadata?.full_name || authSession.user.email,
      role: profile?.role || 'client',
      mode: 'supabase',
      userId: authSession.user.id,
    }
    if (session.value.role === 'admin') await fetchAdminData(supabase)
  }

  async function init() {
    if (ready.value) return
    const supabase = getClient()
    if (supabase) {
      const { data } = await supabase.auth.getSession()
      try {
        await applyAuthSession(supabase, data.session)
      } catch {
        /* tablas vacías o RLS: queda sesión sin store remoto */
      }
      if (!session.value) {
        // Enlace público /c/:token aún funciona vía RPC
        store.value = emptyStore()
      }
      ready.value = true
      return
    }
    loadLocal()
  }

  async function login(email, password) {
    const supabase = getClient()
    if (supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      await applyAuthSession(supabase, data.session)
      if (session.value?.role !== 'admin') {
        await supabase.auth.signOut()
        session.value = null
        throw new Error('Tu usuario no tiene rol admin. Corré el SQL de profiles.')
      }
      return session.value
    }
    const ok =
      email.trim().toLowerCase() === PORTAL_DEMO_CREDENTIALS.email &&
      password === PORTAL_DEMO_CREDENTIALS.password
    if (!ok) throw new Error('Credenciales incorrectas')
    session.value = {
      email: PORTAL_DEMO_CREDENTIALS.email,
      name: PORTAL_DEMO_CREDENTIALS.name,
      role: PORTAL_DEMO_CREDENTIALS.role,
      mode: 'demo',
    }
    persistAuth()
    if (import.meta.client && !localStorage.getItem(DATA_KEY)) persistStore()
    return session.value
  }

  async function logout() {
    const supabase = getClient()
    if (supabase) await supabase.auth.signOut()
    session.value = null
    persistAuth()
    store.value = emptyStore()
  }

  async function loadShare(token) {
    const supabase = getClient()
    if (supabase) {
      const { data, error } = await supabase.rpc('portal_share', { p_token: token })
      if (error) throw error
      if (!data?.project) return null
      // merge into store so helpers work
      const clients = [...(store.value.clients || [])]
      const projects = [...(store.value.projects || [])]
      const documents = [...(store.value.documents || [])]
      const milestones = [...(store.value.milestones || [])]
      if (data.client && !clients.find((c) => c.id === data.client.id)) clients.push(data.client)
      const idx = projects.findIndex((p) => p.id === data.project.id)
      if (idx >= 0) projects[idx] = data.project
      else projects.push(data.project)
      for (const d of data.documents || []) {
        if (!documents.find((x) => x.id === d.id)) documents.push(d)
      }
      for (const m of data.milestones || []) {
        if (!milestones.find((x) => x.id === m.id)) milestones.push(m)
      }
      store.value = { clients, projects, documents, milestones }
      return data.project
    }
    return projectByToken(token)
  }

  const isAuthed = computed(() => Boolean(session.value))
  const isAdmin = computed(() => session.value?.role === 'admin')

  const clients = computed(() => store.value.clients || [])
  const projects = computed(() => store.value.projects || [])
  const documents = computed(() => store.value.documents || [])

  function clientById(id) {
    return clients.value.find((c) => c.id === id)
  }

  function projectById(id) {
    return projects.value.find((p) => p.id === id)
  }

  function projectByToken(token) {
    return projects.value.find((p) => p.shareToken === token)
  }

  function docsForProject(projectId) {
    return (store.value.documents || []).filter((d) => d.projectId === projectId)
  }

  function milestonesForProject(projectId) {
    return (store.value.milestones || []).filter((m) => m.projectId === projectId)
  }

  async function updateProjectStatus(id, status, phase) {
    const p = store.value.projects.find((x) => x.id === id)
    if (!p) return
    p.status = status
    if (phase != null) p.phase = phase
    p.updatedAt = new Date().toISOString()

    const supabase = getClient()
    if (supabase && session.value?.mode === 'supabase') {
      const patch = { status, updated_at: new Date().toISOString() }
      if (phase != null) patch.phase = phase
      const { error } = await supabase.from('projects').update(patch).eq('id', id)
      if (error) throw error
      return
    }
    persistStore()
  }

  function money(n) {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(n)
  }

  const statusLabel = {
    propuesta: 'Propuesta',
    activo: 'Activo',
    pausado: 'Pausado',
    entregado: 'Entregado',
    pendiente: 'Pendiente',
    hecho: 'Hecho',
  }

  return {
    supabaseReady,
    demoCredentials: PORTAL_DEMO_CREDENTIALS,
    session,
    ready,
    isAuthed,
    isAdmin,
    clients,
    projects,
    documents,
    store,
    init,
    login,
    logout,
    loadShare,
    clientById,
    projectById,
    projectByToken,
    docsForProject,
    milestonesForProject,
    updateProjectStatus,
    money,
    statusLabel,
  }
}
