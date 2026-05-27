import { CAL_URL } from "@/components/ui/CalModal";

export default function HomePage() {
  return (
    <main className="memo">
      {/* Memo · macrostructure: long-document · genre: editorial position paper */}

      <section className="memo__hero">
        <div className="wrap">
          <h1 className="memo__thesis fade-in">
            AI strategy is cheap. <br />
            <span className="accent">Working software is rare.</span>
          </h1>
          <p className="memo__intro fade-in fade-in-2">
            Sugo AI is a product development and consulting practice helping
            enterprises bring AI to market &mdash; agents inside the business,
            AI-native features inside the product.
          </p>
          <p className="memo__credit fade-in fade-in-3">
            Run from Houston by Marc Rosa &middot; senior product partner
            &middot; 15 years &middot; 2 exits
          </p>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">What Sugo does.</h2>
          <p className="memo__lede">
            Two engagements. Both end in software a team can use Monday
            morning.
          </p>

          <div className="memo__engagements">
            <article className="engagement engagement--ops">
              <div className="engagement__body">
                <span className="engagement__label">Inside the business</span>
                <h3 className="engagement__h">
                  Agents that take manual work off the team.
                </h3>
                <p className="engagement__prose">
                  Back-office workflows where humans copy-paste between
                  systems &mdash; operations, customer service, sales ops,
                  finance. I find the one with the clearest waste and ship
                  the agent that owns it.
                </p>
                <div className="engagement__timing">
                  6&ndash;12 weeks &middot; scope to handoff
                </div>
              </div>
              <div className="engagement__diagram" aria-hidden="true">
                <svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="30" width="140" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
                  <text x="90" y="55" fontFamily="var(--font-sans)" fontSize="14" fill="currentColor" textAnchor="middle">Tickets in</text>
                  <line x1="168" y1="50" x2="218" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
                  <polygon points="214,46 222,50 214,54" fill="currentColor" opacity="0.55" />
                  <rect x="230" y="22" width="140" height="56" rx="4" fill="currentColor" />
                  <text x="300" y="46" fontFamily="var(--font-sans)" fontSize="14" fill="var(--color-basil-50)" textAnchor="middle" fontWeight="500">Triage agent</text>
                  <text x="300" y="64" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-basil-50)" textAnchor="middle" opacity="0.75" letterSpacing="1">SUGO</text>
                  <line x1="378" y1="50" x2="428" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
                  <polygon points="424,46 432,50 424,54" fill="currentColor" opacity="0.55" />
                  <rect x="440" y="30" width="140" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
                  <text x="510" y="55" fontFamily="var(--font-sans)" fontSize="14" fill="currentColor" textAnchor="middle">Routed to pod</text>
                </svg>
              </div>
            </article>

            <article className="engagement engagement--feat">
              <div className="engagement__body">
                <span className="engagement__label">Inside the product</span>
                <h3 className="engagement__h">
                  AI-native features customers feel.
                </h3>
                <p className="engagement__prose">
                  A real user, a real job, a real outcome metric. I take the
                  first feature from discovery through launch &mdash; close
                  enough to engineering to make the calls that matter.
                </p>
                <div className="engagement__timing">
                  8&ndash;16 weeks &middot; concept to launch
                </div>
              </div>
              <div className="engagement__diagram" aria-hidden="true">
                <svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="264" height="224" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
                  <rect x="8" y="8" width="264" height="28" fill="currentColor" opacity="0.06" />
                  <circle cx="22" cy="22" r="2.5" fill="currentColor" opacity="0.4" />
                  <circle cx="32" cy="22" r="2.5" fill="currentColor" opacity="0.4" />
                  <circle cx="42" cy="22" r="2.5" fill="currentColor" opacity="0.4" />
                  <line x1="20" y1="58" x2="78" y2="58" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                  <line x1="92" y1="58" x2="138" y2="58" stroke="currentColor" strokeWidth="2" opacity="0.18" />
                  <line x1="152" y1="58" x2="198" y2="58" stroke="currentColor" strokeWidth="2" opacity="0.18" />
                  <rect x="20" y="76" width="240" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
                  <rect x="20" y="100" width="180" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
                  <rect x="20" y="120" width="220" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
                  <rect x="20" y="150" width="240" height="64" rx="4" fill="var(--color-viola-500)" opacity="0.38" />
                  <rect x="20" y="150" width="240" height="64" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="32" y="172" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" opacity="0.85" letterSpacing="1.2">AI · SUGGESTED ACTION</text>
                  <line x1="32" y1="184" x2="200" y2="184" stroke="currentColor" strokeWidth="1" opacity="0.32" />
                  <line x1="32" y1="196" x2="160" y2="196" stroke="currentColor" strokeWidth="1" opacity="0.32" />
                </svg>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">Why most pilots fail.</h2>
          <div className="memo__stat-block">
            <div
              className="memo__stat-figure"
              aria-label="Ninety-five percent"
            >
              95<span className="pct">%</span>
            </div>
            <div className="memo__stat-prose">
              <p>
                of enterprise AI pilots never move a P&amp;L line. MIT put
                the number at <strong>ninety-five percent</strong> in their
                August 2025 report. The pattern underneath is consistent:
                the people who can make the call about what to build
                aren&rsquo;t close enough to the build to make it. Strategy
                from one room, engineering from another, integration from a
                third. The work sits between rooms.
              </p>
              <div
                className="memo__dot-grid"
                role="img"
                aria-label="Visualization: 95 of 100 pilots fail to ship"
              >
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
              <div className="memo__stat-source">
                Source &middot; MIT NANDA &middot;{" "}
                <em>State of AI in Business 2025</em> &middot; Aug 2025
              </div>
            </div>
          </div>
          <p className="memo__stat-outro">
            Sugo tries to occupy all three rooms.
          </p>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">How Sugo works.</h2>
          <div className="memo__prose">
            <p>
              <strong>Software, not decks.</strong> Sugo&rsquo;s deliverable
              is working code in production, not a deck about working code.
              Decks compress what&rsquo;s hard about a build into something
              that looks easy, and the easy version is the one that ships.
            </p>
            <p>
              <strong>Sit beside the work.</strong> Two weeks of paired
              sessions with the team doing the workflow beats six weeks of
              interviews. People who do the work know where it breaks;
              Sugo&rsquo;s job is to be there when it does.
            </p>
            <p>
              <strong>Fewer things, done very well.</strong> A scoped agent
              shipped beats a platform vision shipped never. Sugo would
              rather own one workflow end-to-end than scope three at once.
            </p>
            <p>
              <strong>Stay small.</strong> No subcontractors, no junior
              handoffs, no offshore implementation team. The person scoping
              the work is the person shipping it.
            </p>
          </div>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">The shape of the practice.</h2>
          <div className="memo__prose">
            <p>
              Most AI consulting hands you a deck. Most platform AI hands
              you a bolt-on. Sugo is built for what&rsquo;s in between
              &mdash; close enough to your business to make the call about
              what&rsquo;s worth building, and close enough to engineering
              to ship it.
            </p>
            <p>
              <strong>Best fit:</strong> mid-to-large enterprises and
              traditional companies in operations, finance, healthcare,
              services, industrial &mdash; sectors where off-the-shelf AI
              tools don&rsquo;t fit and there isn&rsquo;t a deep engineering
              bench standing by to build the alternative.
            </p>
            <p>
              <strong>Best buyer:</strong> the executive personally
              accountable for whether the AI strategy actually delivers
              &mdash; a head of innovation, COO, or VP of product carrying a
              roadmap with AI commitments the organization hasn&rsquo;t yet
              shipped.
            </p>
          </div>
        </div>
      </section>

      <section className="memo__close">
        <div className="wrap">
          <h2 className="memo__close-h">
            Start a <span className="accent">conversation.</span>
          </h2>
          <p className="memo__close-sub">
            Tell me what you&rsquo;re working on. I&rsquo;ll tell you
            whether it&rsquo;s a workflow, a product feature, or not a fit
            yet.
          </p>
          <div className="memo__actions">
            <a
              className="btn-primary"
              href={CAL_URL}
              target="_blank"
              rel="noopener"
            >
              Book 30 minutes{" "}
              <span className="arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
            <a className="memo__secondary" href="mailto:marc@sugoai.com">
              marc@sugoai.com
            </a>
          </div>
        </div>
      </section>

      <section className="memo__ps">
        <div className="wrap">
          <p>
            <em>P.S.</em> &mdash; <em>Sugo</em> is the Italian word for
            sauce. A long, slow reduction; a few ingredients done well.
            That&rsquo;s the practice.
          </p>
        </div>
      </section>
    </main>
  );
}
