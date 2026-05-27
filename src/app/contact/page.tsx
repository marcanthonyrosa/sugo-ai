import { CAL_URL } from "@/components/ui/CalModal";

export default function ContactPage() {
  return (
    <main className="memo memo--contact">
      {/* /contact · macrostructure: qualification-first */}

      <section className="memo__hero">
        <div className="wrap">
          <h1 className="memo__thesis fade-in">Before the call.</h1>
          <p className="memo__intro fade-in fade-in-2">
            A short honest read on who this is for &mdash; then the
            calendar link.
          </p>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">This is a great fit if&hellip;</h2>
          <ul className="qualification">
            <li>
              You have AI energy but not enough clarity on the first move.
            </li>
            <li>
              You know exactly where the drag is and need a senior partner
              to ship the first real version.
            </li>
            <li>
              You&rsquo;re early in product or operations leadership and
              want someone senior in the room with you.
            </li>
          </ul>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">This isn&rsquo;t a fit if&hellip;</h2>
          <ul className="qualification">
            <li>
              You need a long-running staff-augmentation engagement &mdash;
              I run project-shaped, not team-shaped.
            </li>
            <li>
              You&rsquo;re shopping for the lowest-bid build. I&rsquo;m
              senior-led; the rate reflects that.
            </li>
            <li>
              You haven&rsquo;t decided AI is worth investing in. That
              first call is a strategic one, not this one.
            </li>
          </ul>
          <p className="qualification__exit">
            If now isn&rsquo;t the right moment, keep my email &mdash; most
            engagements start as a check-in months before they become work.
          </p>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">How to make the call useful.</h2>
          <div className="memo__prose">
            <p>
              Come with one concrete workflow that&rsquo;s broken or one
              feature you&rsquo;ve been circling. I&rsquo;d rather solve a
              small real thing than discuss a vision deck.
            </p>
          </div>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">What we&rsquo;ll cover.</h2>
          <ul className="qualification">
            <li>What problem is worth solving first.</li>
            <li>Whether this is an audit, a build, or not a fit yet.</li>
            <li>What a realistic timeline and scope might be.</li>
          </ul>
        </div>
      </section>

      <section className="memo__section">
        <div className="wrap">
          <h2 className="memo__h">Reach out.</h2>
          <p className="contact__meta">
            marc@sugoai.com &middot; Houston, Central time &middot; response
            within 24 hours &middot; happy to move to your calendar.
          </p>
          <div className="contact__actions">
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
            <a
              className="btn-secondary"
              href="mailto:marc@sugoai.com?subject=Sugo%20%E2%80%94%20worth%20a%20conversation"
            >
              Email Marc{" "}
              <span className="arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
          <p className="contact__close">
            However you reach out, I&rsquo;ll reply with a real human
            sentence and a calendar link. &mdash; Marc
          </p>
        </div>
      </section>
    </main>
  );
}
