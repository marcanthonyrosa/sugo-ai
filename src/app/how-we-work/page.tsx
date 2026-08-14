import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Faq } from "@/components/how-we-work/Faq";
import { createPageMetadata } from "@/lib/seo";
import "../pages-core.css";

export const metadata: Metadata = createPageMetadata({
  title: "Product Development From Discovery Through Production",
  description:
    "See how Sugo AI moves from discovery and workflow mapping through product design, engineering, production rollout, and iteration.",
  path: "/how-we-work",
  socialTitle: "We run like a software company. That’s where we come from.",
});

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

type Stage = {
  num: string;
  title: string;
  body: string;
  tickets: [string, string, string];
};

const STAGES: Stage[] = [
  {
    num: "01",
    title: "Discovery",
    body: "We start by getting close to the work. That means sitting with the people inside the workflow, tracing where time, judgment, and money are leaking, and deciding which problem to build for.",
    tickets: [
      "A problem to build for",
      "A clear operating constraint",
      "A first decision on where to start",
    ],
  },
  {
    num: "02",
    title: "Workflow mapping",
    body: "Once the pain is clear, we map the workflow around it. We look at handoffs, approvals, edge cases, and dependencies so the product fits the business, not the meeting-room version of it.",
    tickets: [
      "A working map of the flow",
      "The points of friction",
      "A product shape that fits the business",
    ],
  },
  {
    num: "03",
    title: "Product design",
    body: "Design starts from the conditions the software has to survive in. The goal is not to impress a demo room; it is to make something clear enough for staff to use, trustworthy enough to adopt, and durable enough for regulated, operationally complex environments.",
    tickets: [
      "A clear user path",
      "Interfaces built for real staff",
      "Design choices shaped by constraints",
    ],
  },
  {
    num: "04",
    title: "Engineering through production",
    body: "We do not stop at concepts, specs, or handoff files. We stay responsible through implementation, work directly in the product, coordinate with internal teams, and carry the software into production.",
    tickets: [
      "Code in the production system",
      "Coordination with internal teams",
      "Ownership through launch",
    ],
  },
  {
    num: "05",
    title: "Iteration",
    body: "Version one is not the end of the work. We watch how people use it, fix what is unclear, and make the next product decisions from adoption, not theory.",
    tickets: [
      "Feedback in use",
      "A stronger second version",
      "Iteration tied to real use",
    ],
  },
];

const AVOIDED: Array<{ term: string; gloss: string }> = [
  {
    term: "Production readiness",
    gloss: "The work required to make the product dependable outside a demo.",
  },
  {
    term: "Accessibility",
    gloss: "Making the software usable by the people who need it.",
  },
  {
    term: "Implementation detail",
    gloss:
      "The unglamorous product and engineering decisions that determine whether the thing works.",
  },
  {
    term: "Internal coordination",
    gloss:
      "Getting design, engineering, security, IT, and operators aligned around the same build.",
  },
  {
    term: "Real rollout",
    gloss:
      "Putting the product into use inside the business, not just announcing that it exists.",
  },
];

const SHAPES: Array<{ variant: string; title: string; body: string }> = [
  {
    variant: "shape--first",
    title: "A first product",
    body: "This fits when the business knows something important should exist, but the first version is still unclear. We define the product, cut the scope, and carry it through to something usable.",
  },
  {
    variant: "shape--embed",
    title: "An embedded build",
    body: "This fits when the need is already clear and the business wants a small, senior team working close to operators and internal stakeholders. We plug into the work, not around it, and stay accountable for what ships.",
  },
  {
    variant: "shape--pilot",
    title: "Pilot to production",
    body: "This fits when something has already been explored, demoed, or half-built, but is still stuck before production. We close the gap between a promising idea and software the business can run on.",
  },
];

const ASKS = [
  "Access to the operators who know where the work breaks down",
  "A real decision-maker who can help keep the work moving",
  "Honesty about the constraints, systems, and politics around the product",
  "A willingness to ship, learn, and adjust",
];

export default function HowWeWorkPage() {
  return (
    <>
      <main id="main">
        {/* Page hero */}
        <section className="pagehero">
          <div className="wrap">
            <h1 className="reveal" style={stagger(0)}>
              We run like a software company. That’s where we come from.
            </h1>
            <p className="lede reveal" style={stagger(1)}>
              Traditional businesses have strong operators, real constraints,
              and deep domain knowledge. What they often do not have is a
              product-development system that turns those realities into
              software that ships, gets adopted, and holds up in production.
            </p>
          </div>
        </section>

        {/* The five stages */}
        <section className="stages" aria-labelledby="stages-title">
          <div className="wrap">
            <h2 className="stages__title" id="stages-title">
              The shape of an engagement.
            </h2>
          </div>

          {STAGES.map((s) => (
            <article className="stage" key={s.num}>
              <div className="wrap">
                <span className="stage__num" aria-hidden="true">
                  {s.num}
                </span>
                <h3>{s.title}</h3>
                <p className="stage__body">{s.body}</p>
                <p className="stage__label">What you get</p>
                <ul className="tickets">
                  {s.tickets.map((t) => (
                    <li className="ticket" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* Full lifecycle — navy band */}
        <section className="own" aria-labelledby="own-title">
          <div className="wrap">
            <div className="own__panel on-flood">
              <h2 id="own-title">We own the full product lifecycle.</h2>
              <p className="own__intro">
                We do not stop at recommendations, specs, or prototypes. We
                stay close to the work until the product is live, stable,
                usable, and working inside the real constraints of the business
                — including the parts many firms avoid:
              </p>
              <ul className="own__list">
                {AVOIDED.map((item) => (
                  <li key={item.term}>
                    <strong>{item.term}</strong> <span>{item.gloss}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Engagement shapes */}
        <section className="shapes" aria-labelledby="shapes-title">
          <div className="wrap">
            <h2 className="section-title" id="shapes-title">
              How engagements are shaped.
            </h2>
            <div className="shapes__grid">
              {SHAPES.map((s) => (
                <article className={`shape ${s.variant}`} key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What we ask of you */}
        <section className="ask" aria-labelledby="ask-title">
          <div className="wrap">
            <h2 className="section-title" id="ask-title">
              What we ask of you.
            </h2>
            <ol>
              {ASKS.map((a) => (
                <li key={a}>
                  <div>
                    <strong>{a}</strong>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why pilots stall — compact */}
        <section className="stall" aria-labelledby="stall-title">
          <div className="wrap">
            <div className="stall__card">
              <h2 id="stall-title">
                Most AI pilots don’t stall because the model is weak.
              </h2>
              <p className="stall__stat">
                <span className="stall__num">≈5%</span> of enterprise GenAI
                pilots show measurable P&amp;L impact.
              </p>
              <p>
                Most pilots stall when ownership is split too many ways. The
                team framing the opportunity is too far from the team building
                the product, and no one owns what happens after the demo.
              </p>
              <p className="stall__foot">
                Source: MIT NANDA, “The GenAI Divide: State of AI in Business,”
                August 2025.
              </p>
            </div>
          </div>
        </section>

        {/* Practical questions */}
        <section className="faq" aria-labelledby="faq-title">
          <div className="wrap">
            <h2 className="section-title" id="faq-title">
              Practical questions.
            </h2>
            <Faq />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
