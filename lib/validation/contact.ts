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
  const errors: ContactValidationError[] = [];

  if (!input.name || input.name.trim().length < 1 || input.name.length > 80) {
    errors.push({ field: "name", issue: "Name must be between 1 and 80 characters." });
  }

  if (!EMAIL_PATTERN.test(input.email)) {
    errors.push({ field: "email", issue: "Email must be valid." });
  }

  if (!input.message || input.message.trim().length < 20 || input.message.length > 2000) {
    errors.push({ field: "message", issue: "Message must be between 20 and 2000 characters." });
  }

  if (input.subject && input.subject.length > 120) {
    errors.push({ field: "subject", issue: "Subject must be 120 characters or fewer." });
  }

  return errors;
}
