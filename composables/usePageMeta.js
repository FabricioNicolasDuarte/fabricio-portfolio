export function usePageMeta(pageTitle) {
  const { t } = useLocale()
  const title = computed(() => {
    const extra = typeof pageTitle === 'function' ? pageTitle() : unref(pageTitle)
    if (!extra) return t.value.meta.title
    return `${extra} — Fabricio Duarte`
  })
  useHead({
    title,
    meta: [
      { property: 'og:title', content: title },
      { name: 'twitter:title', content: title },
    ],
  })
}
