import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const cssPath = path.resolve(process.cwd(), "app/globals.css");

describe("motion token limits", () => {
  it("keeps hover and reveal transitions restrained", () => {
    const css = fs.readFileSync(cssPath, "utf8");
    const hoverMatch = css.match(/--duration-hover:\s*(\d+)ms/);
    const revealMatch = css.match(/--duration-reveal:\s*(\d+)ms/);

    expect(Number(hoverMatch?.[1])).toBeLessThanOrEqual(200);
    expect(Number(revealMatch?.[1])).toBeLessThanOrEqual(400);
  });

  it("avoids banned motion patterns in stylesheet", () => {
    const css = fs.readFileSync(cssPath, "utf8").toLowerCase();
    expect(css).not.toContain("bounce");
    expect(css).not.toContain("infinite");
  });
});