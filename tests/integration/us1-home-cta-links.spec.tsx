import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("US1 home CTA links", () => {
  it("wires primary destination links", () => {
    render(<HomePage />);
    expect(screen.getByRole("link", { name: /view projects/i })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: /download resume/i })).toHaveAttribute("href", "/resume");
    expect(screen.getByRole("link", { name: /read case studies/i })).toHaveAttribute("href", "/case-studies");
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute("href", "/contact");
  });
});
