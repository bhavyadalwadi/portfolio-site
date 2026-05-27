import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ContactForm } from "@/components/sections/ContactForm";

describe("contact form", () => {
  it("shows validation errors for invalid input", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(await screen.findByText(/name must be between 1 and 80 characters/i)).toBeInTheDocument();
  });

  it("submits valid input and shows success state", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: async () => ({ status: "received", messageId: "msg-123" }),
      }),
    );

    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Jordan" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "jordan@example.com" } });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "I am hiring for a senior product engineering role and want to connect." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(await screen.findByText(/thanks. your message has been received/i)).toBeInTheDocument();

    vi.unstubAllGlobals();
  });
});
