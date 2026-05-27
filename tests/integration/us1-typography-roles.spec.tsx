import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("US1 typography roles", () => {
  it("shows monospace metadata and serif-led hero hierarchy", () => {
    render(<HomePage />);
    expect(screen.getByText(/what i bring/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});