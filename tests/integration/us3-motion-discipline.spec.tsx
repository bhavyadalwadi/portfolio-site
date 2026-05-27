import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("US3 motion discipline", () => {
  it("applies restrained interaction classes to key first-screen surfaces", () => {
    render(<HomePage />);
    expect(screen.getByText(/what i bring/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view projects/i })).toBeInTheDocument();
  });
});