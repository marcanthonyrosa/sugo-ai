import { NextStep } from "@/components/layout/NextStep";

export default function HowWeWorkPage() {
  return (
    <main className="memo memo--howw">
      {/* /how-we-work · macrostructure: long-document */}

      <section className="memo__hero">
        <div className="wrap">
          <h1 className="memo__thesis fade-in">
            How an engagement <span className="accent">runs.</span>
          </h1>
          <p className="memo__intro fade-in fade-in-2">
            One audit, then one build. Both end in software a team can use
            Monday morning.
          </p>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">First: the audit.</h2>
          <div className="audit">
            <div className="audit__prose">
              <p>
                Two to three weeks. I sit beside the workflow or the product
                surface and rank what&rsquo;s worth shipping first, against
                the same honest criteria &mdash; fit, integration depth,
                last-mile owner, hours saved. The audit ends with a working
                prototype, a ranked list, and a recommendation.
              </p>
              <p className="audit__aside">
                Working prototypes beat decks. The audit ends with one.
              </p>
              <p className="audit__when">
                <span className="audit__when-label">Right phase when</span>{" "}
                AI energy is high and clarity is low.
              </p>
            </div>
            <aside className="audit__diagram" aria-hidden="true">
              <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="14" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" opacity="0.55" letterSpacing="1.2">RANKED CANDIDATES</text>
                <rect x="0" y="30" width="260" height="22" rx="2" fill="currentColor" opacity="0.92" />
                <rect x="0" y="60" width="200" height="22" rx="2" fill="currentColor" opacity="0.42" />
                <rect x="0" y="90" width="140" height="22" rx="2" fill="currentColor" opacity="0.32" />
                <rect x="0" y="120" width="92" height="22" rx="2" fill="currentColor" opacity="0.22" />
                <rect x="0" y="150" width="56" height="22" rx="2" fill="currentColor" opacity="0.16" />
              </svg>
            </aside>
          </div>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">Then: one of two builds.</h2>
          <p className="memo__lede">
            The audit ends with a recommendation. From there the engagement
            goes one of two ways &mdash; not both, not sequentially.
          </p>
          <div className="builds">
            <article className="build build--ops">
              <div className="build__head">
                <h3 className="build__name">Operations Build</h3>
                <span className="build__time">6&ndash;12 weeks</span>
              </div>
              <p className="build__sub">Inside the business.</p>
              <p className="build__body">
                A scoped agent on the workflow the audit ranked highest.
                Two weeks paired with the team that owns it, then a
                production agent shipped against the hours-saved baseline.
                Ships as a production agent with monitoring and handoff
                docs. Right phase when there&rsquo;s obvious waste and an
                owner who&rsquo;ll keep it.
              </p>
            </article>
            <article className="build build--feat">
              <div className="build__head">
                <h3 className="build__name">Product Build</h3>
                <span className="build__time">8&ndash;16 weeks</span>
              </div>
              <p className="build__sub">Inside the product.</p>
              <p className="build__body">
                Embedded with the product and engineering team. I shape
                the first feature, instrument it, ship behind a flag, and
                measure what changed. Ships as a launched feature with an
                outcome dashboard your team owns and a written brief on
                what to build next. Right phase when a real customer job
                needs a real AI feature.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="memo__section memo__section--tinted">
        <div className="wrap">
          <h2 className="memo__h">How I work.</h2>
          <div className="memo__prose">
            <p>
              I ship software, not decks. The deliverable is working code in
              production. I sit beside the work for the first two weeks
              &mdash; the team doing the workflow knows where it breaks. I
              do fewer things, very well; a scoped agent shipped beats a
              platform vision shipped never. Every build has a baseline
              metric set in the audit and a target measured at 30, 60, and
              90 days. The person scoping the work is the person close to
              the build. On launch day, your team owns the software
              &mdash; documentation, monitoring, and a written brief on
              what to build next, delivered with it.
            </p>
          </div>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">How I scope and price.</h2>
          <div className="memo__prose">
            <p>
              I price by engagement, not by hour. The audit is fixed-fee,
              quoted after the first call. Builds carry a fixed weekly burn
              against a written scope and outcome &mdash; the weeks are the
              variable, not the price. Biweekly invoicing, Net 15.
            </p>
            <p>
              Included is all my time and the working software at the end.
              Tools and infrastructure run on your accounts. Travel,
              third-party software licenses, and any subcontracted
              specialist work get flagged and quoted before they&rsquo;re
              incurred.
            </p>
          </div>
        </div>
      </section>

      <NextStep closer="If that’s the shape of what you need, the next move is a call to talk through your specifics." />
    </main>
  );
}
