import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = ['/', '/sobre', '/metodo', '/agendar', '/privacidad', '/trabajo', '/casos/ecom', '/trayectoria', '/en']

for (const path of routes) {
  test(`loads ${path}`, async ({ page }) => {
    const res = await page.goto(path, { waitUntil: 'domcontentloaded' })
    expect(res?.ok(), `${path} should return 2xx`).toBeTruthy()
    await expect(page.locator('#contenido')).toBeVisible()

    const results = await new AxeBuilder({ page }).analyze()
    const blocking = results.violations.filter((v) => v.impact === 'critical' || (v.id === 'color-contrast' && v.impact === 'serious'))
    expect(
      blocking,
      blocking.map((v) => `${v.id} (${v.impact}): ${v.help}`).join('\n') || 'no blocking axe issues',
    ).toEqual([])
  })
}

test('english home is not Spanish', async ({ page }) => {
  await page.goto('/en', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('link', { name: 'Book 25 min' }).first()).toBeVisible()
  await expect(page.locator('#top').getByText('I also ship the product')).toBeVisible()
})

test('ecom case leads with the problem and ships FAQ JSON-LD', async ({ page }) => {
  await page.goto('/casos/ecom', { waitUntil: 'domcontentloaded' })
  await expect(page.getByRole('heading', { name: 'El problema que hay que resolver' })).toBeVisible()
  await expect(page.locator('p.text-muted', { hasText: 'Celery / Redis' })).toBeVisible()
  const html = await page.content()
  expect(html).toMatch(/FAQPage/)
  expect(html).toMatch(/BreadcrumbList/)
})
