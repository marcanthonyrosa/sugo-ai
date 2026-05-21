import { NextStep } from "@/components/layout/NextStep";

export default function HomePage() {
  return (
    <main>
      {/* ARCHETYPE B · THESIS HERO */}
      <section className="thesis">
        <div className="wrap">
          <h1 className="thesis__lede fade-in">
            AI strategy is cheap.
            <br />
            <span className="accent">Working software is rare.</span>
            <br />
            We close the gap.
          </h1>
          <div className="thesis__byline fade-in fade-in-2">
            <span className="thesis__byline-rule" aria-hidden="true" />
            <span>A small practice &middot; Houston, TX &middot; est. 2026</span>
          </div>
          <a className="link-text thesis__cta fade-in fade-in-3" href="/contact">
            Start a conversation
            <span className="arrow" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </section>

      {/* ARCHETYPE C · BLEED-TINT CALLOUT */}
      <section className="callout" aria-label="Industry data">
        <div className="wrap">
          <div className="callout__grid">
            <div
              className="callout__figure"
              aria-label="Ninety-five percent"
            >
              95<span className="pct">%</span>
            </div>
            <div className="callout__body">
              <p>
                of enterprise AI pilots fail to move the P&amp;L &mdash;
                because nobody close enough to the build is making the call.
              </p>
              <div className="callout__source">
                MIT &middot; State of AI in Business &middot; Aug 2025
              </div>
            </div>
            <div className="callout__viz-wrap">
              <div
                className="callout__viz"
                role="img"
                aria-label="Visualization: 95 of 100 pilots fail to ship"
              >
                {/* 100 dots: 95 fail (viola), 5 succeed (dark) */}
                {Array.from({ length: 100 }, (_, i) => {
                  const successPositions = [16, 42, 58, 74, 91];
                  return (
                    <span
                      key={i}
                      className={
                        successPositions.includes(i) ? "success" : undefined
                      }
                    />
                  );
                })}
              </div>
              <div className="callout__viz-label">95 fail &middot; 5 ship</div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHETYPE D · TWO-PANE COMPACT */}
      <section className="work">
        <div className="wrap">
          <h2 className="work__h">Two places AI earns its keep.</h2>
          <div className="work__grid">
            <div className="work__pane work__pane--ops">
              <span className="work__label">Inside the business</span>
              <h3>Agents that take manual work off the team.</h3>
              <p>
                Back-office workflows where humans copy-paste between systems.
                I find the one with the clearest waste and ship the agent that
                owns it.
              </p>
              <div className="work__diagram" aria-hidden="true">
                <svg
                  viewBox="0 0 280 56"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "var(--color-basil-ink)" }}
                >
                  <rect x="2" y="14" width="68" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
                  <text x="36" y="32" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" textAnchor="middle" opacity="0.85">PSA</text>
                  <line x1="74" y1="28" x2="100" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.55" />
                  <polygon points="98,25 104,28 98,31" fill="currentColor" opacity="0.55" />
                  <rect x="104" y="10" width="72" height="36" rx="4" fill="currentColor" opacity="0.85" />
                  <text x="140" y="32" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-basil-50)" textAnchor="middle" fontWeight="500">AGENT</text>
                  <line x1="180" y1="28" x2="206" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.55" />
                  <polygon points="204,25 210,28 204,31" fill="currentColor" opacity="0.55" />
                  <rect x="210" y="14" width="68" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
                  <text x="244" y="32" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" textAnchor="middle" opacity="0.85">CRM</text>
                </svg>
              </div>
              <div className="work__timing">
                6&ndash;12 weeks &middot; scope to handoff
              </div>
            </div>

            <div className="work__pane work__pane--feat">
              <span className="work__label">Inside the product</span>
              <h3>AI-native features customers feel.</h3>
              <p>
                A real user, a real job, a real outcome metric. I take the
                first feature from discovery through launch &mdash; close
                enough to engineering to make the calls that matter.
              </p>
              <div className="work__diagram" aria-hidden="true">
                <svg
                  viewBox="0 0 280 56"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "var(--color-viola-900)" }}
                >
                  <rect x="2" y="6" width="276" height="44" rx="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
                  <line x1="10" y1="16" x2="50" y2="16" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                  <rect x="10" y="24" width="58" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
                  <rect x="76" y="24" width="58" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
                  <rect x="142" y="22" width="60" height="24" rx="3" fill="var(--color-viola-500)" opacity="0.5" />
                  <rect x="142" y="22" width="60" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="172" y="38" fontFamily="var(--font-mono)" fontSize="8" fill="currentColor" textAnchor="middle" fontWeight="600">+ AI</text>
                  <rect x="210" y="24" width="58" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
                </svg>
              </div>
              <div className="work__timing">
                8&ndash;16 weeks &middot; concept to launch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHETYPE E · STORY (dark bleed) */}
      <section className="story">
        <div className="wrap">
          <div className="story__meta">One engagement, told plainly</div>
          <h2 className="story__h">
            Where dispatch was the bottleneck.
          </h2>

          <div className="story__prose">
            <div className="story__chapter">
              <p>
                <strong>The situation.</strong> A managed-service provider
                losing dispatch hours each week to manual ticket triage &mdash;
                the work that sits between the PSA and the RMM, that everyone
                knows is wasteful, that no platform vendor solves.
              </p>
              <p>
                <strong>The first move.</strong> A short stretch of paired
                sessions with dispatch. No interviews, no surveys &mdash;
                sitting beside the work. We left with a map of every place a
                human was acting as glue.
              </p>
              <p>
                <strong>What shipped.</strong> A small triage agent that read
                incoming tickets, drafted the first response, routed to the
                right pod. One workflow, one owner, one metric. Integrated with
                the PSA they already paid for.
              </p>
              <p>
                <strong>What changed.</strong> Dispatch got most of the hours
                back inside a month. The team kept the workflow. The agent
                stayed quiet. That&rsquo;s the bar.
              </p>
            </div>

            <aside className="story__sidekey">
              <div className="story__keyrow">
                <span className="story__keylabel">Engagement</span>
                <span className="story__keyvalue">
                  Operations agent &middot; MSP vertical
                </span>
              </div>
              <div className="story__keyrow">
                <span className="story__keylabel">Stack</span>
                <span className="story__keyvalue">
                  Claude &middot; the client&rsquo;s existing PSA &middot; a
                  thin agent service
                </span>
              </div>
            </aside>
          </div>

          <div className="story__attribution">
            Specifics kept private at the client&rsquo;s request. Happy to walk
            you through on a call.
          </div>
        </div>
      </section>

      {/* ARCHETYPE G · NEXT-STEP */}
      <NextStep />
    </main>
  );
}
