import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const cssPath = path.resolve(process.cwd(), "app/globals.css");
const guardrailsPath = path.resolve(process.cwd(), "specs/002-engineering-portfolio-style/contracts/style-guardrails.md");

describe("style guardrails", () => {
  it("defines restrained palette and typography tokens", () => {
    const css = fs.readFileSync(cssPath, "utf8");
    expect(css).toContain("--font-serif");
    expect(css).toContain("--font-sans");
    expect(css).toContain("--font-mono");
    expect(css).toContain("--accent");
  });

  it("documents must-not rules against hype-heavy styling", () => {
    const contract = fs.readFileSync(guardrailsPath, "utf8");
    expect(contract).toContain("No loud gradient hero as primary identity");
    expect(contract).toContain("No purple-heavy AI branding aesthetic");
    expect(contract).toContain("No glassmorphism overload");
  });
});