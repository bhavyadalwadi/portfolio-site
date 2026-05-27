export function ErrorState({ title, description }: { title: string; description: string }) {
  return (
    <section className="empty-card" role="alert">
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
