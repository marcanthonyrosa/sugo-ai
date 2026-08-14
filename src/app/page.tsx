import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { ProcessSwitcher } from "@/components/home/ProcessSwitcher";
import {
  createPageMetadata,
  organizationStructuredData,
} from "@/lib/seo";
import "./pages-core.css";

export const metadata: Metadata = createPageMetadata({
  title: "AI Product Development for Traditional Businesses",
  description:
    "Sugo AI builds internal tools, AI agents, and customer products for traditional businesses—from product discovery through production rollout.",
  path: "/",
  socialTitle:
    "Modern product development for companies that aren’t software companies.",
});

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <main id="main">
        {/* Hero */}
        <section className="hero">
          <div className="wrap">
            <article className="hero__panel">
              <div className="hero__grid">
                <div className="hero__copy">
                  <h1 className="hero__title reveal" style={stagger(0)}>
                    Modern product development for companies that aren’t
                    software companies.
                  </h1>
                  <p className="hero__sub reveal" style={stagger(1)}>
                    We help traditional businesses ship internal tools,
                    AI&nbsp;agents, and customer products with the discipline of
                    a modern software company.
                  </p>
                  <div className="hero__ctas reveal" style={stagger(2)}>
                    <Link className="btn btn--primary" href="/contact">
                      Start a conversation
                    </Link>
                    <Link className="btn btn--ghost" href="/how-we-work">
                      How we work
                    </Link>
                  </div>
                </div>
                <div className="hero__art reveal" style={stagger(3)}>
                  <Image
                    className="art-hop"
                    src="/brand/sugo-mark-simple-transparent.png"
                    alt="The Sugo AI mark — a chunky pixel tomato"
                    width={372}
                    height={398}
                    priority
                  />
                </div>
              </div>
              <div className="hero__strip reveal" style={stagger(4)}>
                <strong>
                  Sugo AI is a product studio for traditional businesses
                  building serious software.
                </strong>
                <p>
                  We partner with teams that know their business deeply but have
                  not historically operated like software companies. We bring
                  the product, design, and engineering discipline needed to
                  build software that is modern, usable, and worth rolling out.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Evidence */}
        <section className="evidence" aria-labelledby="evidence-title">
          <div className="wrap">
            <article className="evidence__panel">
              <div className="evidence__grid">
                <div className="evidence__stat">
                  <p className="evidence__num">≈5%</p>
                  <p className="evidence__qual">
                    of enterprise GenAI pilots show measurable P&amp;L impact¹
                  </p>
                </div>
                <div className="evidence__body">
                  <h2 id="evidence-title">
                    Most AI pilots don’t stall because the model is weak.
                  </h2>
                  <p>
                    A widely cited MIT NANDA report from August 2025 found that
                    only a small minority of enterprise GenAI pilots showed
                    measurable P&amp;L impact. In our experience, the issue is
                    usually ownership: the team shaping the opportunity is too
                    far from the team building the product, and no one is
                    accountable end to end.
                  </p>
                  <p className="lead">
                    We work differently. We embed closely, shape the product
                    with the business, and stay responsible for what actually
                    ships.
                  </p>
                </div>
              </div>
              <p className="evidence__foot">
                1 — MIT NANDA, “The GenAI Divide: State of AI in Business,”
                August 2025.
              </p>
            </article>
          </div>
        </section>

        {/* Two buckets */}
        <section className="buckets" aria-labelledby="buckets-title">
          <div className="wrap">
            <h2 className="section-title" id="buckets-title">
              The work falls into two buckets.
            </h2>
            <div className="buckets__grid">
              <article className="bucket bucket--tools">
                <h3>Internal tools &amp; AI agents</h3>
                <p>
                  Software for operations, workflows, decision support, and team
                  productivity. We help businesses replace manual work,
                  disconnected systems, and shallow pilots with tools that fit
                  how the organization actually runs.
                </p>
              </article>
              <article className="bucket bucket--customer">
                <h3>Customer products</h3>
                <p>
                  Portals, platforms, and digital experiences for customers,
                  members, partners, and policyholders. We build products that
                  are clear, trustworthy, and easy to use, especially when the
                  business behind them is operationally complex.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="process" aria-labelledby="process-title">
          <div className="wrap">
            <h2 className="section-title" id="process-title">
              We run like a software company. That’s where we come from.
            </h2>
            <p className="process__intro">
              Traditional businesses often have strong operators, strong
              constraints, and strong domain knowledge. What they usually lack
              is a product-development system built for fast learning, tight
              iteration, and high-quality shipping. That’s what we bring.
            </p>

            <ProcessSwitcher />

            <div className="process__own">
              <p className="big">
                We own the full product lifecycle. We do not stop at
                recommendations, specs, or prototypes. We stay close to the
                work until the product is live, stable, usable, and working
                inside the real constraints of the business.
              </p>
              <p className="supporting">
                That includes the parts many firms avoid: production readiness,
                accessibility, implementation detail, coordination with
                internal teams, and the practical work required to get software
                standing up in the real world.
              </p>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="manifesto" aria-labelledby="manifesto-title">
          <div className="wrap">
            <div className="manifesto__panel on-flood">
              <h2 id="manifesto-title">Why Sugo AI</h2>
              <ul className="manifesto__lines">
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

        {/* Plain terms */}
        <section className="terms" aria-labelledby="terms-title">
          <div className="wrap">
            <div className="terms__card">
              <h2 id="terms-title">Plain terms.</h2>
              <p className="intro">
                The jargon, translated. For operators, not engineers.
              </p>
              <dl>
                <div>
                  <dt>AI agent</dt>
                  <dd>
                    Software that can carry out a multi-step task on its own,
                    with your rules and your data. Not magic — a diligent junior
                    teammate that never sleeps.
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
              </dl>
              {/* Re-enable when essays are written:
              <Link className="link terms__more" href="/writing">
                More terms, plainly →
              </Link> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
