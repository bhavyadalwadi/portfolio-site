import { siteContent } from "@/lib/content/site-content";

export type ContactInput = {
  name: string;
  email: string;
  message: string;
  subject?: string;
  sourcePage?: string;
};

export type ContactValidationError = {
  field: keyof ContactInput;
  issue: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactInput(input: ContactInput): ContactValidationError[] {
  const validation = siteContent.ui.contactPage.validation;
  const errors: ContactValidationError[] = [];

  if (!input.name || input.name.trim().length < 1 || input.name.length > 80) {
    errors.push({ field: "name", issue: validation.name });
  }

  if (!EMAIL_PATTERN.test(input.email)) {
    errors.push({ field: "email", issue: validation.email });
  }

  if (!input.message || input.message.trim().length < 20 || input.message.length > 2000) {
    errors.push({ field: "message", issue: validation.message });
  }

  if (input.subject && input.subject.length > 120) {
    errors.push({ field: "subject", issue: validation.subject });
  }

  return errors;
}
