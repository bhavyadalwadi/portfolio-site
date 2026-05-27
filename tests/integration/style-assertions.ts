import { expect } from "vitest";

export function expectHasClass(node: HTMLElement, className: string) {
  expect(node.className.split(" ")).toContain(className);
}

export function expectReadableCopy(text: string) {
  expect(text.length).toBeGreaterThan(20);
}