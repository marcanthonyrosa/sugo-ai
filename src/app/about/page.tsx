import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main>
      <section className="py-[100px] pt-[140px] max-[767px]:py-[56px] max-[767px]:pt-[100px]">
        <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6">
          <div className="max-w-[680px]">
            <div className="eyebrow mb-6">About</div>
            <h1 className="type-h1">A small firm, built <span className="italic-accent">slowly.</span></h1>
            <p className="type-lead" style={{ marginTop: "24px" }}>
              Sugo AI is a product and consulting practice founded by Marc
              Anthony Rosa. The name is a nod to Sunday sauce
              {"\u200A—\u200A"}the slow, intentional kind, made with care. We
              apply that same philosophy to AI work: thoughtful sequencing,
              genuine capability-building, no shortcuts that become liabilities.
            </p>

            <h2 className="type-h1" style={{ marginTop: "80px", marginBottom: "16px" }}>The <span className="italic-accent">thesis.</span></h2>
            <p className="type-body mb-6">
              Most enterprise AI efforts stall. Not because the models
              aren&rsquo;t good enough{"\u200A—\u200A"}they&rsquo;re
              extraordinary. They stall because the tools don&rsquo;t learn the
              business, integrations are shallow, and the internal team is
              stretched too thin to ship new software on top of everything else
              they own.
            </p>
            <p className="type-body">
              MIT&rsquo;s August 2025 research made this explicit: 95% of
              enterprise AI pilots don&rsquo;t move the P&amp;L. The companies
              that do cross the divide almost always partner with a specialist.
              Sugo AI exists to be that partner.
            </p>

            <h2 className="type-h1" style={{ marginTop: "80px", marginBottom: "16px" }}>Two places we <span className="italic-accent">work.</span></h2>
            <p className="type-body mb-6">
              Inside the business, we build agents and automations that take
              manual work off the team. Dashboards that get used. Integrations
              that stop the copy-paste. The quiet back-office software
              MIT&rsquo;s research flags as the highest-ROI
              {"\u200A—\u200A"}and the most underfunded{"\u200A—\u200A"}AI work
              in the enterprise.
            </p>
            <p className="type-body">
              Inside the product, we design and ship AI-native features
              customers actually feel. End-to-end: discovery, design,
              architecture, build, measurement, launch.
            </p>

            <h2 className="type-h1" style={{ marginTop: "80px", marginBottom: "16px" }}>How we <span className="italic-accent">work.</span></h2>
            <p className="type-body mb-6">
              Small, senior, and on the clock. Every engagement is staffed by
              people who have shipped real software. We work with an AI-native
              toolchain and a modern stack{"\u200A—\u200A"}which is why a small
              Sugo team delivers faster than a traditional firm three times our
              size.
            </p>
            <p className="type-body">
              Our default is that the work product is yours. We document
              everything. We leave your team able to maintain and extend what we
              ship.
            </p>

            <h2 className="type-h1" style={{ marginTop: "80px", marginBottom: "16px" }}>The <span className="italic-accent">founder.</span></h2>

            <figure className="my-10 mb-14 max-w-[440px]">
              <div
                className="flex items-center justify-center"
                style={{
                  aspectRatio: "4/5",
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-rule-soft)",
                  borderRadius: "var(--r-lg)",
                }}
              >
                <span className="fig">
                  Photo &middot; Marc Rosa &middot; 2026
                </span>
              </div>
              <figcaption className="fig mt-3">
                Marc Anthony Rosa &middot; Founder &middot; Houston, TX
              </figcaption>
            </figure>

            <p className="type-body mb-6">
              Marc Anthony Rosa has spent fifteen years in product. Most
              recently Head of Product at a conversational AI company in the MSP
              space; before that, product leadership roles across health-tech
              and SaaS. He&rsquo;s currently leading AI product development at a
              major health-tech organization. Sugo AI is his practice.
            </p>
            <p className="type-body">
              He lives in Houston, Texas, with his family.
            </p>

            <p className="mt-12">
              <Link className="btn-primary" href="/contact" style={{ border: "none", textDecoration: "none" }}>
                Start a conversation <span className="arrow">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
