import { test, expect } from "@playwright/test";

test("US2 project detail exploration", async ({ page }) => {
  await page.goto("/case-studies");
  await expect(page.getByText(/localLLM/i)).toBeVisible();
  await expect(page.getByText(/Problem:/i).first()).toBeVisible();
  await expect(page.getByText(/Technical approach:/i).first()).toBeVisible();
  await expect(page.getByText(/Outcome:/i).first()).toBeVisible();
});
