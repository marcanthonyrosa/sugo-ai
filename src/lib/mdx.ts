import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ArticleFrontmatter {
  title: string;
  date: string;
  readTime: string;
  category: string;
  standfirst: string;
}

export interface ArticleMeta extends ArticleFrontmatter {
  slug: string;
}

export interface ArticleWithContent extends ArticleMeta {
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content/writing");

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      readTime: data.readTime as string,
      category: data.category as string,
      standfirst: data.standfirst as string,
    };
  });

  // Sort by date descending (newest first)
  const monthOrder: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };

  articles.sort((a, b) => {
    const [aMonth, aYear] = a.date.split(" ");
    const [bMonth, bYear] = b.date.split(" ");
    const aVal = parseInt(aYear) * 12 + (monthOrder[aMonth] ?? 0);
    const bVal = parseInt(bYear) * 12 + (monthOrder[bMonth] ?? 0);
    return bVal - aVal;
  });

  return articles;
}

export function getArticleBySlug(slug: string): ArticleWithContent | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    readTime: data.readTime as string,
    category: data.category as string,
    standfirst: data.standfirst as string,
    content,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
