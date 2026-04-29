import Link from "next/link";
import { Fade } from "@/components/ui/Fade";

export function Credibility() {
  return (
    <section
      className="py-[80px] max-[767px]:py-[48px]"
      style={{ borderTop: "1px solid var(--color-rule-soft)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 relative">
        <Fade>
          <div className="eyebrow mb-5">Who&rsquo;s behind it</div>
          <h2 className="type-h1">
            A senior practitioner, not a <span className="italic-accent">firm.</span>
          </h2>
        </Fade>

        <Fade>
          <div
            className="card mt-10"
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "24px",
              alignItems: "start",
            }}
          >
            {/* Avatar placeholder */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "var(--r-lg)",
                background: "var(--color-pomodoro-50)",
                color: "var(--color-pomodoro-ink)",
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="7" r="3.5" />
                <path d="M3.5 17.5c0-3.5 2.9-6.5 6.5-6.5s6.5 3 6.5 6.5" />
              </svg>
            </div>

            <div style={{ display: "grid", gap: "10px" }}>
              <div>
                <h3 className="type-serif-heading" style={{ marginBottom: "2px" }}>Marc Anthony Rosa</h3>
                <p className="fig">Founder &middot; 15 years in product &middot; Houston, TX</p>
              </div>
              <p className="type-body">
                Most recently Head of Product at a conversational AI company.
                Currently leading AI product development at a major health-tech
                organization. Sugo AI is his practice{"\u200A—\u200A"}senior
                product thinking paired with hands-on delivery.
              </p>
              <div className="flex items-center gap-6 flex-wrap mt-1">
                <Link className="link-grow" href="/about" style={{ border: "none" }}>
                  More about Marc <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>→</span>
                </Link>
                {/* Writing link — commented out until content is ready
                <Link className="link-grow" href="/writing" style={{ border: "none", color: "var(--color-ink-500)" }}>
                  Read our writing <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>→</span>
                </Link>
                */}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
