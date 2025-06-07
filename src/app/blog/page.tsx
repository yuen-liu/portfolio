import Link from "next/link";

const posts = [
  { slug: "first-post", title: "First Blog Post", summary: "This is a summary of the first blog post." },
  { slug: "second-post", title: "Second Blog Post", summary: "This is a summary of the second blog post." },
];

export default function BlogPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug} className="border p-4 rounded bg-neutral-100">
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:underline">{post.title}</Link>
            <p className="text-neutral-700">{post.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
} 