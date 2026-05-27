import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("homepage", () => {
  it("shows primary home architecture sections", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: /building product-grade software with pragmatic ai integration/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /selected work/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /how i work/i })).toBeInTheDocument();
  });
});
