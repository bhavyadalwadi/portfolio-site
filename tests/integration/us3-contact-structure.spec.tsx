import { render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";

describe("US3 contact structure", () => {
  it("renders reach-out methods and best-fit copy", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: /^Contact$/i })).toBeInTheDocument();
    expect(screen.getByText(/Reach Out/i)).toBeInTheDocument();
    const methods = screen.getAllByRole("listitem").map((node) => node.textContent?.trim() ?? "");
    expect(methods).toContain("Email");
    expect(methods).toContain("LinkedIn");
    expect(methods).toContain("GitHub");
    expect(screen.getByText(/Best fit/i)).toBeInTheDocument();
  });
});
