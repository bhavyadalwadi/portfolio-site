import { test, expect } from "@playwright/test";

test("launch scope navigation", async ({ page }) => {
  await page.goto("/");
  const nav = page.locator("nav[aria-label='Primary']");
  await expect(nav.getByRole("link", { name: "Home", exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "About", exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Projects", exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Resume", exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Contact", exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Case Studies", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Writing" })).toHaveCount(0);
});
