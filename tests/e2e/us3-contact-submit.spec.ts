import { test, expect } from "@playwright/test";

test("US3 contact submission flow", async ({ page }) => {
  await page.goto("/contact");
  await page.getByLabel("Name").fill("Taylor");
  await page.getByLabel("Email").fill("taylor@example.com");
  await page.getByLabel("Message").fill("I want to discuss a possible consulting engagement next quarter.");
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(page.getByText(/thanks. your message has been received/i)).toBeVisible();
});
