import { siteContent } from "@/lib/content/site-content";

export function ProjectTagList({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="tags" aria-label={siteContent.ui.projectCards.projectTagsAriaLabel}>
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}
