import { ContactForm } from "@/components/sections/ContactForm";
import { getContactContent } from "@/lib/content/site-content-loader";

export default function ContactPage() {
  const content = getContactContent();

  return (
    <section className="page-section section-shell reveal-soft">
      <div className="section-heading measure">
        <div className="eyebrow">Contact</div>
        <h1>{content.intro.title}</h1>
        <p className="route-lead">{content.intro.body}</p>
      </div>

      <div className="about-grid">
        <div className="about-panel interaction-soft">
          <div className="meta-label">{content.methods.title}</div>
          <div className="contact-methods">
            {content.methods.entries.map((entry) => (
              <a key={entry.label} href={entry.href} className="contact-method-card">
                <strong>{entry.label}</strong>
                <span>{entry.value}</span>
                {entry.note ? <small>{entry.note}</small> : null}
              </a>
            ))}
          </div>
        </div>
        <div className="about-panel interaction-soft">
          <div className="meta-label">{content.closing.title}</div>
          <p className="body-copy">{content.closing.body}</p>
        </div>
      </div>

      <div className="contact-panel interaction-soft" id="contact-form">
        <ContactForm />
      </div>
    </section>
  );
}
