import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:3003",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev -- --port 3003",
    url: "http://127.0.0.1:3003",
    timeout: 120000,
    reuseExistingServer: false,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
