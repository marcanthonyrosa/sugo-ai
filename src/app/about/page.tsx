import Image from "next/image";
import Link from "next/link";
import { NextStep } from "@/components/layout/NextStep";
import { Footer } from "@/components/layout/Footer";

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
                a conversational-AI platform for managed-service
                providers &mdash; three years building AI-native software for a
                vertical where buyers know the difference between a real
                workflow tool and a demo.
              </p>
              <p>
                Before that I was Director of Product at{" "}
                <strong>Deep 6 AI</strong>, a clinical-trial matching company in
                TMC&rsquo;s portfolio that was later acquired by Tempus AI. I
                spent the previous decade between health-tech and SaaS, mostly
                in 0&rarr;1 product roles where the brief was &ldquo;find the
                wedge, ship the first real version, and instrument it
                honestly.&rdquo;
              </p>
              <p>
                I started Sugo because the AI consulting market is full of firms
                that ship slides and short on people who ship software. The
                companies I&rsquo;ve enjoyed working with most had one thing in
                common: a senior partner close enough to the build to make the
                trade-offs that decide whether a feature lands or just shipped.
                Sugo is that partner, available by the engagement.
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
                I&rsquo;m in Houston with my wife &mdash; a residential interior
                designer &mdash; three sons (the youngest still very new), and
                an embarrassing number of half-finished side projects. We chose
                to build slowly here on purpose.
              </p>
              <p>
                If you want the longer version of any of the above, the easiest
                thing is usually a thirty-minute call. I&rsquo;d rather talk
                than write more about myself.
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
      <Footer />
    </main>
  );
}
