import type { ReactNode } from "react";

export function ContentSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="page-section section-shell reveal-soft">
      <div className="section-heading measure">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
