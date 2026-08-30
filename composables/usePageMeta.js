export function usePageMeta(pageTitle) {
  const { t, pagePath } = useLocale()
  const title = computed(() => {
    const extra = typeof pageTitle === 'function' ? pageTitle() : unref(pageTitle)
    if (!extra) return t.value.meta.title
    return `${extra} — Fabricio Duarte`
  })
  const description = computed(() => t.value.meta.pages?.[pagePath.value] || t.value.meta.description)
  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
  })
}
