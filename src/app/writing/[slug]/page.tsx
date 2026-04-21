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
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <section className="py-[140px] pt-[180px] max-[1199px]:py-28 max-[767px]:py-[72px]">
        <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6">
          <div className="max-w-[680px] ml-40 max-[1199px]:max-w-[580px] max-[1199px]:ml-20 max-[767px]:max-w-full max-[767px]:ml-0">
            <p className="type-mono-meta uppercase">
              {article.date} &nbsp; · &nbsp; {article.readTime} &nbsp; ·
              &nbsp; {article.category}
            </p>
            <h1 className="type-h1 mt-4">{article.title}</h1>
            <p className="type-post-lead">{article.standfirst}</p>

            <MdxContent source={article.content} />

            <div className="mt-24 pt-8 border-t border-rule font-sans text-[17px] text-ink-80 flex flex-col gap-2">
              <span>Written by Marc Anthony Rosa.</span>
              <span>If this is useful, forward it to one person.</span>
              <Link className="link-grow" href="/contact">
                Start a conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
