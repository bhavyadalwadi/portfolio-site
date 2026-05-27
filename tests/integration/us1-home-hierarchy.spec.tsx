import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import { expectHasClass, expectReadableCopy } from "@/tests/integration/style-assertions";

describe("US1 home hierarchy", () => {
  it("renders an editorial first screen with hierarchy", () => {
    render(<HomePage />);
    const heading = screen.getByRole("heading", {
      name: /building product-grade software with pragmatic ai integration/i,
    });
    const eyebrow = screen.getByText(/^Selected Work$/i, { selector: "div" });
    expectHasClass(eyebrow as HTMLElement, "eyebrow");
    expectReadableCopy(heading.textContent ?? "");
  });
});