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
          <div className="phase">
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
          </div>

          {/* Phase 02 */}
          <div className="phase">
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
          </div>

          {/* Phase 03 */}
          <div className="phase">
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

      <NextStep />
    </main>
  );
}
