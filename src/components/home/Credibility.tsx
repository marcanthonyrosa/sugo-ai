import Link from "next/link";
import { Fade } from "@/components/ui/Fade";

export function Credibility() {
  return (
    <section
      className="py-[72px] max-[767px]:py-[48px]"
      style={{ borderTop: "1px solid var(--color-rule-soft)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 relative">
        <Fade>
          <div>
            <div className="eyebrow mb-5">Who&rsquo;s behind it</div>
            <h2 className="type-h1">
              A senior practitioner, not a <span className="italic-accent">firm.</span>
            </h2>
          </div>
        </Fade>

        <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] gap-6 mt-10 items-stretch max-[900px]:grid-cols-1">
          <Fade>
            <div
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "24px",
                alignItems: "start",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "104px",
                  height: "124px",
                  borderRadius: "var(--r-lg)",
                  background: "linear-gradient(180deg, var(--color-pomodoro-50) 0%, var(--color-surface-2) 100%)",
                  color: "var(--color-pomodoro-ink)",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  border: "1px solid var(--color-rule-soft)",
                }}
              >
                <div style={{ textAlign: "center", display: "grid", gap: "6px" }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "34px", lineHeight: 1 }}>
                    MR
                  </div>
                  <div className="fig">Founder card</div>
                </div>
              </div>

              <div style={{ display: "grid", gap: "12px" }}>
                <div>
                  <h3 className="type-serif-heading" style={{ marginBottom: "2px" }}>Marc Rosa</h3>
                  <p className="fig">Founder &middot; 15 years in product &middot; Houston, TX</p>
                </div>
                <p className="type-body">
                  Most recently Head of Product at a conversational AI company.
                  Currently leading AI product development at a major health-tech
                  organization. Sugo AI is his practice{"\u200A—\u200A"}senior
                  product thinking paired with hands-on delivery.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {[
                    "AI product leadership",
                    "Health-tech",
                    "SaaS",
                    "0→1 product work",
                    "Hands-on delivery",
                  ].map((item) => (
                    <span key={item} className="chip-pill">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2 max-[640px]:grid-cols-1">
                  <div>
                    <div className="fig mb-1">Clients bring him in for</div>
                    <p style={{ fontSize: "14px", color: "var(--color-ink-700)", lineHeight: 1.5 }}>
                      Sorting signal from noise, shaping the right first use case,
                      and getting a real build over the line.
                    </p>
                  </div>
                  <div>
                    <div className="fig mb-1">How he tends to work</div>
                    <p style={{ fontSize: "14px", color: "var(--color-ink-700)", lineHeight: 1.5 }}>
                      Small scope, senior attention, fast cycles, clear decisions,
                      and software before ceremony.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 flex-wrap mt-1">
                  <Link className="link-grow" href="/about" style={{ border: "none" }}>
                    More about Marc <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>

          <Fade delay={80}>
            <div className="grid gap-4 h-full" style={{ gridTemplateRows: "1fr 1fr" }}>
              <div className="card" style={{ display: "grid", gap: "10px", alignContent: "start" }}>
                <div className="fig">Why this matters</div>
                <h3 className="type-serif-heading">Senior judgment is the product.</h3>
                <p style={{ fontSize: "15px", color: "var(--color-ink-700)", lineHeight: 1.55 }}>
                  The work moves faster when the person helping frame the problem
                  is also close to the build. That means fewer handoffs, sharper
                  prioritization, and better decisions at the moments that matter.
                </p>
              </div>
              <div className="card" style={{ display: "grid", gap: "10px", alignContent: "start" }}>
                <div className="fig">Operating model</div>
                <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                  <div>
                    <div className="type-serif-heading" style={{ fontSize: "20px" }}>Strategy</div>
                    <p style={{ fontSize: "14px", color: "var(--color-ink-500)", lineHeight: 1.5 }}>
                      Opportunity framing, product judgment, scope control.
                    </p>
                  </div>
                  <div>
                    <div className="type-serif-heading" style={{ fontSize: "20px" }}>Delivery</div>
                    <p style={{ fontSize: "14px", color: "var(--color-ink-500)", lineHeight: 1.5 }}>
                      Flows, requirements, build oversight, launch readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
