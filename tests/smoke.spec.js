import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = ['/', '/sobre', '/metodo', '/agendar', '/privacidad']

for (const path of routes) {
  test(`loads ${path}`, async ({ page }) => {
    const res = await page.goto(path, { waitUntil: 'domcontentloaded' })
    expect(res?.ok(), `${path} should return 2xx`).toBeTruthy()
    await expect(page.locator('#contenido')).toBeVisible()

    const results = await new AxeBuilder({ page }).analyze()
    const critical = results.violations.filter((v) => v.impact === 'critical')
    expect(
      critical,
      critical.map((v) => `${v.id}: ${v.help}`).join('\n') || 'no critical axe issues',
    ).toEqual([])
  })
}
