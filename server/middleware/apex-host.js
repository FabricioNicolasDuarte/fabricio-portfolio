export default defineEventHandler((event) => {
  const host = (getRequestHeader(event, 'host') || '').split(':')[0].toLowerCase()
  if (host !== 'www.fabricioduarte.tech') return
  const path = event.path || '/'
  return sendRedirect(event, `https://fabricioduarte.tech${path}`, 301)
})
