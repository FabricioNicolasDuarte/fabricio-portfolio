/**
 * Propuestas comerciales privadas (enlace directo, noindex).
 * No van al nav público ni al sitemap.
 */

export const WHATSAPP = {
  phone: '543704022201',
  /** Mensaje base; la página agrega el nombre del proyecto */
  baseText: 'Hola Fabricio, consulto por la propuesta',
}

export function whatsappHref(projectLabel) {
  const text = `${WHATSAPP.baseText} ${projectLabel}`
  return `https://wa.me/${WHATSAPP.phone}?text=${encodeURIComponent(text)}`
}

export const PROPUESTAS = [
  {
    slug: 'axia',
    client: 'AXIA Real Estate',
    title: 'Plataforma de inversión inmobiliaria',
    summary:
      'App web instalable (iPhone, Android y PC): sitio público, portal del inversor, cobranzas con IA, administración de rentas y registro operativo. Producto con propiedad a nombre del cliente.',
    status: 'Vigente',
    horizon: '3–4 meses',
    investment: {
      reference: 7000,
      proposed: 3500,
      currency: 'USD',
      discountLabel: '50% en mano de obra',
    },
    operation: {
      monthly: 150,
      currency: 'USD',
      label: 'Infraestructura + soporte + mantenimiento + versiones',
    },
    stages: [
      {
        id: 1,
        name: 'Sitio público + editor',
        when: '2–3 semanas',
        ref: 1400,
        price: 700,
        text: 'Home y secciones con panel para textos, fotos, videos y orden de bloques.',
        priority: true,
      },
      {
        id: 2,
        name: 'Portal del cliente',
        when: '3–4 semanas',
        ref: 2100,
        price: 1050,
        text: 'Login, unidades, cuotas, documentos, obra, alertas y mensajes.',
      },
      {
        id: 3,
        name: 'Pagos + OCR + historial',
        when: '2–3 semanas',
        ref: 1400,
        price: 700,
        text: 'Canales locales, subida de comprobante, lectura con IA y confirmación humana.',
      },
      {
        id: 4,
        name: 'Admin. de inversiones',
        when: '2–3 semanas',
        ref: 980,
        price: 490,
        text: 'Mandatos de renta, liquidaciones y vista clara para el inversor.',
      },
      {
        id: 5,
        name: 'Contabilidad operativa',
        when: '1–2 semanas',
        ref: 700,
        price: 350,
        text: 'Movimientos ordenados y exportación para el contador externo.',
      },
      {
        id: 6,
        name: 'QA, capacitación y entrega',
        when: '1 semana',
        ref: 420,
        price: 210,
        text: 'Pruebas en móvil/PC, manual breve y transferencia de accesos.',
      },
    ],
    infra: [
      { item: 'Hosting', amount: 'USD 35 / mes' },
      { item: 'Supabase (datos y accesos)', amount: 'USD 35 / mes' },
      { item: 'Dominio (USD 20 / año)', amount: 'USD 1,67 / mes prorrateado' },
      { item: 'Correo institucional', amount: 'USD 0 · lo gestiona el cliente' },
      {
        item: 'Soporte técnico + mantenimiento + actualización de versiones',
        amount: 'Incluido hasta completar USD 150',
      },
    ],
    paymentPlans: [
      {
        id: 'A',
        name: 'Por hitos',
        featured: true,
        total: 3500,
        detail: [
          '40% al firmar (USD 1.400)',
          '35% al portal operativo (USD 1.225)',
          '25% a la entrega final (USD 875)',
        ],
      },
      {
        id: 'B',
        name: 'Mensual',
        featured: false,
        total: 3500,
        detail: ['5 cuotas de USD 700', 'Primera al firmar; luego cada mes'],
      },
    ],
    ownership:
      'El producto (código, diseño y configuración) queda a nombre de Axia. No es un alquiler de software ajeno.',
    techNote:
      'Una sola aplicación web instalable (PWA). Sin App Store al inicio. Pagos vía proveedor local; IA de comprobantes con confirmación humana.',
    excludes: [
      'Apps nativas en tiendas Apple/Google',
      'Publicidad y redacción de marketing',
      'Blockchain / sensores de edificio',
      'Gestión del correo institucional',
      'Honorario del contador externo',
    ],
  },
]

export function getPropuesta(slug) {
  return PROPUESTAS.find((p) => p.slug === slug) || null
}

export function money(n) {
  return new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)
}
