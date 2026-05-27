export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <section className="empty-card" role="status" aria-live="polite">
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
