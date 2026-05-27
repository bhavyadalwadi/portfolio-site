import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("US1 home section order", () => {
  it("renders the required home section labels", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: /building product-grade software with pragmatic ai integration/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^Selected Work$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^How I work$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^Deeper Case Studies$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^About$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Open to strong product and platform problems/i })).toBeInTheDocument();
  });
});
