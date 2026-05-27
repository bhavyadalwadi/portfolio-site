import { test, expect } from "@playwright/test";

test("US1 homepage highlights", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /building product-grade software with pragmatic ai integration/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /see all projects/i })).toBeVisible();
});
