import { test, expect } from "@playwright/test";

test("US2 editorial scanability", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: "Projects", exact: true })).toBeVisible();
  await page.getByRole("link", { name: /case study/i }).first().click();
  await expect(page.getByRole("heading", { name: "Case Studies", exact: true })).toBeVisible();
});