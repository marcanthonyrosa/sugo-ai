import Link from "next/link";
import { PotMark } from "@/components/ui/PotMark";
import { Footer } from "@/components/layout/Footer";
import { getAllArticles } from "@/lib/mdx";

export default function WritingPage() {
  const articles = getAllArticles();

  return (
    <main>
      <section className="py-[100px] pt-[140px] max-[767px]:py-[56px] max-[767px]:pt-[100px]">
        <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6">
          <div className="max-w-[680px]">
            <div className="mb-10">
              <PotMark />
            </div>
            <div className="eyebrow mb-6">Writing</div>
            <h1 className="type-h1">On the <span className="italic-accent">record.</span></h1>
            <p className="type-lead" style={{ marginTop: "16px" }}>
              A monthly essay on what&rsquo;s actually happening at the edge of
              enterprise AI{"\u200A—\u200A"}research, patterns from the field,
              and opinions worth disagreeing with.
            </p>

            <div className="callout-viola mt-12">
              <span className="eyebrow">First essay</span>
              <p>&ldquo;Why 95% of enterprise AI pilots fail.&rdquo; Dropping April 2026.</p>
            </div>

            <p className="mt-6">
              <a
                className="btn-ghost"
                href="mailto:marc@sugoai.com?subject=Sugo%20essays"
                style={{ border: "none" }}
              >
                Get essays by email <span className="arrow">→</span>
              </a>
            </p>

            <div className="mt-20">
              <div className="fig" style={{ color: "var(--color-ink-300)" }}>
                Preview &middot; placeholder titles
              </div>
            </div>
            <div className="mt-6" style={{ borderTop: "1px solid var(--color-rule-soft)" }}>
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  className="writing-row-link"
                  href={`/writing/${article.slug}`}
                  style={{ border: "none" }}
                >
                  <span className="type-mono-meta block mb-2">
                    {article.date.toUpperCase()} &nbsp; &middot; &nbsp;{" "}
                    {article.readTime.toUpperCase()}
                  </span>
                  <h3 className="type-writing-title">{article.title}</h3>
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
