export function trackProjectClick(slug: string): void {
  if (typeof window === "undefined") return;
  const key = `portfolio_click_${slug}`;
  const previous = Number(window.localStorage.getItem(key) ?? "0");
  window.localStorage.setItem(key, String(previous + 1));
}
