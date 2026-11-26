export default async function run(page) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.evaluate(() => document.querySelector('.portfolio-skills-grid')?.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(1400);
  await page.screenshot({ path: 'skills-desktop.png' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(600);
  await page.evaluate(() => document.querySelector('.portfolio-skills-grid')?.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'skills-mobile.png' });
  return 'ok';
}
