import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import "../pages-sub.css";

export const metadata: Metadata = {
  title: "Sugo AI — About",
  description:
    "Sugo AI is a product studio for traditional businesses building serious software with product, design, and engineering discipline.",
};

const BELIEFS = [
  {
    title: "Ship the thing that matters",
    gloss: "The right first product beats a broad, impressive plan.",
  },
  {
    title: "Start where the work hurts",
    gloss: "Operators usually know the problem before anyone names it cleanly.",
  },
  {
    title: "Build around constraints, not around wishes",
    gloss: "The environment is part of the product.",
  },
  {
    title: "Stay close to the work",
    gloss: "Distance creates bad product decisions faster than bad intentions do.",
  },
  {
    title: "Make version one useful",
    gloss: "The first release should earn the next one.",
  },
  {
    title: "Production is where the truth shows up",
    gloss: "A product is not real until it survives contact with the business.",
  },
  {
    title: "Judgment is part of the craft",
    gloss: "Good software comes from decisions, not motion.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <main id="main" className="pg-about">
        {/* Statement hero */}
        <section className="pg-hero">
          <div className="wrap">
            <h1 className="reveal" style={{ "--i": 0 } as React.CSSProperties}>
              A product studio for traditional businesses building serious
              software.
            </h1>
            {/* §AB-1 */}
            <p
              className="lede reveal"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              We partner with traditional businesses that know their domain
              deeply but have not historically operated like software companies.
              We bring the product, design, and engineering discipline needed to
              build software that is modern, usable, and ready to roll out.
            </p>
          </div>
        </section>

        {/* What we believe */}
        <section className="beliefs" aria-labelledby="beliefs-title">
          <div className="wrap">
            <h2 id="beliefs-title">What we believe.</h2>
            {/* §AB-2 */}
            <ol className="beliefs__list">
              {BELIEFS.map((b, i) => (
                <li key={b.title}>
                  <span className="num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {b.title}
                  <span className="gloss">{b.gloss}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contrast lines */}
        <section className="contrast" aria-labelledby="contrast-title">
          <div className="wrap">
            <div className="contrast__panel">
              <h2 id="contrast-title">Why Sugo AI</h2>
              <ul className="contrast__lines">
                <li>
                  We are not a <em className="key">strategy shop</em> that
                  disappears after the deck.
                </li>
                <li>
                  We are not a <em className="key">dev shop</em> waiting for
                  tickets.
                </li>
                <li>
                  We are a <em className="key">product studio</em> that helps
                  traditional businesses build and ship software to a much
                  higher standard.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Where we come from */}
        <section className="founder" aria-labelledby="founder-title">
          <div className="wrap">
            <div className="founder__card">
              <h2 id="founder-title">Where we come from.</h2>
              {/* §AB-3 · final founder note */}
              <div className="founder__grid">
                <div className="founder__text">
                  <p>
                    Sugo AI is my practice. I run it as a single senior partner
                    — the same person who scopes the work stays close to the
                    build.
                  </p>
                  <p>
                    Most recently I was Head of Product at Thread, where a
                    feature with traction became the category-leading AI
                    service desk for MSPs. Before that I was Director of
                    Product at Deep 6 AI, a clinical-trial matching company
                    later acquired by Tempus. The roles before that were
                    health-tech and SaaS, mostly 0→1 work: find the right thing
                    to build, ship the first real version, measure what
                    actually changed.
                  </p>
                  <p>
                    I started Sugo for legacy enterprises that want AI but
                    don&rsquo;t know where to start. Outside the software
                    industry, almost no one is running agents in production yet
                    — most industries have real appetite and no obvious first
                    move. That&rsquo;s the work: find the opening, ship the
                    first real workflow, and put working software in the
                    team&rsquo;s hands.
                  </p>
                  <p className="founder__sign">— Marc Rosa, Sugo AI</p>
                </div>
                <figure className="founder__photo">
                  <Image
                    src="/brand/marc.jpg"
                    alt="Marc Rosa, founder of Sugo AI"
                    width={533}
                    height={689}
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Why “sugo” */}
        <section className="origin" aria-labelledby="origin-title">
          <div className="wrap">
            <div className="origin__panel">
              <div>
                <h2 id="origin-title">Why &ldquo;sugo.&rdquo;</h2>
                {/* §AB-4 */}
                <p>
                  &ldquo;Sugo&rdquo; is Italian for sauce. Every Sunday my sons
                  and I make it — the same starting recipe, one small change
                  each week. The pixel tomato is a callback to that, and to the
                  two ideas this practice runs on: a few ingredients, done well
                  — and the change is in what you do this week, not in what you
                  started with.
                </p>
              </div>
              <div className="origin__art">
                <Image
                  className="art-hop"
                  src="/brand/sugo-mark-simple-transparent.png"
                  alt="A chunky pixel tomato — the Sugo AI mark"
                  width={372}
                  height={398}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Onward */}
        <nav className="onward wrap" aria-label="Continue reading">
          <Link className="link" href="/how-we-work">
            How we work →
          </Link>
          {/* Re-enable when essays are written:
          <Link className="link" href="/writing">
            Read our writing →
          </Link> */}
        </nav>
      </main>

      <Footer />
    </>
  );
}
