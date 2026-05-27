"use client";

import { useState } from "react";
import { submitContact } from "@/lib/contact/submitContact";
import { siteContent } from "@/lib/content/site-content";
import { validateContactInput, type ContactInput } from "@/lib/validation/contact";

export function ContactForm() {
  const ui = siteContent.ui.contactPage.form;
  const [form, setForm] = useState<ContactInput>({ name: "", email: "", subject: "", message: "", sourcePage: ui.sourcePageDefault });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateContactInput(form);
    if (validation.length > 0) {
      setErrors(Object.fromEntries(validation.map((entry) => [entry.field, entry.issue])));
      setStatus("");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const result = await submitContact(form);

      if (result.status === "received") {
        setStatus(ui.successMessage);
        setForm({ name: "", email: "", subject: "", message: "", sourcePage: ui.sourcePageDefault });
        return;
      }

      if (result.status === "rejected") {
        setErrors(Object.fromEntries(result.errors.map((entry) => [entry.field, entry.issue])));
        setStatus("");
        return;
      }

      setStatus(result.message);
    } catch {
      setStatus(ui.serviceUnavailableMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label>
        <span className="meta-label">{ui.nameLabel}</span>
        <input
          name="name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <label>
        <span className="meta-label">{ui.emailLabel}</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <label>
        <span className="meta-label">{ui.subjectLabel}</span>
        <input
          name="subject"
          value={form.subject ?? ""}
          onChange={(event) => setForm({ ...form, subject: event.target.value })}
        />
        {errors.subject && <span className="error">{errors.subject}</span>}
      </label>
      <label>
        <span className="meta-label">{ui.messageLabel}</span>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
        />
        {errors.message && <span className="error">{errors.message}</span>}
      </label>
      <button className="primary" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="spinner" aria-hidden="true" />
            {ui.sendingLabel}
          </>
        ) : (
          ui.sendLabel
        )}
      </button>
      {status ? <span className={status.includes(ui.successMessage) ? "success" : "error"}>{status}</span> : null}
    </form>
  );
}
