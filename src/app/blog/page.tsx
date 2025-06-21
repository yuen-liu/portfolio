import Link from "next/link";

const posts = [
  { slug: "first-post", title: "cold intros, warm intros, & a dream", 
    summary: "6/12/25:\nSummer" },
  { slug: "second-post", title: "internal conviction + meeting new ppl", 
    summary: "6/20/2025:\nSummer" },
];

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map(post => (
          <article 
            key={post.slug} 
            className="group p-6 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors duration-200"
          >
            <Link 
              href={`/blog/${post.slug}`} 
              className="block"
            >
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                {post.summary}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
} 