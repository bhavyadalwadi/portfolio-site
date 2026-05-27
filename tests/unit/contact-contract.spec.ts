import { describe, expect, it } from "vitest";
import { validateContactInput } from "@/lib/validation/contact";

describe("contact contract", () => {
  it("accepts valid payload", () => {
    const errors = validateContactInput({
      name: "Alex",
      email: "alex@example.com",
      message: "I would like to discuss a product engineering contract.",
      subject: "Contract inquiry",
      sourcePage: "/contact",
    });

    expect(errors).toHaveLength(0);
  });

  it("rejects invalid payload", () => {
    const errors = validateContactInput({
      name: "",
      email: "bad-email",
      message: "short",
    });

    expect(errors.length).toBeGreaterThan(0);
  });
});
