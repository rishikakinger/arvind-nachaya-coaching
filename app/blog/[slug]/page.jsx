import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getAllPosts, getPostBySlug, renderMarkdown } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Arvind Nachaya`,
    description: post.excerpt || post.title,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = renderMarkdown(post.content);

  return (
    <article className="section">
      <div className="container article">
        <Link href="/blog/" className="article-back">
          ← Back to all articles
        </Link>
        <Reveal className="eyebrow">Insights</Reveal>
        <Reveal as="h1">{post.title}</Reveal>
        <Reveal className="article-meta">
          {post.dateLabel} · {post.author}
        </Reveal>
        <Reveal className="article-body" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </article>
  );
}
