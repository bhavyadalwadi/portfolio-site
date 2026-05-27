import { test, expect } from "@playwright/test";

test("US3 conversion path", async ({ page }) => {
  await page.goto("/resume");
  await expect(page.getByRole("link", { name: /Download PDF Resume/i })).toBeVisible();
  await page.getByRole("link", { name: /Contact Me/i }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("heading", { name: /^Contact$/i })).toBeVisible();
});
