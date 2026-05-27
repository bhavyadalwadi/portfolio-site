import { test, expect } from "@playwright/test";

test("US3 subtle motion", async ({ page }) => {
  await page.goto("/");
  const navChip = page.locator("nav[aria-label='Primary']").getByRole("link", { name: "Projects", exact: true });
  await navChip.hover();
  await expect(navChip).toBeVisible();
  const duration = await navChip.evaluate((node) => getComputedStyle(node).transitionDuration);
  expect(duration).toContain("0.14s");
});