import { Reveal } from "@/components/Reveal";
import { BlogCard } from "@/components/BlogCard";
import { AnimatedGroup } from "@/components/core/animated-group";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Arvind Nachaya Executive Coaching",
  description:
    "Insights on strategic thinking, executive presence, and resilient leadership from executive coach Arvind Nachaya.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="section" id="blog-index">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Insights</div>
          <h2>Perspectives on leadership, strategy, and growth</h2>
          <p className="lead">
            Reflections and field notes from coaching senior leaders through
            growth, transition, and complexity.
          </p>
        </Reveal>

        {posts.length ? (
          <AnimatedGroup className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </AnimatedGroup>
        ) : (
          <p className="blog-empty">New articles are on the way — check back soon.</p>
        )}
      </div>
    </section>
  );
}
