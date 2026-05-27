import { test, expect } from "@playwright/test";

test("US1 premium first impression", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByText(/what i bring/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: "Selected Work", exact: true })).toBeVisible();
});