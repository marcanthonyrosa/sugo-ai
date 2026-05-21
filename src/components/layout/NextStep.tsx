export function NextStep() {
  return (
    <section className="next-step" id="next-step">
      <div className="wrap">
        <div className="next-step__grid">
          <div className="next-step__lead">
            <h2 className="next-step__h">
              Start a <span className="accent">conversation.</span>
            </h2>
            <p className="next-step__body">
              30 minutes, no deck. Tell me what you&rsquo;re working on and
              where the friction is.
            </p>
            <div className="next-step__actions">
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
              <a className="next-step__secondary" href="mailto:marc@sugoai.com">
                Email Marc{" "}
                <span className="arrow" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
            <div className="next-step__location">
              Based in Houston, TX &middot; working US-wide
            </div>
          </div>
          <div className="next-step__card">
            <div className="next-step__card-label">
              What we cover in the first call
            </div>
            <div className="next-step__card-row">
              What problem is worth solving first
            </div>
            <div className="next-step__card-row">
              Whether this is an audit, a build, or not a fit yet
            </div>
            <div className="next-step__card-row">
              What the timeline and scope might look like
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
