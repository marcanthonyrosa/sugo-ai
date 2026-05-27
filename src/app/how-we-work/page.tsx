import { NextStep } from "@/components/layout/NextStep";

export default function HowWeWorkPage() {
  return (
    <main>
      {/* THESIS (inner) */}
      <section className="thesis thesis--inner">
        <div className="wrap">
          <h1 className="thesis__lede fade-in">
            Small scope. Senior attention.{" "}
            <span className="accent">Fast cycles.</span>
          </h1>
          <div className="thesis__byline fade-in fade-in-2">
            <span className="thesis__byline-rule" aria-hidden="true" />
            <span>How an engagement actually runs, end to end.</span>
          </div>
        </div>
      </section>

      {/* ARCHETYPE F · NUMBERED CHAPTERS */}
      <section className="phases">
        <div className="wrap">
          {/* Phase 01 */}
          <div className="phase phase--saffron">
            <div className="phase__index">
              <span className="phase__num">01</span>
              <span className="phase__when">2&ndash;3 weeks</span>
            </div>
            <div className="phase__body">
              <h2 className="phase__name">Opportunity Audit</h2>
              <p className="phase__lede">
                Sort signal from noise &mdash; the one painful workflow or one
                promising feature worth shipping first.
              </p>
              <p>
                The audit puts each candidate on the table against the same
                criteria &mdash; fit, integration depth, last-mile owner,
                hours saved &mdash; and ranks them.
              </p>
              <p>
                Working prototypes are far more useful than decks, so
                we&rsquo;ll start around there. A ranked list, a
                recommendation, and an honest read on whether Sugo is the
                right partner for what comes next.
              </p>
              <div className="phase__deliverables">
                <div>
                  <div className="phase__deliverable-label">What you get</div>
                  <div className="phase__deliverable-value">
                    Working prototype &middot; ranked use cases &middot;
                    scoped pilot proposal
                  </div>
                </div>
                <div>
                  <div className="phase__deliverable-label">Good fit when</div>
                  <div className="phase__deliverable-value">
                    AI energy is high, clarity is low, and the org needs to pick.
                  </div>
                </div>
              </div>
            </div>
            <div className="phase__diagram" aria-hidden="true">
              <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="180" height="14" rx="2" fill="currentColor" opacity="0.95" />
                <rect x="0" y="22" width="140" height="14" rx="2" fill="currentColor" opacity="0.42" />
                <rect x="0" y="44" width="100" height="14" rx="2" fill="currentColor" opacity="0.32" />
                <rect x="0" y="66" width="72" height="14" rx="2" fill="currentColor" opacity="0.22" />
                <rect x="0" y="88" width="44" height="14" rx="2" fill="currentColor" opacity="0.16" />
              </svg>
              <div className="phase__diagram-caption">Ranked candidates</div>
            </div>
          </div>

          {/* Phase 02 */}
          <div className="phase phase--basil">
            <div className="phase__index">
              <span className="phase__num">02</span>
              <span className="phase__when">6&ndash;12 weeks</span>
            </div>
            <div className="phase__body">
              <h2 className="phase__name">Operations Build</h2>
              <p className="phase__lede">
                Agents inside the business. One workflow, one owner, one outcome
                metric.
              </p>
              <p>
                Two weeks of paired sessions with the team that owns the
                workflow. Then a scoped agent that handles the manual work,
                ships in production, and gets measured against the hours-saved
                baseline from the audit.
              </p>
              <p>
                Working code first. Your operations lead has something they
                actually use, not a deck to read.
              </p>
              <div className="phase__deliverables">
                <div>
                  <div className="phase__deliverable-label">What ships</div>
                  <div className="phase__deliverable-value">
                    A production agent or integration &middot; monitoring
                    &middot; handoff documentation
                  </div>
                </div>
                <div>
                  <div className="phase__deliverable-label">Good fit when</div>
                  <div className="phase__deliverable-value">
                    There&rsquo;s a workflow with obvious waste and an owner
                    who&rsquo;ll keep it.
                  </div>
                </div>
              </div>
            </div>
            <div className="phase__diagram" aria-hidden="true">
              <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="14" width="48" height="32" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <text x="24" y="34" fontSize="9" fill="currentColor" textAnchor="middle" opacity="0.85" fontFamily="var(--font-mono)">IN</text>
                <line x1="50" y1="30" x2="74" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <polygon points="72,27 77,30 72,33" fill="currentColor" opacity="0.5" />
                <rect x="76" y="6" width="48" height="48" rx="3" fill="currentColor" opacity="0.92" />
                <text x="100" y="34" fontSize="9" fill="var(--color-basil-50)" textAnchor="middle" fontWeight="500" fontFamily="var(--font-mono)">AGENT</text>
                <line x1="126" y1="30" x2="150" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <polygon points="148,27 153,30 148,33" fill="currentColor" opacity="0.5" />
                <rect x="152" y="14" width="48" height="32" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <text x="176" y="34" fontSize="9" fill="currentColor" textAnchor="middle" opacity="0.85" fontFamily="var(--font-mono)">OUT</text>
              </svg>
              <div className="phase__diagram-caption">One workflow, one owner</div>
            </div>
          </div>

          {/* Phase 03 */}
          <div className="phase phase--viola">
            <div className="phase__index">
              <span className="phase__num">03</span>
              <span className="phase__when">8&ndash;16 weeks</span>
            </div>
            <div className="phase__body">
              <h2 className="phase__name">Product Build</h2>
              <p className="phase__lede">
                AI-native features your customers feel. Discovery through
                launch, measured against real outcomes.
              </p>
              <p>
                Embedded with the product and engineering team. I shape the
                first feature, instrument it, ship behind a flag, measure what
                changed. Close enough to make the calls that matter.
              </p>
              <p>
                The handoff is a launched feature with an outcome dashboard your
                team owns &mdash; and a written brief on what to build next.
              </p>
              <div className="phase__deliverables">
                <div>
                  <div className="phase__deliverable-label">What ships</div>
                  <div className="phase__deliverable-value">
                    A launched feature &middot; outcome instrumentation &middot;
                    next-step recommendations
                  </div>
                </div>
                <div>
                  <div className="phase__deliverable-label">Good fit when</div>
                  <div className="phase__deliverable-value">
                    A real customer job needs a real AI feature &mdash; not a
                    novelty bolt-on.
                  </div>
                </div>
              </div>
            </div>
            <div className="phase__diagram" aria-hidden="true">
              <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="200" height="56" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.28" />
                <line x1="8" y1="10" x2="44" y2="10" stroke="currentColor" strokeWidth="2" opacity="0.45" />
                <rect x="8" y="20" width="36" height="26" rx="2" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.32" />
                <rect x="50" y="20" width="36" height="26" rx="2" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.32" />
                <rect x="92" y="18" width="40" height="30" rx="3" fill="var(--color-viola-500)" opacity="0.5" />
                <rect x="92" y="18" width="40" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <text x="112" y="38" fontSize="10" fill="currentColor" textAnchor="middle" fontWeight="600" fontFamily="var(--font-mono)">+AI</text>
                <rect x="138" y="20" width="36" height="26" rx="2" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.32" />
                <line x1="0" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.25" />
                <circle cx="40" cy="80" r="2" fill="currentColor" opacity="0.45" />
                <circle cx="80" cy="80" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="120" cy="80" r="2" fill="currentColor" opacity="0.55" />
                <circle cx="160" cy="80" r="2" fill="currentColor" opacity="0.65" />
                <circle cx="200" cy="80" r="3" fill="currentColor" opacity="0.9" />
              </svg>
              <div className="phase__diagram-caption">Measured outcome</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="principles">
        <div className="wrap">
          <h2 className="principles__h">How I tend to work.</h2>
          <div className="principles__list">
            <div>
              <h3 className="principle__name">Software, not decks.</h3>
              <p className="principle__body">
                The deliverable is working code in production, not a deck about
                working code. Frameworks and templates are tools, not artifacts.
              </p>
            </div>
            <div>
              <h3 className="principle__name">Sit beside the work.</h3>
              <p className="principle__body">
                Two weeks of paired sessions beats six weeks of interviews. The
                team doing the workflow knows where it breaks.
              </p>
            </div>
            <div>
              <h3 className="principle__name">Fewer things, done very well.</h3>
              <p className="principle__body">
                A scoped agent shipped beats a platform vision shipped never.
                Pick fewer things, own them fully.
              </p>
            </div>
            <div>
              <h3 className="principle__name">Genuine ROI.</h3>
              <p className="principle__body">
                Every build has a baseline metric set in the audit and a target
                measured at 30 / 60 / 90 days. No vanity dashboards.
              </p>
            </div>
            <div>
              <h3 className="principle__name">Stay small.</h3>
              <p className="principle__body">
                No subcontractors, no junior handoffs. The person scoping the
                work is the person close to the build.
              </p>
            </div>
            <div>
              <h3 className="principle__name">Leave a clean handoff.</h3>
              <p className="principle__body">
                Your team owns the software after launch. Documentation,
                monitoring, and a written brief on what to build next &mdash;
                delivered on launch day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <div className="wrap">
          <h2 className="pricing__h">
            How engagements are scoped &amp; priced.
          </h2>
          <p className="pricing__lede">
            I price by engagement. Each phase is scoped against a written
            outcome and paid in even biweekly invoices. No retainers, no
            platform fees, no add-ons.
          </p>
          <div className="pricing__rows">
            <div className="pricing__row">
              <div className="pricing__row-label">Audit (Phase 01)</div>
              <div className="pricing__row-value">
                Fixed-fee, scoped against the use cases you want assessed.
                Quoted after the first call.
              </div>
            </div>
            <div className="pricing__row">
              <div className="pricing__row-label">Build (Phase 02 / 03)</div>
              <div className="pricing__row-value">
                Engagement-fee with a fixed weekly burn. Scope and outcome are
                written; the weeks are the variable.
              </div>
            </div>
            <div className="pricing__row">
              <div className="pricing__row-label">Invoicing</div>
              <div className="pricing__row-value">
                Biweekly. Net 15. Paid against the engagement, not the hour.
              </div>
            </div>
            <div className="pricing__row">
              <div className="pricing__row-label">What&rsquo;s included</div>
              <div className="pricing__row-value">
                All Marc&rsquo;s time. Tooling and infrastructure run on your
                accounts; Sugo pays for nothing on your behalf.
              </div>
            </div>
            <div className="pricing__row">
              <div className="pricing__row-label">What&rsquo;s not</div>
              <div className="pricing__row-value">
                Travel, third-party software licenses, and any subcontracted
                specialist work &mdash; all flagged and quoted before
                they&rsquo;re incurred.
              </div>
            </div>
          </div>
        </div>
      </section>

      <NextStep closer="If that’s the shape of what you need, the next step is a real call — not a vendor pitch." />
    </main>
  );
}
