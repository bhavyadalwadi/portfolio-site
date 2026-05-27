import { render, screen } from "@testing-library/react";
import { MainNav } from "@/components/layout/MainNav";

describe("navigation scope", () => {
  it("shows launch navigation destinations", () => {
    render(<MainNav />);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: "Case Studies" })).toHaveAttribute("href", "/case-studies");
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute("href", "/resume");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
  });
});
