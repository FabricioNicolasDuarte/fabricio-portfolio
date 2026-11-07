import { chromium } from '@playwright/test'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const jobs = [
  { html: 'public/cv/cv-visual.html', out: 'public/cv/cv-visual.pdf', print: true },
  { html: 'public/cv/cv-ats.html', out: 'public/cv/cv-ats.pdf', print: false },
  { html: 'public/cv/cv-ats-en.html', out: 'public/cv/cv-ats-en.pdf', print: false },
  { html: 'public/cv/cv-ats-pt.html', out: 'public/cv/cv-ats-pt.pdf', print: false },
]

const browser = await chromium.launch()
for (const job of jobs) {
  const html = path.resolve(job.html)
  const out = path.resolve(job.out)
  const page = await browser.newPage()
  await page.goto(pathToFileURL(html).href, { waitUntil: 'networkidle' })
  if (job.print) await page.emulateMedia({ media: 'print' })
  await page.pdf({
    path: out,
    format: 'A4',
    printBackground: true,
    margin: { top: '14mm', bottom: '14mm', left: '12mm', right: '12mm' },
  })
  await page.close()
  console.log(`Wrote ${out}`)
}
await browser.close()
