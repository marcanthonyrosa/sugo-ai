import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { MdxContent } from "@/components/writing/MdxContent";
import { getArticleBySlug, getAllSlugs } from "@/lib/mdx";

interface WritingPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function WritingPostPage({ params }: WritingPostPageProps) {
  if (process.env.NODE_ENV !== "development") notFound();

  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <section className="py-[100px] pt-[140px] max-[767px]:py-[56px] max-[767px]:pt-[100px]">
        <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6">
          <div className="max-w-[680px]">
            <p className="type-mono-meta uppercase">
              {article.date} &nbsp; &middot; &nbsp; {article.readTime} &nbsp;
              &middot; &nbsp; {article.category}
            </p>
            <h1 className="type-h1 mt-4">{article.title}</h1>
            <p className="type-post-lead">{article.standfirst}</p>

            <MdxContent source={article.content} />

            <div
              className="mt-20 pt-8 font-sans text-[15px] flex flex-col gap-2"
              style={{
                borderTop: "1px solid var(--color-rule-soft)",
                color: "var(--color-ink-700)",
              }}
            >
              <span>Written by Marc Anthony Rosa.</span>
              <span>If this is useful, forward it to one person.</span>
              <Link className="btn-ghost mt-2" href="/contact" style={{ border: "none" }}>
                Start a conversation <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
