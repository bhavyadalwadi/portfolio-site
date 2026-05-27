import { test, expect } from "@playwright/test";

const routes = ["/", "/projects", "/about", "/contact"];

for (const route of routes) {
  test(`visual baseline capture ${route}`, async ({ page }, testInfo) => {
    await page.goto(route);
    const fileName = route === "/" ? "home" : route.replaceAll("/", "-").slice(1);
    const buffer = await page.screenshot({ fullPage: true });
    await testInfo.attach(`${fileName}-baseline`, {
      body: buffer,
      contentType: "image/png",
    });
    expect(buffer.byteLength).toBeGreaterThan(0);
  });
}