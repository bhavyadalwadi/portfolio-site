import type { ContactInput } from "@/lib/validation/contact";

export type ContactResponse =
  | { status: "received"; messageId: string }
  | { status: "rejected"; errors: Array<{ field: string; issue: string }> }
  | { status: "failed"; message: string };

export async function submitContact(input: ContactInput): Promise<ContactResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  return (await response.json()) as ContactResponse;
}
