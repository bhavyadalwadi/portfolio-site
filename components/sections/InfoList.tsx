export function InfoList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <article className="about-panel interaction-soft">
      <div className="meta-label">{title}</div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
