const TO = 'fabricioduarteoficial@gmail.com'
const recent = new Map()

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

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^\d{4}-\d{2}-\d{2}$/.test(day) || !/^\d{2}:\d{2}$/.test(hour)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid booking' })
  }

  const text = [
    'Pedido de entrevista 25 min — fabricioduarte.tech',
    `Nombre: ${name || '—'}`,
    `Email: ${email}`,
    `Slot (Buenos Aires): ${day} ${hour}`,
    `Idioma: ${locale || 'es'}`,
    '',
    note || '(sin nota)',
  ].join('\n')

  const key = useRuntimeConfig().resendApiKey
  if (!key) {
    throw createError({ statusCode: 503, statusMessage: 'Mail unavailable', data: { channel: 'mailto' } })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Fabricio Duarte <onboarding@resend.dev>',
      to: [TO],
      reply_to: email,
      subject: `Pedido de entrevista — ${name || email} — ${day} ${hour}`,
      text,
    }),
  })

  if (!res.ok) {
    throw createError({ statusCode: 502, statusMessage: 'Mail failed' })
  }

  return { ok: true }
})
