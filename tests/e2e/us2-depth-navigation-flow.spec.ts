import { test, expect } from "@playwright/test";

test("US2 depth navigation flow", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: /^Projects$/i })).toBeVisible();
  await page.getByRole("link", { name: /Case Study/i }).first().click();
  await expect(page).toHaveURL(/\/case-studies$/);
  await expect(page.getByRole("heading", { name: /^Case Studies$/i })).toBeVisible();
});
