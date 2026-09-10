import Link from "next/link";

const posts = [
  { slug: "how-af2-thinks", title: "How AF2 Thinks", 
    summary: "1/03/26", date: "January, 2026" },
];

export default function BlogPage() {
  return (
    <div className="panel p-8 md:p-10">
      <h1 className="font-serif text-3xl italic mb-8 text-[var(--global-text-color)]">Writing</h1>
      <div className="space-y-6">
        {posts.map((post, i) => (
          <article
            key={post.slug}
            className={`group pb-6 ${i < posts.length - 1 ? "border-b border-[var(--global-border-color)]" : ""}`}
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-xl font-medium mb-1 text-[var(--global-text-color)] group-hover:text-[var(--global-theme-color)] transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--global-muted-color)] mb-3">{post.date}</p>
              <p className="text-[var(--global-muted-color)] leading-relaxed whitespace-pre-line">
                {post.summary}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
} 