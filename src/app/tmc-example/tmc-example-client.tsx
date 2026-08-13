"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Database,
  Layers,
  Monitor,
  Mail,
  FileText,
  ExternalLink,
  MonitorPlay,
} from "lucide-react";
import { Fade } from "@/components/ui/Fade";
import { SectionLabel } from "@/components/ui/SectionLabel";

/* ── Data ──────────────────────────────────────────────────────────────── */

const stats = [
  { label: "Companies Tracked", value: "450+" },
  { label: "Total Funding Raised", value: "$5.2B" },
  { label: "Data Sources", value: "4" },
  { label: "AI Classification", value: "Real-time" },
];

const surfaces = [
  {
    icon: Monitor,
    title: "Internal Dashboard",
    desc: "Real-time portfolio intelligence for TMC leadership — funding signals, company health scores, and AI-classified news.",
  },
  {
    icon: Layers,
    title: "Public Marketing Feed",
    desc: "Curated, positive-signal company activity feed for TMC\u2019s website and digital boards throughout the campus.",
  },
  {
    icon: Mail,
    title: "Email Digest",
    desc: "Weekly stakeholder briefings with portfolio highlights, new funding rounds, and emerging trends.",
  },
];

const archImages = [
  {
    src: "/tmc-example/arch-02-enrichment-pipeline.png",
    caption:
      "Nightly Enrichment Pipeline — Data ingestion, AI classification, scoring",
  },
  {
    src: "/tmc-example/arch-03-database-erd.png",
    caption: "Database ERD — Companies, signals, users, preferences",
  },
];

type Tab = "prototype" | "product" | "architecture";

const TABS: { value: Tab; label: string; icon: React.ElementType }[] = [
  { value: "prototype", label: "Prototype", icon: MonitorPlay },
  { value: "product", label: "Product", icon: FileText },
  { value: "architecture", label: "Architecture", icon: Database },
];

/* ── Component ─────────────────────────────────────────────────────────── */

export function TmcExampleClient() {
  const [activeTab, setActiveTab] = useState<Tab>("prototype");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .tmc-ex-stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .tmc-ex-surfaces-grid { grid-template-columns: 1fr !important; }
          .tmc-ex-users-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Lightbox ──────────────────────────────────────────────────── */}
      {lightboxImg && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged diagram"
          onClick={() => setLightboxImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            background: "rgba(17, 34, 64, 0.88)",
            cursor: "zoom-out",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxImg}
            alt=""
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              borderRadius: "var(--r-lg)",
              boxShadow: "var(--shadow-lg)",
            }}
          />
        </div>
      )}

      {/* ── Deep Dive Section ─────────────────────────────────────────── */}
      <section
        id="deep-dive"
        className="pt-[140px] pb-16 max-[767px]:pt-[100px] max-[767px]:pb-8"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--color-surface-2)" }}
        />

        <div className="max-w-[860px] mx-auto px-8 max-[1024px]:px-6 relative">
          <Fade>
            <SectionLabel n="01">Deep dive</SectionLabel>
          </Fade>
          <Fade delay={40}>
            <h1 className="type-h1" style={{ margin: "0 0 12px" }}>
              Portfolio <span className="italic-accent">intelligence</span> for TMC leadership.
            </h1>
          </Fade>
          <Fade delay={80}>
            <p
              className="type-lead"
              style={{ margin: "0 0 40px", maxWidth: "580px" }}
            >
              A portfolio intelligence platform that transforms scattered data
              into actionable insights for TMC leadership.
            </p>
          </Fade>

          {/* Stats */}
          <Fade delay={100}>
            <div
              className="tmc-ex-stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "10px",
                marginBottom: "40px",
              }}
            >
              {stats.map((s) => (
                <div key={s.label} className="card" style={{ padding: "16px 18px" }}>
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "var(--color-ink-900)",
                      lineHeight: 1.1,
                      marginBottom: "6px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--color-ink-300)",
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Fade>

          {/* Tabs */}
          <Fade delay={120}>
            <div
              role="tablist"
              aria-label="Deep dive sections"
              style={{
                display: "flex",
                gap: "4px",
                padding: "4px",
                borderRadius: "var(--r-lg)",
                background: "var(--color-surface-3)",
                border: "1px solid var(--color-rule-soft)",
                marginBottom: "24px",
                flexWrap: "wrap",
              }}
            >
              {TABS.map(({ value, label, icon: Icon }) => {
                const isActive = activeTab === value;
                return (
                  <button
                    key={value}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(value)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 16px",
                      borderRadius: "var(--r-md)",
                      border: "none",
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      background: isActive ? "var(--color-navy)" : "transparent",
                      color: isActive ? "var(--color-offwhite)" : "var(--color-ink-300)",
                      cursor: "pointer",
                      transition: "background 160ms ease, color 160ms ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Icon size={14} strokeWidth={1.75} />
                    {label}
                  </button>
                );
              })}
            </div>
          </Fade>

          {/* ── Prototype Tab ─────────────────────────────────────────── */}
          {activeTab === "prototype" && (
            <Fade>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: "1 1 320px" }}>
                    <h3
                      className="type-h2"
                      style={{ margin: "0 0 6px" }}
                    >
                      Working Figma prototype.
                    </h3>
                    <p className="type-body" style={{ margin: 0 }}>
                      Click through the interactive prototype below — it
                      demonstrates the dashboard, company detail views, and signal
                      feeds.
                    </p>
                  </div>
                  <a
                    href="https://fixed-dawn-29068691.figma.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ flexShrink: 0 }}
                  >
                    <ExternalLink size={14} strokeWidth={1.75} />
                    Open in Figma
                  </a>
                </div>
                <div
                  className="card"
                  style={{
                    overflow: "hidden",
                    padding: 0,
                  }}
                >
                  <iframe
                    src="https://fixed-dawn-29068691.figma.site"
                    title="TMC Intelligence Prototype"
                    allowFullScreen
                    style={{
                      width: "100%",
                      height: 700,
                      border: "none",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </Fade>
          )}

          {/* ── Product Tab ───────────────────────────────────────────── */}
          {activeTab === "product" && (
            <Fade>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "40px" }}
              >
                {/* The problem */}
                <div>
                  <h3 className="type-h2" style={{ margin: "0 0 12px" }}>
                    The <span className="italic-accent">problem.</span>
                  </h3>
                  <p className="type-body" style={{ lineHeight: 1.75, margin: 0 }}>
                    TMC tracks 450+ portfolio companies across its Innovation and
                    Venture Fund programs, but company data is scattered across
                    Salesforce, spreadsheets, news feeds, and individual knowledge.
                    Leadership lacks a unified, real-time view of portfolio health
                    and activity.
                  </p>
                </div>

                {/* Three surfaces */}
                <div>
                  <h3 className="type-h2" style={{ margin: "0 0 16px" }}>
                    Three <span className="italic-accent">surfaces.</span>
                  </h3>
                  <div
                    className="tmc-ex-surfaces-grid grid grid-cols-3 gap-3 max-[640px]:grid-cols-1"
                  >
                    {surfaces.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div
                          key={s.title}
                          className="card"
                          style={{
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: "var(--r-md)",
                              background: "var(--color-basil-50)",
                              color: "var(--color-basil-ink)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon size={20} strokeWidth={1.75} />
                          </div>
                          <h4
                            style={{
                              margin: 0,
                              fontSize: "14px",
                              fontWeight: 500,
                              color: "var(--color-ink-900)",
                            }}
                          >
                            {s.title}
                          </h4>
                          <p
                            style={{
                              margin: 0,
                              fontSize: "13px",
                              color: "var(--color-ink-700)",
                              lineHeight: 1.65,
                              fontWeight: 300,
                            }}
                          >
                            {s.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* User segments */}
                <div>
                  <h3 className="type-h2" style={{ margin: "0 0 16px" }}>
                    User <span className="italic-accent">segments.</span>
                  </h3>
                  <div className="tmc-ex-users-grid grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
                    {[
                      {
                        role: "TMC Leadership",
                        need: "High-level portfolio health and fundraising metrics",
                      },
                      {
                        role: "Investment Team",
                        need: "Company-level signals and due diligence data",
                      },
                      {
                        role: "Marketing Team",
                        need: "Curated positive stories for external comms",
                      },
                      {
                        role: "External Stakeholders",
                        need: "Public-facing success metrics and activity",
                      },
                    ].map((u) => (
                      <div key={u.role} className="card" style={{ padding: "16px 18px" }}>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "var(--color-ink-900)",
                            marginBottom: "4px",
                          }}
                        >
                          {u.role}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "var(--color-ink-500)",
                            lineHeight: 1.55,
                            fontWeight: 300,
                          }}
                        >
                          {u.need}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          )}

          {/* ── Architecture Tab ──────────────────────────────────────── */}
          {activeTab === "architecture" && (
            <Fade>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "40px" }}
              >
                <div>
                  <h3 className="type-h2" style={{ margin: "0 0 8px" }}>
                    Interactive system <span className="italic-accent">architecture.</span>
                  </h3>
                  <p
                    className="type-small"
                    style={{ margin: "0 0 16px" }}
                  >
                    Three-layer stack: External APIs &rarr; Supabase backend &rarr;
                    React frontend.
                  </p>
                  <div
                    className="card"
                    style={{ overflow: "hidden", padding: 0 }}
                  >
                    <iframe
                      src="/tmc-example/tmc_system_architecture.html"
                      title="TMC System Architecture"
                      style={{
                        width: "100%",
                        height: 600,
                        border: "none",
                        display: "block",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <p className="type-small" style={{ margin: "0 0 16px" }}>
                    Click any diagram to enlarge.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    {archImages.map((img) => (
                      <figure key={img.src} style={{ margin: 0 }}>
                        <button
                          type="button"
                          onClick={() => setLightboxImg(img.src)}
                          className="card"
                          style={{
                            display: "block",
                            width: "100%",
                            padding: 0,
                            overflow: "hidden",
                            cursor: "zoom-in",
                            textAlign: "left",
                          }}
                        >
                          <Image
                            src={img.src}
                            alt={img.caption}
                            width={1456}
                            height={816}
                            style={{
                              width: "100%",
                              height: "auto",
                              display: "block",
                            }}
                          />
                        </button>
                        <figcaption
                          style={{
                            marginTop: "10px",
                            fontSize: "12px",
                            color: "var(--color-ink-300)",
                            textAlign: "center",
                            lineHeight: 1.5,
                          }}
                        >
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          )}
        </div>
      </section>

      {/* ── Attribution ───────────────────────────────────────────────── */}
      <section
        style={{
          padding: "48px 24px 72px",
          borderTop: "1px solid var(--color-rule-soft)",
        }}
      >
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--color-ink-300)",
          }}
        >
          Prepared by{" "}
          <a
            href="https://marcanthonyrosa.com"
            style={{
              color: "var(--color-sage)",
              textDecoration: "none",
              borderBottom: "none",
            }}
          >
            Marc Anthony Rosa
          </a>
          {" "}&middot; March 2026
        </div>
      </section>

    </main>
  );
}
