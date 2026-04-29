import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "var(--color-surface-2)" }}>
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 pt-16 pb-12">
        {/* Top row: brand + nav columns */}
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-16 max-[900px]:grid-cols-2 max-[900px]:gap-10 max-[600px]:grid-cols-1 max-[600px]:gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-[10px] mb-4">
              <span
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  background: "var(--color-pomodoro)",
                  display: "grid",
                  placeItems: "center",
                  boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.35)",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "var(--color-ink-900)" }}>
                Sugo AI
              </span>
            </div>
            <p style={{ fontSize: "14px", color: "var(--color-ink-500)", maxWidth: "28ch", lineHeight: 1.5 }}>
              Where AI strategy becomes working software. A small firm, built slowly.
            </p>
          </div>

          {/* Practice column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "var(--color-ink-500)",
                marginBottom: "14px",
              }}
            >
              Practice
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/how-we-work", label: "How We Work" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: "14px",
                    color: "var(--color-ink-700)",
                    border: "none",
                    transition: "color 160ms",
                  }}
                  className="hover:text-ink-900"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "var(--color-ink-500)",
                marginBottom: "14px",
              }}
            >
              Resources
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                // { href: "/writing", label: "Writing" }, // commented out until content is ready
                { href: "/ask", label: "Ask Sugo" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: "14px",
                    color: "var(--color-ink-700)",
                    border: "none",
                    transition: "color 160ms",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "var(--color-ink-500)",
                marginBottom: "14px",
              }}
            >
              Connect
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:marc@sugoai.com"
                style={{
                  fontSize: "14px",
                  color: "var(--color-ink-700)",
                  border: "none",
                  transition: "color 160ms",
                }}
              >
                marc@sugoai.com
              </a>
              <span style={{ fontSize: "14px", color: "var(--color-ink-500)" }}>
                Houston, TX
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex justify-between items-center gap-6 flex-wrap mt-14 pt-6"
          style={{ borderTop: "1px solid var(--color-rule-soft)" }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-ink-300)", letterSpacing: "0.04em" }}>
            &copy; 2026 Sugo Product Company, LLC
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-ink-300)", letterSpacing: "0.04em" }}>
            Small firm, built slowly.
          </span>
        </div>
      </div>
    </footer>
  );
}
