import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

type SectionLeadProps = {
  kicker: string;
  title: string;
  body?: string;
};

function SectionLead({ kicker, title, body }: SectionLeadProps) {
  return (
    <div className="max-w-[760px]">
      <div className="mb-5 text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--tone-muted)]">
        {kicker}
      </div>
      <h2
        className="text-[clamp(2.5rem,4vw,4.75rem)] leading-[0.95] tracking-[-0.055em] text-[var(--tone-ink)]"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 620 }}
      >
        {title}
      </h2>
      {body ? (
        <p className="mt-6 max-w-[680px] text-[19px] leading-[1.72] text-[var(--tone-copy)]">
          {body}
        </p>
      ) : null}
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[13px] font-medium text-[var(--tone-copy)] transition-colors duration-200 hover:text-[var(--tone-ink)]"
    >
      {children}
    </Link>
  );
}

function HeroTag({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--tone-ink)]"
      style={{
        background: "rgba(255,255,255,0.8)",
        border: "1px solid rgba(32,42,37,0.1)",
      }}
    >
      {children}
    </span>
  );
}

function StepCard({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="grid gap-2 border-b border-[var(--tone-rule)] pb-5 last:border-b-0 last:pb-0">
      <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--tone-muted)]">
        {num}
      </div>
      <div className="text-[18px] font-semibold text-[var(--tone-ink)]">
        {title}
      </div>
      <p className="text-[16px] leading-[1.6] text-[var(--tone-copy)]">{body}</p>
    </div>
  );
}

function BuildCard({
  label,
  title,
  body,
  accent,
}: {
  label: string;
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-[36px] p-8 md:p-10"
      style={{
        background: "rgba(255,255,255,0.72)",
        border: "1px solid var(--tone-rule)",
        boxShadow: "0 20px 46px rgba(32,42,37,0.06)",
      }}
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--tone-muted)]">
          {label}
        </span>
        <span
          className="h-3 w-3 rounded-full"
          style={{ background: accent }}
          aria-hidden="true"
        />
      </div>
      <h3
        className="max-w-[12ch] text-[clamp(2rem,2.4vw,2.8rem)] leading-[1] tracking-[-0.05em] text-[var(--tone-ink)]"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 620 }}
      >
        {title}
      </h3>
      <p className="mt-5 max-w-[40ch] text-[17px] leading-[1.72] text-[var(--tone-copy)]">
        {body}
      </p>
    </div>
  );
}

const pageTheme: CSSProperties = {
  ["--tone-bg" as string]: "#f8f3e9",
  ["--tone-surface" as string]: "#fffdf8",
  ["--tone-soft" as string]: "#f0f3ea",
  ["--tone-soft-warm" as string]: "#f9eed5",
  ["--tone-soft-rose" as string]: "#f5e7e0",
  ["--tone-ink" as string]: "#1f2d29",
  ["--tone-copy" as string]: "#506059",
  ["--tone-muted" as string]: "#7b857f",
  ["--tone-rule" as string]: "rgba(31,45,41,0.11)",
  ["--tone-moss" as string]: "#99ae8c",
  ["--tone-gold" as string]: "#dfbd69",
  ["--tone-coral" as string]: "#dc8b71",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--tone-bg)]" style={pageTheme}>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(153,174,140,0.18), transparent 30%), radial-gradient(circle at 85% 15%, rgba(223,189,105,0.16), transparent 22%)",
          }}
        />
        <div className="wrap relative pt-16 md:pt-18">
          <div className="flex items-center justify-between gap-8 pb-4 md:pb-5">
            <Link
              href="/"
              className="text-[17px] font-semibold tracking-[-0.03em] text-[var(--tone-ink)]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Sugo AI
            </Link>
            <div className="hidden items-center gap-7 md:flex">
              <NavLink href="/how-we-work">How we work</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.78)] px-4 py-2.5 text-[13px] font-semibold text-[var(--tone-ink)]"
                style={{ border: "1px solid rgba(31,45,41,0.08)" }}
              >
                Start a project
              </Link>
            </div>
          </div>
          <div className="h-px bg-[var(--tone-rule)]" />
        </div>

        <div className="wrap relative pb-14 pt-12 md:pb-18 md:pt-14 lg:pb-20">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.98fr)_420px] xl:items-start">
            <div className="max-w-[760px]">
              <h1
                className="max-w-[11.25ch] text-[clamp(2.7rem,5.1vw,4.3rem)] leading-[0.9] tracking-[-0.065em] text-[var(--tone-ink)]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 590 }}
              >
                Modern product development for companies that aren&apos;t software companies.
              </h1>
              <p className="mt-6 max-w-[560px] text-[clamp(1rem,1.15vw,1.08rem)] leading-[1.78] text-[var(--tone-copy)]">
                We help traditional businesses ship internal tools, AI agents,
                and customer products with the discipline of a modern software
                company.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--tone-ink)] px-5 py-3 text-[14px] font-semibold text-[var(--tone-surface)] transition-transform duration-200 hover:-translate-y-px"
                >
                  Start a project
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href="/how-we-work"
                  className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.8)] px-5 py-3 text-[14px] font-semibold text-[var(--tone-ink)]"
                  style={{ border: "1px solid rgba(31,45,41,0.1)" }}
                >
                  See how we work
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto mt-4 w-full max-w-[420px] xl:mx-0 xl:mt-8">
              <div
                className="absolute left-[-14px] top-[26%] h-12 w-12 rounded-full"
                style={{ background: "rgba(153,174,140,0.22)" }}
                aria-hidden="true"
              />
              <div
                className="absolute right-[-10px] top-[-2px] h-12 w-12 rounded-[16px]"
                style={{ background: "rgba(223,189,105,0.3)" }}
                aria-hidden="true"
              />
              <div
                className="absolute bottom-[14px] left-[14%] h-10 w-10 rounded-full"
                style={{ background: "rgba(220,139,113,0.2)" }}
                aria-hidden="true"
              />

              <div
                className="relative overflow-hidden rounded-[30px] p-4"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,253,248,0.92), rgba(255,255,255,0.74))",
                  border: "1px solid rgba(31,45,41,0.1)",
                  boxShadow: "0 30px 70px rgba(31,45,41,0.08)",
                }}
              >
                <div className="grid gap-3">
                  <div
                    className="rounded-[22px] p-4"
                    style={{ background: "var(--tone-soft)" }}
                  >
                    <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--tone-muted)]">
                      How the engagement feels
                    </div>
                    <div
                      className="mt-2 max-w-[11ch] text-[1.45rem] leading-[0.96] tracking-[-0.045em] text-[var(--tone-ink)]"
                      style={{ fontFamily: "var(--font-sans)", fontWeight: 620 }}
                    >
                      Structured. Calm. Close to the work.
                    </div>
                    <div className="mt-4 grid gap-2">
                      {[
                        "Discovery with operators, not just stakeholders",
                        "Product decisions tied to business reality",
                        "Design and engineering carried into production",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-full bg-[rgba(255,255,255,0.72)] px-3.5 py-2 text-[11px] leading-[1.35] text-[var(--tone-copy)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 grid-cols-[1.18fr_0.82fr]">
                    <div
                      className="rounded-[20px] p-4"
                      style={{ background: "var(--tone-soft-warm)" }}
                    >
                      <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--tone-muted)]">
                        Ownership
                      </div>
                      <div
                        className="mt-2 text-[1.08rem] leading-[1.04] tracking-[-0.035em] text-[var(--tone-ink)]"
                        style={{ fontFamily: "var(--font-sans)", fontWeight: 620 }}
                      >
                        Product strategy through production rollout.
                      </div>
                    </div>

                    <div
                      className="rounded-[20px] p-4"
                      style={{ background: "var(--tone-soft-rose)" }}
                    >
                      <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--tone-muted)]">
                        Common outputs
                      </div>
                      <div className="mt-4 grid gap-2">
                        {["Workflow software", "AI agents", "Customer portals"].map((item) => (
                          <span
                            key={item}
                            className="inline-flex w-fit items-center rounded-full bg-[rgba(255,255,255,0.78)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--tone-copy)]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className="grid grid-cols-[1fr_0.8fr_1fr] gap-2.5 px-0.5 pt-0.5"
                    aria-hidden="true"
                  >
                    <div className="rounded-[16px] border border-[rgba(31,45,41,0.08)] bg-[rgba(255,255,255,0.84)] p-3">
                      <div className="h-1.5 w-10 rounded-full bg-[rgba(31,45,41,0.5)]" />
                      <div className="mt-2 h-11 rounded-[10px] bg-[rgba(153,174,140,0.24)]" />
                    </div>
                    <div className="grid gap-2">
                      <div className="rounded-[14px] bg-[rgba(223,189,105,0.28)] p-2.5">
                        <div className="h-1.5 w-7 rounded-full bg-[rgba(220,139,113,0.65)]" />
                        <div className="mt-2 h-4 rounded-full bg-[rgba(255,255,255,0.72)]" />
                      </div>
                      <div className="rounded-[14px] bg-[rgba(31,45,41,0.05)] p-2.5">
                        <div className="h-1.5 w-8 rounded-full bg-[rgba(31,45,41,0.18)]" />
                        <div className="mt-2 h-3 rounded-full bg-[rgba(31,45,41,0.08)]" />
                      </div>
                    </div>
                    <div className="rounded-[16px] border border-[rgba(31,45,41,0.08)] bg-[rgba(255,255,255,0.84)] p-3">
                      <div className="h-1.5 w-11 rounded-full bg-[rgba(31,45,41,0.42)]" />
                      <div className="mt-2 h-7 rounded-[10px] bg-[rgba(31,45,41,0.08)]" />
                      <div className="mt-2 h-3 rounded-full bg-[rgba(153,174,140,0.24)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="wrap">
          <SectionLead
            kicker="Positioning"
            title="Sugo AI is a product studio for traditional businesses building serious software."
            body="We partner with teams that know their business deeply but have not historically operated like software companies. We bring the product, design, and engineering discipline needed to build software that is modern, usable, and worth rolling out."
          />
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="wrap">
          <SectionLead
            kicker="What We Build"
            title="The work usually falls into two buckets."
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            <BuildCard
              label="Inside the business"
              title="Internal tools & AI agents"
              body="Software for operations, workflows, decision support, and team productivity. We help businesses replace manual work, disconnected systems, and shallow pilots with tools that fit how the organization actually runs."
              accent="var(--tone-moss)"
            />
            <BuildCard
              label="Outside the business"
              title="Customer products"
              body="Portals, platforms, and digital experiences for customers, members, partners, and policyholders. We build products that are clear, trustworthy, and easy to use, especially when the business behind them is operationally complex."
              accent="var(--tone-gold)"
            />
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="wrap">
          <div className="grid gap-14 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <SectionLead
              kicker="Full Lifecycle"
              title="We own the full product lifecycle."
              body="Sugo AI works from product strategy through design, engineering, launch, and production rollout. We do not stop at recommendations, specs, or prototypes. We stay close to the work until the product is live, stable, usable, and working inside the real constraints of the business."
            />
            <div className="rounded-[10px] bg-[rgba(255,255,255,0.35)] px-1">
              <div className="grid gap-5">
                {[
                  ["01", "Product strategy", "What to build, what not to build, and why."],
                  ["02", "Design", "Interfaces that feel modern, calm, and easy to use."],
                  ["03", "Engineering", "Hands-on implementation through production."],
                  ["04", "Launch & rollout", "The operational work required to make software real."],
                ].map(([num, title, body]) => (
                  <StepCard key={title} num={num} title={title} body={body} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 max-w-[660px] xl:max-w-[560px]">
            <p className="text-[16px] leading-[1.72] text-[var(--tone-copy)]">
              That includes the parts many firms avoid: production readiness,
              accessibility, implementation detail, coordination with internal
              teams, and the practical work required to get software standing up
              in the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="wrap">
          <div className="grid gap-12 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start">
            <div
              className="rounded-[38px] p-8 md:p-10"
              style={{
                background: "linear-gradient(180deg, rgba(245,231,224,0.96), rgba(255,255,255,0.38))",
                border: "1px solid var(--tone-rule)",
              }}
            >
              <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--tone-muted)]">
                Why pilots stall
              </div>
              <div
                className="mt-4 text-[clamp(4.5rem,9vw,6.8rem)] leading-none tracking-[-0.08em] text-[var(--tone-ink)]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 650 }}
              >
                95%
              </div>
              <p className="mt-4 text-[18px] leading-[1.62] text-[var(--tone-copy)]">
                was the headline figure associated with a widely cited MIT
                NANDA report from August 2025.
              </p>
            </div>
            <div className="max-w-[820px]">
              <h2
                className="text-[clamp(2.6rem,4.2vw,4.9rem)] leading-[0.95] tracking-[-0.055em] text-[var(--tone-ink)]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 620 }}
              >
                Most AI pilots do not stall because the model is weak.
              </h2>
              <p className="mt-6 text-[18px] leading-[1.72] text-[var(--tone-copy)]">
                A widely cited MIT NANDA report from August 2025 found that
                only a small minority of enterprise GenAI pilots showed
                measurable P&amp;L impact. In our experience, the issue is
                usually ownership: the team shaping the opportunity is too far
                from the team building the product, and no one is accountable
                end to end.
              </p>
              <p
                className="mt-6 rounded-[24px] px-6 py-5 text-[18px] leading-[1.72] text-[var(--tone-copy)]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.78), rgba(249,238,213,0.38))",
                  border: "1px solid var(--tone-rule)",
                }}
              >
                We work differently. We embed closely, shape the product with
                the business, and stay responsible for what actually ships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="wrap">
          <div className="grid gap-14 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <SectionLead
              kicker="How We Work"
              title="We run like a software company because that’s where we come from."
              body="Traditional businesses often have strong operators, strong constraints, and strong domain knowledge. What they usually lack is a product-development system built for fast learning, tight iteration, and high-quality shipping. That’s what we bring."
            />
            <div className="grid gap-3">
              {[
                "Deep discovery to find the real operational pain",
                "End-to-end workflow mapping so the product fits the business",
                "Product design shaped around regulated, operationally complex environments",
                "Hands-on engineering ownership through production",
                "Ongoing iteration after version one",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-5 px-1 py-4"
                  style={{
                    background:
                      index === 2 ? "linear-gradient(90deg, rgba(249,238,213,0.85), rgba(249,238,213,0.18))" : "transparent",
                    borderBottom: index === 4 ? "none" : "1px solid var(--tone-rule)",
                  }}
                >
                  <div className="pt-0.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--tone-muted)]">
                    0{index + 1}
                  </div>
                  <div className="text-[17px] leading-[1.65] text-[var(--tone-ink)]">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="wrap">
          <div className="grid gap-14 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <SectionLead
              kicker="Why Sugo AI"
              title="A serious product partner for serious businesses."
              body="Traditional businesses do not need more software hype. They need better software judgment, stronger execution, and a partner who can stay accountable from the first product decision to production delivery."
            />
            <div className="grid gap-4">
              {[
                "We are not a strategy shop that disappears after the deck.",
                "We are not a dev shop waiting for tickets.",
                "We are a product studio that helps traditional businesses build and ship software to a much higher standard.",
              ].map((statement, index) => (
                <div
                  key={statement}
                  className="px-1 py-4 text-[18px] leading-[1.62] text-[var(--tone-ink)]"
                  style={{
                    background:
                      index === 2 ? "linear-gradient(90deg, rgba(240,243,234,0.92), rgba(240,243,234,0.22))" : "transparent",
                    borderBottom: index === 2 ? "none" : "1px solid var(--tone-rule)",
                  }}
                >
                  {statement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="wrap">
          <div
            className="rounded-[42px] p-8 md:p-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,253,248,1), rgba(245,231,224,0.92) 28%, rgba(249,238,213,0.62) 62%, rgba(240,243,234,0.94))",
              border: "1px solid var(--tone-rule)",
              boxShadow: "0 22px 50px rgba(31,45,41,0.06)",
            }}
          >
            <div className="max-w-[760px]">
              <div className="mb-5 text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--tone-muted)]">
                Start here
              </div>
              <h2
                className="text-[clamp(2.5rem,4vw,4.8rem)] leading-[0.95] tracking-[-0.055em] text-[var(--tone-ink)]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 620 }}
              >
                If the software matters, the product work should too.
              </h2>
              <p className="mt-6 max-w-[640px] text-[19px] leading-[1.72] text-[var(--tone-copy)]">
                Sugo AI helps traditional businesses build internal tools, AI
                agents, and customer products with more rigor, better taste, and
                end-to-end ownership.
              </p>
              <div className="mt-9">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--tone-ink)] px-6 py-3.5 text-[15px] font-semibold text-[var(--tone-surface)] transition-transform duration-200 hover:-translate-y-px"
                >
                  Start a conversation
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pb-10 pt-4">
        <div className="wrap">
          <div className="flex flex-col gap-8 border-t border-[var(--tone-rule)] pt-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[360px]">
              <div
                className="text-[20px] font-semibold tracking-[-0.03em] text-[var(--tone-ink)]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Sugo AI
              </div>
              <p className="mt-3 text-[15px] leading-[1.65] text-[var(--tone-copy)]">
                A product studio for traditional businesses building serious
                software.
              </p>
            </div>
            <div className="grid gap-2 text-[15px] text-[var(--tone-copy)]">
              <Link href="/how-we-work">How we work</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
