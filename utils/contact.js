/** Contacto directo — WhatsApp (mismo número que fabricioduarte-v2 / panel AXIA). */
export const WHATSAPP_E164 = '543704022201'

const WHATSAPP_PREFILL = {
  es: 'Hola Fabricio, quisiera conversar sobre un proyecto de datos o software',
  en: 'Hi Fabricio, I would like to talk about a data or software project',
  pt: 'Olá Fabricio, gostaria de conversar sobre um projeto de dados ou software',
  zh: '你好 Fabricio，想聊聊数据或软件项目',
}

export function whatsappHref(locale = 'es') {
  const text = encodeURIComponent(WHATSAPP_PREFILL[locale] || WHATSAPP_PREFILL.es)
  return `https://wa.me/${WHATSAPP_E164}?text=${text}`
}
