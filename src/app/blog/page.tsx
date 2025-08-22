// example in src/app/blog/page.tsx
import { posts } from "velite/content"; // typed array

export default function BlogPage() {
  const published = posts
    .filter((p) => p.published)
    .sort((a, b) => +b.date - +a.date);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {published.map((p) => (
        <a
          key={p.slug}
          href={`/blog/${p.slug}`}
          className="block rounded-xl border p-4"
        >
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="text-sm opacity-70">{p.summary}</p>
        </a>
      ))}
    </div>
  );
}
