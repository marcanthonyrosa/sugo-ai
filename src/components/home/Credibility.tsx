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

        <Fade>
          <div
            className="card mt-10"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
            }}
          >
            <div>
              <h3 className="type-serif-heading" style={{ marginBottom: "2px" }}>Marc Rosa</h3>
              <p className="fig">Founder &middot; 15 years in product &middot; Houston, TX</p>
            </div>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2.2vw, 26px)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                color: "var(--color-ink-900)",
                maxWidth: "56ch",
              }}
            >
              Most recently Head of Product at a conversational AI company.
              Currently leading AI product development at a major health-tech
              organization.
            </p>
            <p className="type-body" style={{ maxWidth: "56ch" }}>
              Sugo AI is his practice &mdash; senior product thinking paired
              with hands-on delivery. The person helping frame the problem is
              also close to the build. That means fewer handoffs, sharper
              prioritization, and better decisions at the moments that matter.
            </p>
            <div className="flex gap-2 flex-wrap">
              {[
                "AI product leadership",
                "Health-tech",
                "SaaS",
                "0\u21921 product work",
                "Hands-on delivery",
              ].map((item) => (
                <span key={item} className="chip-pill">
                  {item}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2 max-[640px]:grid-cols-1" style={{ maxWidth: "56ch" }}>
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
        </Fade>
      </div>
    </section>
  );
}
