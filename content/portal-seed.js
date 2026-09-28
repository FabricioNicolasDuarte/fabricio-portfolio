/**
 * Datos semilla del portal (modo demo / local).
 * Con Supabase conectado, estas tablas viven en Postgres.
 */

export const PORTAL_DEMO_CREDENTIALS = {
  email: 'admin@fabricioduarte.tech',
  password: 'portal-demo',
  name: 'Fabricio Duarte',
  role: 'admin',
}

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
      name: 'Plataforma AXIA (PWA)',
      status: 'propuesta',
      phase: 'Etapa 1 · Sitio público',
      shareToken: 'axia',
      repoUrl: 'https://github.com/FabricioNicolasDuarte',
      demoUrl: '',
      paymentGateway: 'Arnipay (previsto)',
      budgetRef: 7000,
      budgetProposed: 3500,
      opsMonthly: 150,
      currency: 'USD',
      updatedAt: '2026-09-28',
      summary:
        'App web instalable: sitio público, portal inversor, cobranzas con IA, admin. de rentas y contabilidad operativa. Propiedad a nombre del cliente.',
    },
  ],
  documents: [
    {
      id: 'doc-axia-prop',
      projectId: 'pr-axia-pwa',
      title: 'Propuesta comercial',
      kind: 'presupuesto',
      href: '/propuestas/axia',
      downloadable: true,
      visibleToClient: true,
    },
  ],
  milestones: [
    { id: 'm1', projectId: 'pr-axia-pwa', label: 'Kickoff etapa 1', status: 'pendiente', due: null },
    { id: 'm2', projectId: 'pr-axia-pwa', label: 'Sitio público en aire', status: 'pendiente', due: null },
    { id: 'm3', projectId: 'pr-axia-pwa', label: 'Portal cliente', status: 'pendiente', due: null },
  ],
}
