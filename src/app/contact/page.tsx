export default function ContactPage() {
  return (
    <main>
      {/* THESIS (inner) */}
      <section className="thesis thesis--inner" style={{ paddingBottom: 64 }}>
        <div className="wrap">
          <h1 className="thesis__lede fade-in">
            Start a <span className="accent">conversation.</span>
          </h1>
          <div className="thesis__byline fade-in fade-in-2">
            <span className="thesis__byline-rule" aria-hidden="true" />
            <span>
              30 minutes, no deck. Tell me what you&rsquo;re working on.
            </span>
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="actions">
        <div className="wrap">
          <div className="actions__grid">
            <div>
              <p className="actions__lede">
                The fastest way is the calendar link. If you&rsquo;d rather
                write first, my inbox is below &mdash; I read everything and
                reply within a day.
              </p>

              <div className="actions__buttons">
                <a
                  className="btn-primary"
                  href="https://cal.com/marcrosa"
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

              <div className="actions__direct">
                <div className="actions__row">
                  <span className="actions__row-label">Email</span>
                  <span className="actions__row-value">
                    <a href="mailto:marc@sugoai.com">marc@sugoai.com</a>
                  </span>
                </div>
                <div className="actions__row">
                  <span className="actions__row-label">Based in</span>
                  <span className="actions__row-value">
                    Houston, TX &middot; working US-wide
                  </span>
                </div>
                <div className="actions__row">
                  <span className="actions__row-label">Availability</span>
                  <span className="actions__row-value">
                    Mon&ndash;Thu &middot; response within 24 hours
                  </span>
                </div>
                <div className="actions__row">
                  <span className="actions__row-label">Time zone</span>
                  <span className="actions__row-value">
                    Central &middot; happy to move to your calendar
                  </span>
                </div>
              </div>
            </div>

            <div className="actions__sidecard-group">
              <div className="actions__sidecard">
                <div className="actions__sidecard-label">
                  What we cover in the first call
                </div>
                <div className="actions__sidecard-row">
                  What problem is worth solving first
                </div>
                <div className="actions__sidecard-row">
                  Whether this is an audit, a build, or not a fit yet
                </div>
                <div className="actions__sidecard-row">
                  What a realistic timeline and scope might be
                </div>
              </div>
              <div className="actions__sidecard">
                <div className="actions__sidecard-label">
                  How to make the call useful
                </div>
                <p>
                  Come with one concrete workflow that&rsquo;s broken or one
                  feature you&rsquo;ve been circling. I&rsquo;d rather solve a
                  small real thing than discuss a vision deck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="filter">
        <div className="wrap">
          <div className="filter__grid">
            <div>
              <h2 className="filter__h">Is this the right call for you?</h2>
              <p className="filter__lede">
                Sugo is a small practice. I take a few engagements a year and
                turn away more than I take. Honesty about fit saves both of
                us time &mdash; so the short version is below.
              </p>
            </div>

            <div className="filter__list">
              <div className="filter__item">
                <span className="filter__mark filter__mark--yes">Yes</span>
                <p className="filter__text">
                  You have AI energy but not enough clarity on the first move.
                </p>
              </div>
              <div className="filter__item">
                <span className="filter__mark filter__mark--yes">Yes</span>
                <p className="filter__text">
                  You know exactly where the drag is and need a senior partner
                  to ship the first real version.
                </p>
              </div>
              <div className="filter__item">
                <span className="filter__mark filter__mark--yes">Yes</span>
                <p className="filter__text">
                  You&rsquo;re early in product or operations leadership and
                  want a senior thought partner in the room.
                </p>
              </div>
              <div className="filter__item">
                <span className="filter__mark filter__mark--no">Not yet</span>
                <p className="filter__text">
                  You need a long-running staff augmentation engagement. Sugo is
                  project-shaped, not team-shaped.
                </p>
              </div>
              <div className="filter__item">
                <span className="filter__mark filter__mark--no">Not yet</span>
                <p className="filter__text">
                  You&rsquo;re shopping for the lowest-bid build. Sugo is
                  senior-led; the rate reflects that.
                </p>
              </div>
              <div className="filter__item">
                <span className="filter__mark filter__mark--no">Not yet</span>
                <p className="filter__text">
                  You haven&rsquo;t yet decided AI is worth investing in. The
                  first call should be a strategic one, not this one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNOFF */}
      <section className="signoff">
        <div className="wrap">
          <p className="signoff__text">
            However you reach out, I&rsquo;ll reply with a real human sentence
            and a calendar link. &mdash; Marc
          </p>
          <div className="signoff__sign">
            <span>Marc Rosa</span>
            <span>&middot;</span>
            <a href="mailto:marc@sugoai.com">marc@sugoai.com</a>
            <span>&middot;</span>
            <span>Houston, TX</span>
          </div>
        </div>
      </section>

    </main>
  );
}
