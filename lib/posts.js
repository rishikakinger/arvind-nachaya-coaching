import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "blog-posts");

function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") && !/^(TEMPLATE|README)/i.test(f));

  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      if (!data.title) return null;

      const baseName = file.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
      const slug = slugify(data.slug || baseName);
      const date = data.date ? new Date(data.date) : new Date();
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
        content,
      };
    })
    .filter(Boolean)
    .filter((post) => !post.draft);

  posts.sort((a, b) => b.date - a.date);
  return posts;
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug) || null;
}

export function renderMarkdown(content) {
  return marked.parse(content);
}
