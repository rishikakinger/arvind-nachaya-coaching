// Static site build: renders the homepage template plus a blog
// (index + one page per post) from markdown files in /blog-posts.
// Run with `npm run build`; output goes to /dist, which is what
// gets deployed.

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

const ROOT = __dirname;
const POSTS_DIR = path.join(ROOT, "blog-posts");
const DIST_DIR = path.join(ROOT, "dist");
const TEMPLATES_DIR = path.join(ROOT, "templates");

function clean(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeHtml(str = "") {
  return String(str).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

function readPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") && !/^(TEMPLATE|README)/i.test(f));

  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);

      if (!data.title) {
        console.warn(`[blog] Skipping ${file}: missing "title" in frontmatter`);
        return null;
      }

      const baseName = file.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
      const slug = slugify(data.slug || baseName);
      const date = data.date ? new Date(data.date) : new Date();

      if (isNaN(date.getTime())) {
        console.warn(`[blog] "${file}" has an invalid date, using today's date instead.`);
      }

      const safeDate = isNaN(date.getTime()) ? new Date() : date;

      return {
        slug,
        title: data.title,
        date: safeDate,
        dateLabel: safeDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        excerpt: data.excerpt || "",
        author: data.author || "Arvind Nachaya",
        draft: Boolean(data.draft),
        html: marked.parse(content),
      };
    })
    .filter(Boolean)
    .filter((post) => !post.draft);

  posts.sort((a, b) => b.date - a.date);
  return posts;
}

function layout({ title, description, body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div class="bg-glow" aria-hidden="true"></div>

  <header class="topbar">
    <div class="container nav">
      <a href="/#home" class="brand">
        Arvind Nachaya
        <span>Executive Coach</span>
      </a>

      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navLinks">
        <span></span><span></span><span></span>
      </button>

      <nav class="nav-links" id="navLinks">
        <a href="/#who">Who I Work With</a>
        <a href="/#focus">Focus Areas</a>
        <a href="/#approach">Approach</a>
        <a href="/#about">About</a>
        <a href="/blog/">Blog</a>
        <a href="/#faq">FAQ</a>
        <a href="/#contact" class="btn btn-primary" style="padding: 10px 18px;" data-cta="primary">Book a Discovery Conversation</a>
      </nav>
    </div>
  </header>

  <main>
${body}
  </main>

  <footer>
    <div class="container">
      &copy; 2026 Arvind Nachaya. All rights reserved.
    </div>
  </footer>

  <button class="back-to-top" id="backToTop" aria-label="Back to top">&uarr;</button>

  <script src="/script.js" defer></script>
</body>
</html>`;
}

function blogCard(post) {
  return `<a class="card glass blog-card reveal" href="/blog/${post.slug}/">
          <div class="blog-date">${post.dateLabel}</div>
          <h3>${escapeHtml(post.title)}</h3>
          <p>${escapeHtml(post.excerpt)}</p>
          <span class="read-more">Read article</span>
        </a>`;
}

function buildBlogIndex(posts) {
  const cards = posts.length
    ? posts.map(blogCard).join("\n")
    : '<p class="blog-empty">New articles are on the way — check back soon.</p>';

  const body = `    <section class="section" id="blog-index">
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow">Insights</div>
          <h2>Perspectives on leadership, strategy, and growth</h2>
          <p class="lead">Reflections and field notes from coaching senior leaders through growth, transition, and complexity.</p>
        </div>
        <div class="blog-grid">
        ${cards}
        </div>
      </div>
    </section>`;

  const html = layout({
    title: "Blog | Arvind Nachaya Executive Coaching",
    description:
      "Insights on strategic thinking, executive presence, and resilient leadership from executive coach Arvind Nachaya.",
    body,
  });

  fs.mkdirSync(path.join(DIST_DIR, "blog"), { recursive: true });
  fs.writeFileSync(path.join(DIST_DIR, "blog", "index.html"), html);
}

function buildPost(post) {
  const body = `    <article class="section">
      <div class="container article">
        <a class="article-back reveal" href="/blog/">&larr; Back to all articles</a>
        <div class="eyebrow reveal">Insights</div>
        <h1 class="reveal">${escapeHtml(post.title)}</h1>
        <div class="article-meta reveal">${post.dateLabel} &middot; ${escapeHtml(post.author)}</div>
        <div class="article-body reveal">
${post.html}
        </div>
      </div>
    </article>`;

  const html = layout({
    title: `${post.title} | Arvind Nachaya`,
    description: post.excerpt || post.title,
    body,
  });

  const dir = path.join(DIST_DIR, "blog", post.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

function buildHome(posts) {
  const templatePath = path.join(TEMPLATES_DIR, "index.html");
  let html = fs.readFileSync(templatePath, "utf8");

  const latest = posts.slice(0, 3);
  const teaser = latest.length
    ? `    <section class="section" id="insights">
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow">Insights</div>
          <h2>Latest from the blog</h2>
        </div>
        <div class="blog-grid">
        ${latest.map(blogCard).join("\n")}
        </div>
      </div>
    </section>`
    : "";

  html = html.replace("<!-- LATEST_POSTS -->", teaser);
  fs.writeFileSync(path.join(DIST_DIR, "index.html"), html);
}

function copyStatic() {
  fs.copyFileSync(path.join(ROOT, "styles.css"), path.join(DIST_DIR, "styles.css"));
  fs.copyFileSync(path.join(ROOT, "script.js"), path.join(DIST_DIR, "script.js"));
}

function main() {
  clean(DIST_DIR);
  const posts = readPosts();
  buildHome(posts);
  buildBlogIndex(posts);
  posts.forEach(buildPost);
  copyStatic();
  console.log(`[build] ${posts.length} post(s) + homepage + blog index -> /dist`);
}

main();
