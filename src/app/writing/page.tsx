import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PotMark } from "@/components/ui/PotMark";
import { Footer } from "@/components/layout/Footer";
import { getAllArticles } from "@/lib/mdx";

export default function WritingPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  const articles = getAllArticles();

  return (
    <main>
      <section className="py-[84px] pt-[132px] max-[1199px]:py-16 max-[767px]:py-12">
        <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6">
          <div className="max-w-[680px] ml-40 max-[1199px]:max-w-[580px] max-[1199px]:ml-20 max-[767px]:max-w-full max-[767px]:ml-0">
            <div className="mb-10">
              <PotMark />
            </div>
            <SectionLabel n="—">Writing — Sugo AI</SectionLabel>
            <h1 className="type-h1">On the record.</h1>
            <p className="type-lead mt-10">
              A monthly essay on what&rsquo;s actually happening at the edge of
              enterprise AI{"\u200A—\u200A"}research, patterns from the field,
              and opinions worth disagreeing with.
            </p>

            <div className="type-callout bg-cream border-l-[3px] border-clay p-8 max-w-[620px] mt-14 text-ink">
              First essay: &ldquo;Why 95% of enterprise AI pilots fail.&rdquo;
              Dropping April 2026.
            </div>

            <p className="mt-8">
              <a
                className="link-grow"
                href="mailto:marc@sugoai.com?subject=Sugo%20essays"
              >
                Get essays by email →
              </a>
            </p>

            <div className="mt-24">
              <p className="type-mono-label text-stone">
                Preview · placeholder titles
              </p>
              <div className="h-0.5 w-14 bg-rule mt-0 mb-8" />
            </div>
            <div className="mt-6 border-t border-rule">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  className="writing-row-link"
                  href={`/writing/${article.slug}`}
                >
                  <span className="type-mono-meta block mb-2.5">
                    {article.date.toUpperCase()} &nbsp; · &nbsp;{" "}
                    {article.readTime.toUpperCase()}
                  </span>
                  <h3 className="type-writing-title text-ink">{article.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
