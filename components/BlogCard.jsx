import Link from "next/link";

export function BlogCard({ post }) {
  return (
    <Link className="card glass blog-card" href={`/blog/${post.slug}/`}>
      <div className="blog-date">{post.dateLabel}</div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span className="read-more">Read article</span>
    </Link>
  );
}
