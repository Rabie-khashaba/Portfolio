export default async function run(page) {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() =>
    document.querySelector(".portfolio-skills-grid")?.scrollIntoView(),
  );
  await page.waitForTimeout(400);
  await page.screenshot({ path: "skills-mobile.png" });
  return "ok";
}
