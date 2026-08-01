# How to publish a new blog post

You don't need to install anything or know how to code. Everything happens on the
GitHub website in your browser. It takes about 5 minutes.

## Step 1 — Open this folder on GitHub

Go to the `blog-posts` folder in the website's GitHub repository (ask whoever set
this up for the link if you don't have it bookmarked).

## Step 2 — Create a new file

1. Click the **Add file** button, then **Create new file**.
2. For the file name, type something like:

   ```
   blog-posts/2026-08-15-my-post-title.md
   ```

   - Start with today's date in `YYYY-MM-DD` format, then a dash, then a short
     version of your title with dashes instead of spaces.
   - The file must end in `.md`.
   - Examples: `2026-08-15-leading-through-uncertainty.md`,
     `2026-09-02-what-i-tell-new-managing-directors.md`

## Step 3 — Copy the template

Open `TEMPLATE.md` in this same folder, copy everything in it, and paste it into
the new file you just created. Then fill it in:

- **title** — the headline of your post.
- **date** — the publish date, in `2026-08-15` format.
- **excerpt** — one or two sentences that summarize the post. This is what shows
  up on the blog listing page.
- **author** — leave as "Arvind Nachaya" unless someone else is writing it.
- Everything below the second `---` line is the actual post. Write it in plain
  text. Leave a blank line between paragraphs. See `TEMPLATE.md` for how to add
  headings, bullet points, bold text, and links.

**Do not delete or change the two `---` lines** — they mark where the title/date
info ends and the post content begins.

## Step 4 — Publish it

1. Scroll to the bottom of the page.
2. Under "Commit changes," you can leave the default message or write something
   like "Add new blog post."
3. Make sure **"Commit directly to the main branch"** is selected.
4. Click **Commit changes**.

That's it. The website automatically rebuilds and your new post will appear on
the `/blog/` page and the homepage within a couple of minutes — no further steps
needed.

## To edit or remove a post later

Find the file in this folder on GitHub, click the pencil (edit) icon to make
changes, or use the file's "..." menu to delete it. Commit the change the same
way as above.

## A few things to know

- Posts are sorted automatically by date, newest first — you don't need to
  reorder anything.
- If you want to write a post but aren't ready to publish it yet, add a line
  `draft: true` under the `author:` line in the file. It will be saved but won't
  appear on the live site until you remove that line.
- If something looks broken after publishing, double-check that both `---`
  lines are still there and that `title:` has some text after it — that's the
  most common mistake.
