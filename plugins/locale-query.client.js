export default defineNuxtPlugin(() => {
  const { locale } = useLocale()
  const router = useRouter()
  router.afterEach((to) => {
    if (!import.meta.client) return
    if (to.query.lang === locale.value) return
    router.replace({ path: to.path, hash: to.hash, query: { ...to.query, lang: locale.value } })
  })
})
