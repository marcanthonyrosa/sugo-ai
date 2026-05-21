import Image from "next/image";
import Link from "next/link";
import { NextStep } from "@/components/layout/NextStep";

export default function AboutPage() {
  return (
    <main>
      {/* THESIS (inner) */}
      <section className="thesis thesis--inner">
        <div className="wrap">
          <h1 className="thesis__lede fade-in">
            A senior practitioner, <span className="accent">not a firm.</span>
          </h1>
          <div className="thesis__byline fade-in fade-in-2">
            <span className="thesis__byline-rule" aria-hidden="true" />
            <span>Marc Rosa &middot; Founder &middot; Houston, TX</span>
          </div>
        </div>
      </section>

      {/* PORTRAIT + INTRO */}
      <section className="portrait">
        <div className="wrap">
          <div className="portrait__grid">
            <div className="portrait__frame">
              <Image
                src="/marc-rosa.png"
                alt="Marc Rosa"
                width={640}
                height={800}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            </div>
            <div className="portrait__body">
              <h2 className="portrait__name">Marc Rosa</h2>
              <div className="portrait__role">
                Founder &middot; 15 years in product
              </div>
              <p className="portrait__lede">
                Sugo AI is my practice. I run it as a single senior
                partner &mdash; same person scoping the work, same person close
                to the build.
              </p>
              <p>
                <strong>Most recently</strong> I was Head of Product at Thread,
                where we turned a feature with traction into the
                category-leading AI service desk for MSPs.
              </p>
              <p>
                Before Thread, I was Director of Product at{" "}
                <strong>Deep 6 AI</strong> &mdash; clinical-trial matching, in
                TMC&rsquo;s portfolio, acquired by Tempus.
              </p>
              <p>
                The decade before that was health-tech and SaaS, mostly
                0&rarr;1 work: find the right thing to build, ship the first
                real version, measure what actually changed.
              </p>
              <p>
                I started Sugo for legacy enterprises that want AI but
                don&rsquo;t know where to start. Outside software, agent
                penetration is under 5% &mdash; most industries have real
                appetite and no obvious first move.
              </p>
              <p>
                That&rsquo;s the work: find the opening, ship the first real
                workflow, put working software in the team&rsquo;s hands. A
                senior partner close enough to the build to make the calls that
                matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PULLQUOTE */}
      <section className="pullquote">
        <div className="wrap">
          <div className="pullquote__inner">
            <div className="pullquote__mark" aria-hidden="true">
              &ldquo;
            </div>
            <p className="pullquote__text">
              Most AI projects don&rsquo;t fail at the model. They fail at the
              last mile &mdash; where someone has to own whether the thing
              actually ships.
            </p>
            <span className="pullquote__cite">
              Marc &middot; on what Sugo is for
            </span>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline">
        <div className="wrap">
          <h2 className="timeline__h">Career arc.</h2>
          <div className="timeline__rows">
            <div className="timeline__row">
              <span className="timeline__year">2026 &mdash; present</span>
              <span className="timeline__role">Founder &middot; Sugo AI</span>
              <span className="timeline__where">Houston, TX</span>
            </div>
            <div className="timeline__row">
              <span className="timeline__year">2026 &mdash; present</span>
              <span className="timeline__role">
                Fractional Product, AI Innovation
              </span>
              <span className="timeline__where">Texas Medical Center</span>
            </div>
            <div className="timeline__row">
              <span className="timeline__year">2022 &mdash; 2025</span>
              <span className="timeline__role">Head of Product</span>
              <span className="timeline__where">
                Thread &middot; MSP conversational AI
              </span>
            </div>
            <div className="timeline__row">
              <span className="timeline__year">2019 &mdash; 2022</span>
              <span className="timeline__role">Director of Product</span>
              <span className="timeline__where">
                Deep 6 AI &middot; acquired by Tempus AI
              </span>
            </div>
            <div className="timeline__row">
              <span className="timeline__year">2011 &mdash; 2019</span>
              <span className="timeline__role">
                Product roles in health-tech &amp; SaaS
              </span>
              <span className="timeline__where">
                Various &middot; 0&rarr;1 product work
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL ANCHOR */}
      <section className="anchor">
        <div className="wrap">
          <div className="anchor__inner">
            <span className="anchor__label">Off the clock</span>
            <div className="anchor__body">
              <p>
                I&rsquo;m in Houston with my wife Elle, who runs an interior
                design studio. We have a four-year-old and a newborn.
              </p>
              <p>
                Sugo is Italian for sauce. Every Sunday, my sons and I make
                it &mdash; same starting recipe, a small change each week.
                The pixelated tomato in the logo is a callback to that.
              </p>
              <p>
                If you want the longer version of any of the above, the easiest
                thing is usually a thirty-minute call.
              </p>
              <Link className="link-text" href="/contact">
                Write to me{" "}
                <span className="arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NextStep />
    </main>
  );
}
