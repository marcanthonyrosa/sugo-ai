import Image from "next/image";
import { NextStep } from "@/components/layout/NextStep";

export default function AboutPage() {
  return (
    <main className="memo memo--about">
      {/* /about · macrostructure: long-form letter */}

      <section className="memo__hero">
        <div className="wrap">
          <h1 className="memo__thesis fade-in">
            A senior practitioner,{" "}
            <span className="accent">not a firm.</span>
          </h1>
          <p className="memo__credit fade-in fade-in-2">
            Marc Rosa &middot; Houston, TX
          </p>
        </div>
      </section>

      <section className="memo__section letter">
        <div className="wrap">
          <div className="letter__grid">
            <div className="letter__portrait">
              <Image
                src="/marc-rosa.png"
                alt="Marc Rosa"
                width={533}
                height={689}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
            <div className="letter__body">
              <p className="letter__lede">
                Sugo AI is my practice. I run it as a single senior
                partner &mdash; same person scoping the work, same person
                close to the build.
              </p>
              <p>
                Most recently I was Head of Product at{" "}
                <strong>Thread</strong>, where we turned a feature with
                traction into the category-leading AI service desk for
                MSPs. Before that, Director of Product at{" "}
                <strong>Deep 6 AI</strong> &mdash; a clinical-trial
                matching company in TMC&rsquo;s portfolio, acquired by
                Tempus. Earlier roles were in health-tech and SaaS, mostly
                0&rarr;1 work: find the right thing to build, ship the
                first real version, measure what actually changed.
              </p>
              <p>
                I started Sugo for legacy enterprises that want AI but
                don&rsquo;t know where to start. Outside software, agent
                penetration is under 5% &mdash; most industries have real
                appetite and no obvious first move. That&rsquo;s the work:
                find the opening, ship the first real workflow, put
                working software in the team&rsquo;s hands.
              </p>
              <p>
                The &ldquo;Sugo&rdquo; is sauce. Every Sunday my sons and
                I make it &mdash; same starting recipe, a small change
                each week. The pixelated tomato in the logo is a callback
                to that. Two ideas I keep coming back to: a few
                ingredients, done well; and the change is in what you do
                this week, not what you started with.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="memo__ps">
        <div className="wrap">
          <p>
            <em>P.S.</em> &mdash; I&rsquo;m in Houston with my wife Elle,
            who runs an interior design studio, and two young sons.
          </p>
        </div>
      </section>

      <NextStep closer="If you want the longer version, the easiest thing is a thirty-minute call." />
    </main>
  );
}
