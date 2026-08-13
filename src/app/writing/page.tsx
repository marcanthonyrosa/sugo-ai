import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { getAllArticles } from "@/lib/mdx";
import "../pages-sub.css";

export const metadata: Metadata = {
  title: "Sugo AI — Writing",
  description:
    "Notes from the work for operators and leaders building software inside traditional businesses.",
};

/* Temporarily gated — the three MDX posts have placeholder (lorem) bodies.
   Set WRITING_ENABLED = true to re-enable once real essays are written. */
const WRITING_ENABLED = false;

export default function WritingPage() {
  if (!WRITING_ENABLED) notFound();
  const articles = getAllArticles();
  const [featured, ...rest] = articles;

  return (
    <>
      <main id="main" className="pg-writing">
        {/* Intro */}
        <section className="intro">
          <div className="wrap">
            <h1>Notes from the work.</h1>
            {/* §WR-1 */}
            <p className="intro__body">
              This writing is for operators, product owners, and leaders trying
              to make better software decisions inside real businesses. The
              goal is plain-English thinking from the work — not commentary
              from a distance.
            </p>
          </div>
        </section>

        {/* Featured piece — the newest post */}
        {featured && (
          <section className="featured" aria-labelledby="featured-title">
            <div className="wrap">
              <article className="featured__row">
                <p className="featured__tag">
                  Featured · {featured.date} · {featured.readTime}
                </p>
                <h2 id="featured-title">{featured.title}</h2>
                <p className="dek">{featured.standfirst}</p>
                <Link className="link" href={`/writing/${featured.slug}`}>
                  Read →
                </Link>
              </article>
            </div>
          </section>
        )}

        {/* Article list */}
        {rest.length > 0 && (
          <section className="list" aria-label="More writing">
            <div className="wrap">
              <ul className="list__rows">
                {rest.map((article) => (
                  <li key={article.slug}>
                    <Link
                      className="list__row-link"
                      href={`/writing/${article.slug}`}
                    >
                      <h3>{article.title}</h3>
                      <span className="list__tag">
                        {article.date} · {article.readTime}
                      </span>
                      <p className="dek">{article.standfirst}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Plain terms */}
        <section className="terms" aria-labelledby="terms-title">
          <div className="wrap">
            <div className="terms__card">
              <h2 id="terms-title">Plain terms.</h2>
              <p className="intro-line">
                The jargon, translated. For operators, not engineers.
              </p>
              {/* §WR-4 */}
              <dl>
                <div>
                  <dt>AI agent</dt>
                  <dd>
                    Software that can carry out a multi-step task on its own,
                    with your rules and your data. Not magic — a diligent
                    junior teammate that never sleeps.
                  </dd>
                </div>
                <div>
                  <dt>Pilot</dt>
                  <dd>
                    A trial run. Useful when someone owns getting it into real
                    work; shelf-ware when nobody does.
                  </dd>
                </div>
                <div>
                  <dt>Production</dt>
                  <dd>
                    When software stops being a demo and starts being how the
                    work gets done.
                  </dd>
                </div>
                <div>
                  <dt>Internal tool</dt>
                  <dd>
                    Software built for the people inside the business, not the
                    customers outside it. &ldquo;Internal&rdquo; does not make
                    it easier — it usually just hides the mess better.
                  </dd>
                </div>
                <div>
                  <dt>Rollout</dt>
                  <dd>
                    The part where software stops being a launch event and
                    starts becoming part of how the work gets done. If the
                    rollout is weak, the product usually gets blamed for
                    problems the process created.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Closing note */}
        <section className="note">
          <div className="wrap">
            <p>
              Want these as they&rsquo;re written?{" "}
              <a className="link" href="mailto:marc@sugoai.com">
                Email marc@sugoai.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
