import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { MdxContent } from "@/components/writing/MdxContent";
import { getArticleBySlug, getAllSlugs } from "@/lib/mdx";
import { createPageMetadata } from "@/lib/seo";
import "../../pages-sub.css";

interface WritingPostPageProps {
  params: Promise<{ slug: string }>;
}

/* Temporarily gated — placeholder essay bodies; flip to true to re-enable. */
const WRITING_ENABLED = false;

export function generateStaticParams() {
  if (!WRITING_ENABLED) return [];
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WritingPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return createPageMetadata({
    title: article.title,
    description: article.standfirst,
    path: `/writing/${slug}`,
    socialTitle: article.title,
    type: "article",
    noIndex: !WRITING_ENABLED,
  });
}

export default async function WritingPostPage({
  params,
}: WritingPostPageProps) {
  if (!WRITING_ENABLED) notFound();
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <main id="main" className="pg-post">
        <article className="post">
          <div className="wrap">
            <p className="post__meta">
              {article.date} · {article.readTime} · {article.category}
            </p>
            <h1>{article.title}</h1>
            <p className="post__standfirst">{article.standfirst}</p>

            <MdxContent source={article.content} />

            <div className="post__close">
              <span>Written by Marc Rosa.</span>
              <span>If this is useful, forward it to one person.</span>
              <Link className="link" href="/contact">
                Start a conversation →
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
