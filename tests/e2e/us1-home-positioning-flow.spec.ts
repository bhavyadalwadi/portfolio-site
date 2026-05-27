import { test, expect } from "@playwright/test";

test("US1 home positioning flow", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/Staff-Leaning Full-Stack Engineer/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: /Building product-grade software with pragmatic AI integration/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /View Projects/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Download Resume/i })).toBeVisible();
});
