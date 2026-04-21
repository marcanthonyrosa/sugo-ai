import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main>
      <section className="py-[84px] pt-[132px] max-[1199px]:py-16 max-[767px]:py-12">
        <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6">
          <div className="max-w-[680px] ml-40 max-[1199px]:max-w-[580px] max-[1199px]:ml-20 max-[767px]:max-w-full max-[767px]:ml-0">
            <SectionLabel n="—">About — Sugo AI</SectionLabel>
            <h1 className="type-h1">A small firm, built slowly.</h1>
            <p className="type-lead mt-10">
              Sugo AI is a product and consulting practice founded by Marc
              Anthony Rosa. The name is a nod to Sunday sauce
              {"\u200A—\u200A"}the slow, intentional kind, made with care. We
              apply that same philosophy to AI work: thoughtful sequencing,
              genuine capability-building, no shortcuts that become liabilities.
            </p>

            <h2 className="type-h2 mt-28 mb-6">The thesis.</h2>
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

            <h2 className="type-h2 mt-28 mb-6">Two places we work.</h2>
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

            <h2 className="type-h2 mt-28 mb-6">How we work.</h2>
            <p className="type-body mb-6">
              Small, senior, and on the clock. Every engagement is staffed by
              people who have shipped real software. We work fluently with
              Claude Code, Cursor, Figma, Supabase, and Vercel
              {"\u200A—\u200A"}which is why a small Sugo team delivers faster
              than a traditional firm three times our size.
            </p>
            <p className="type-body">
              Our default is that the work product is yours. We document
              everything. We leave your team able to maintain and extend what we
              ship.
            </p>

            <h2 className="type-h2 mt-28 mb-6">The founder.</h2>

            <figure className="my-10 mb-14 max-w-[440px]">
              <div className="aspect-[4/5] bg-cream border border-clay flex items-center justify-center">
                <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-stone">
                  Photo · Marc Rosa · 2026
                </span>
              </div>
              <figcaption className="font-mono text-[11px] tracking-[0.12em] uppercase text-stone mt-3.5">
                Marc Anthony Rosa · Founder · Houston, TX
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

            <p className="mt-14">
              <span className="type-body text-ink-80">
                Want to work together?{" "}
              </span>
              <Link className="link-grow" href="/contact">
                Start a conversation →
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
