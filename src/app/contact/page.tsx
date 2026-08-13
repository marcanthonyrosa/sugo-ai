import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { EmailCopy } from "@/components/contact/EmailCopy";
import "../pages-sub.css";

export const metadata: Metadata = {
  title: "Sugo AI — Start a conversation",
  description:
    "Start a conversation with Sugo AI about internal tools, AI agents, and customer products for traditional businesses.",
};

export default function ContactPage() {
  return (
    <>
      <main id="main" className="pg-contact">
        {/* Hero — the page IS the CTA */}
        <section className="pg-hero">
          <div className="wrap">
            <h1 className="reveal" style={{ "--i": 0 } as React.CSSProperties}>
              Start a conversation.
            </h1>
            {/* §CT-1 */}
            <p
              className="lede reveal"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              If the work matters, the conversation is worth having. Even if we
              never work together, a good first call should leave you with a
              clearer read on the problem, the constraints, and the next move.
            </p>
          </div>
        </section>

        {/* Conversation panel */}
        <section className="convo" aria-labelledby="convo-title">
          <div className="wrap">
            <h2 id="convo-title" className="visually-hidden">
              The direct line
            </h2>
            <div className="convo__panel">
              <div className="convo__grid">
                <EmailCopy />
                {/*
                  INTEGRATION MICROCOPY (future form + 404)
                  · form success: “Thanks — we’ve got it and will be in touch soon.”
                  · form error: “Your message did not go through. Please try again, or
                    email marc@sugoai.com if the form keeps getting in the way.”
                  · 404 line: “This page is not here anymore — the useful thing is
                    probably somewhere else.”
                */}
                <aside className="convo__next" aria-labelledby="next-title">
                  <h2 id="next-title">What happens next</h2>
                  {/* §CT-2 */}
                  <ol className="next__list">
                    <li>
                      <span className="next__num" aria-hidden="true">
                        01
                      </span>
                      <span>
                        We read what you send and look for the product problem
                        inside it.
                      </span>
                    </li>
                    <li>
                      <span className="next__num" aria-hidden="true">
                        02
                      </span>
                      <span>
                        If it makes sense to talk, the first call is with the
                        people who would do the work.
                      </span>
                    </li>
                    <li>
                      <span className="next__num" aria-hidden="true">
                        03
                      </span>
                      <span>
                        After that, we give you a plain-language read on what we
                        see and what the next step should be.
                      </span>
                    </li>
                  </ol>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Worth bringing */}
        <section className="bring" aria-labelledby="bring-title">
          <div className="wrap">
            <div className="bring__card">
              <h2 id="bring-title">Worth bringing.</h2>
              {/* §CT-3 */}
              <ul>
                <li>The workflow that is hurting most</li>
                <li>Who lives inside that workflow every day</li>
                <li>What has already been tried</li>
                <li>What would make this worth shipping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fit — honesty diptych */}
        <section className="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <h2 id="fit-title">Where we&rsquo;re useful — and where we&rsquo;re not.</h2>
            <div className="fit__grid">
              <div className="fit__col fit--yes">
                <h3>A good fit if</h3>
                {/* §CT-4 */}
                <ul>
                  <li>
                    You need more than a deck and less than a giant agency
                    machine
                  </li>
                  <li>
                    The problem is real enough that you want software, not just
                    advice
                  </li>
                  <li>
                    You want the people shaping the product to stay close to the
                    build
                  </li>
                </ul>
              </div>
              <div className="fit__col fit--no">
                <h3>Probably not if</h3>
                <ul>
                  <li>
                    You already know exactly what to build and only need extra
                    hands on pre-written tickets
                  </li>
                  <li>
                    You want a strategy artifact without the expectation of
                    shipping anything
                  </li>
                  <li>
                    You are looking for the fastest possible vendor and product
                    judgment is secondary
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="compact" />
    </>
  );
}
