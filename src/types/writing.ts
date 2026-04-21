/**
 * Types for writing/article content.
 * Actual content lives in /content/writing/*.mdx files.
 * Loading is handled by src/lib/mdx.ts.
 */

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
