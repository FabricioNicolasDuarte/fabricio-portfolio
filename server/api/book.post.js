const TO = 'fabricioduarteoficial@gmail.com'
const recent = new Map()

const MAIL = {
  es: {
    title: 'Pedido de entrevista 25 min — fabricioduarte.tech',
    name: 'Nombre',
    email: 'Email',
    slot: 'Horario (Buenos Aires)',
    lang: 'Idioma',
    empty: '(sin nota)',
    subject: 'Pedido de entrevista',
  },
  en: {
    title: '25 min interview request — fabricioduarte.tech',
    name: 'Name',
    email: 'Email',
    slot: 'Slot (Buenos Aires)',
    lang: 'Language',
    empty: '(no note)',
    subject: 'Interview request',
  },
  pt: {
    title: 'Pedido de entrevista 25 min — fabricioduarte.tech',
    name: 'Nome',
    email: 'E-mail',
    slot: 'Horário (Buenos Aires)',
    lang: 'Idioma',
    empty: '(sem nota)',
    subject: 'Pedido de entrevista',
  },
  zh: {
    title: '25 分钟面试申请 — fabricioduarte.tech',
    name: '姓名',
    email: '邮箱',
    slot: '时段（布宜诺斯艾利斯）',
    lang: '语言',
    empty: '（无备注）',
    subject: '面试申请',
  },
}

function tooMany(ip) {
  const now = Date.now()
  const hits = (recent.get(ip) || []).filter((t) => now - t < 15 * 60 * 1000)
  hits.push(now)
  recent.set(ip, hits)
  return hits.length > 8
}

function clean(value, max) {
  return String(value || '').trim().slice(0, max)
}

export default defineEventHandler(async (event) => {
  const ip = getRequestHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  if (tooMany(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests' })
  }

  const body = await readBody(event).catch(() => ({}))
  if (clean(body.company_url, 200)) {
    return { ok: true }
  }

  const name = clean(body.name, 120)
  const email = clean(body.email, 160)
  const day = clean(body.day, 12)
  const hour = clean(body.hour, 8)
  const note = clean(body.note, 800)
  const locale = clean(body.locale, 8)
  const copy = MAIL[locale] || MAIL.es

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^\d{4}-\d{2}-\d{2}$/.test(day) || !/^\d{2}:\d{2}$/.test(hour)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid booking' })
  }

  const text = [
    copy.title,
    `${copy.name}: ${name || '—'}`,
    `${copy.email}: ${email}`,
    `${copy.slot}: ${day} ${hour}`,
    `${copy.lang}: ${locale || 'es'}`,
    '',
    note || copy.empty,
  ].join('\n')

  const config = useRuntimeConfig()
  const key = config.resendApiKey
  const from = config.resendFrom
  const fromOk = from && !String(from).includes('onboarding@resend.dev')
  if (!key || !fromOk) {
    throw createError({ statusCode: 503, statusMessage: 'Mail unavailable', data: { channel: 'mailto' } })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [TO],
      reply_to: email,
      subject: `${copy.subject} — ${name || email} — ${day} ${hour}`,
      text,
    }),
  })

  if (!res.ok) {
    throw createError({ statusCode: 502, statusMessage: 'Mail failed' })
  }

  return { ok: true }
})
