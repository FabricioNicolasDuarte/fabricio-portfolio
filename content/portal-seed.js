/**
 * Datos semilla del portal (modo demo / local).
 * Con Supabase conectado, estas tablas viven en Postgres.
 */

export const PORTAL_DEMO_CREDENTIALS = {
  email: 'admin@fabricioduarte.tech',
  password: 'portal-demo',
  name: 'Fabricio Nicolás Duarte',
  role: 'admin',
}

export const PORTAL_USERS = [
  {
    email: 'admin@fabricioduarte.tech',
    password: 'portal-demo',
    name: 'Fabricio Nicolás Duarte',
    role: 'admin',
  },
  {
    email: 'fabricioduarteoficial@gmail.com',
    password: 'portal-demo',
    name: 'Fabricio Nicolás Duarte',
    role: 'admin',
  },
  {
    email: 'josefinaruiz.axia@gmail.com',
    password: 'Axia#J782@Ruiz',
    name: 'Josefina Ruiz',
    role: 'axia_agent',
    company: 'AXIA Inmobiliaria',
  },
  {
    email: 'axia.deborah@gmail.com',
    password: 'Axia#D491@Deb',
    name: 'Deborah',
    role: 'axia_agent',
    company: 'AXIA Inmobiliaria',
  },
  {
    email: 'karen.montiel@axia.com.py',
    password: 'Axia#K315@Montiel',
    name: 'Karen Montiel',
    role: 'axia_agent',
    company: 'AXIA Inmobiliaria',
  },
]

export const PORTAL_SEED = {
  clients: [
    {
      id: 'cl-axia',
      name: 'AXIA Real Estate',
      contact: 'Karen Montiel',
      email: 'info@axia.com.py',
      country: 'Paraguay',
      status: 'activo',
      notes: 'Brokerage de inversión · Asunción',
    },
  ],
  projects: [
    {
      id: 'pr-axia-pwa',
      clientId: 'cl-axia',
      name: 'Plataforma AXIA (PWA & Estrategia)',
      status: 'activo',
      phase: 'Etapa 1 · Captación con IA y Portal Comercial',
      shareToken: 'axia',
      repoUrl: 'https://github.com/FabricioNicolasDuarte',
      demoUrl: '/panel/axia',
      paymentGateway: 'Arnipay (previsto)',
      budgetRef: 7000,
      budgetProposed: 3500,
      opsMonthly: 150,
      currency: 'USD',
      updatedAt: '2026-10-27',
      summary:
        'Sistema integral AXIA: Portal comercial privado, materiales de marca, captación Advantage+, auditoría de video con IA y calificación de leads por WhatsApp.',
    },
  ],
  documents: [
    {
      id: 'doc-axia-portal',
      projectId: 'pr-axia-pwa',
      title: 'Portal Comercial & Estrategia IA (AXIA)',
      kind: 'herramienta',
      href: '/panel/axia',
      downloadable: true,
      visibleToClient: true,
    },
    {
      id: 'doc-axia-prop',
      projectId: 'pr-axia-pwa',
      title: 'Propuesta comercial PWA',
      kind: 'presupuesto',
      href: '/propuestas/axia',
      downloadable: true,
      visibleToClient: true,
    },
  ],
  milestones: [
    { id: 'm1', projectId: 'pr-axia-pwa', label: 'Estrategia comercial y guiones de video', status: 'hecho', due: '2026-10-27' },
    { id: 'm2', projectId: 'pr-axia-pwa', label: 'Auditor de videos con IA y banco de recursos', status: 'hecho', due: '2026-10-27' },
    { id: 'm3', projectId: 'pr-axia-pwa', label: 'Conexión bot WhatsApp y campañas Advantage+', status: 'pendiente', due: null },
  ],
}

