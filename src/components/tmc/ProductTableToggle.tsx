"use client";

import { useState, useRef, useEffect } from "react";

/* ── Types ──────────────────────────────────────────────────────────────── */

type Team = "Innovation" | "Comms/Development";
type Confidence = "High" | "Medium" | "Low";

interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  team: Team;
  basis: string;
  conservative: string;
  conservativeNote: string;
  aggressive: string;
  aggressiveNote: string;
  confidence: Confidence;
  confidenceNote: string;
}

/* ── Data ───────────────────────────────────────────────────────────────── */

const initialProducts: Product[] = [
  {
    id: "01",
    slug: "portfolio-intelligence-platform",
    name: "Portfolio intelligence",
    description:
      "AI-powered surveillance across 500+ portfolio companies, surfacing funding, hiring, and milestone signals to prioritize follow-on conversations and introductions.",
    team: "Innovation",
    basis:
      "Manual tracking of 500+ companies is unsustainable — typically 1–2 junior analysts doing monitoring and reporting.",
    conservative: "$100K",
    conservativeNote: "1 analyst",
    aggressive: "$200K",
    aggressiveNote: "2 analysts",
    confidence: "High",
    confidenceNote: "Tom confirmed",
  },
  {
    id: "02",
    slug: "social-media-marketing-automation",
    name: "Social media & marketing",
    description:
      "Transforms TMC's travel, conferences, and portfolio milestones into a consistently active social presence with automated scheduling and digital board feeds.",
    team: "Comms/Development",
    basis:
      "1 social media coordinator + avoided agency fees. Tatum currently manages digital boards manually.",
    conservative: "$70K",
    conservativeNote: "1 coordinator",
    aggressive: "$150K",
    aggressiveNote: "+ agency fees",
    confidence: "Medium",
    confidenceNote: "Role not confirmed",
  },
  {
    id: "03",
    slug: "strategic-business-intelligence",
    name: "Strategic business intelligence",
    description:
      "Continuous venture partner surveillance, pre-travel briefings, VC identification before conferences, and structured diligence on incoming company decks.",
    team: "Comms/Development",
    basis:
      "2 research analysts explicitly named in stakeholder notes. Houston market: $120–150K each.",
    conservative: "$240K",
    conservativeNote: "2 × $120K",
    aggressive: "$300K",
    aggressiveNote: "2 × $150K",
    confidence: "High",
    confidenceNote: "Named in notes",
  },
  {
    id: "04",
    slug: "program-operations-diligence-automation",
    name: "Program ops & diligence",
    description:
      "Automates contracting, CRM, scheduling, and reporting across 6–9 month accelerator programs, plus competitive landscape research and technology transfer monitoring.",
    team: "Innovation",
    basis:
      "~50% of Megan's coordination time freed across 6–9 month programs. Not a full headcount replacement.",
    conservative: "$50K",
    conservativeNote: "0.5 FTE freed",
    aggressive: "$100K",
    aggressiveNote: "Coord. hire avoided",
    confidence: "Medium",
    confidenceNote: "Efficiency gain",
  },
  {
    id: "05",
    slug: "eir-talent-pipeline",
    name: "EIR talent pipeline",
    description:
      "AI agent that continuously identifies seasoned med-device and therapeutics executives for TMC's EIR program and Venture Studio model at T Labs.",
    team: "Innovation",
    basis:
      "Replaces retained executive search fees ($40–80K per placement) and an ongoing recruiter or scout role.",
    conservative: "$40K",
    conservativeNote: "1 search fee/yr",
    aggressive: "$120K",
    aggressiveNote: "Recruiter avoided",
    confidence: "Low",
    confidenceNote: "Exploratory product",
  },
  {
    id: "06",
    slug: "philanthropic-investment-intelligence",
    name: "Philanthropic intelligence",
    description:
      "Tracks Houston's philanthropic community, surfacing giving cycles and positioning TMC for Program Related Investments with foundations like Brown and Kinder.",
    team: "Comms/Development",
    basis:
      "Development research and foundation tracking typically done by a development associate or outsourced research firm.",
    conservative: "$50K",
    conservativeNote: "0.5 dev assoc.",
    aggressive: "$90K",
    aggressiveNote: "Full research role",
    confidence: "Low",
    confidenceNote: "No role confirmed",
  },
];

/* ── Style maps ─────────────────────────────────────────────────────────── */

const teamStyles: Record<Team, { background: string; color: string }> = {
  Innovation: { background: "var(--color-basil-50)", color: "var(--color-basil-ink)" },
  "Comms/Development": { background: "var(--color-viola-50)", color: "var(--color-viola-900)" },
};

const confidenceStyles: Record<
  Confidence,
  { pill: { background: string; color: string }; value: string }
> = {
  High: {
    pill: { background: "var(--color-basil-50)", color: "var(--color-basil-ink)" },
    value: "var(--color-basil-ink)",
  },
  Medium: {
    pill: { background: "var(--color-saffron-50)", color: "#854F0B" },
    value: "#854F0B",
  },
  Low: {
    pill: { background: "var(--color-pomodoro-50)", color: "var(--color-pomodoro-ink)" },
    value: "var(--color-pomodoro-ink)",
  },
};

const teamLegend: Record<Team, string> = {
  Innovation: "TMC Innovation + Venture Fund",
  "Comms/Development": "Communications + Development",
};

/* ── Component ──────────────────────────────────────────────────────────── */

export function ProductTableToggle() {
  const [mode, setMode] = useState<"overview" | "headcount">("headcount");
  const [rows, setRows] = useState<Product[]>(initialProducts);
  const dragIndex = useRef<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    dragIndex.current = index;
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
    if (dragIndex.current === null || dragIndex.current === index) return;
    const updated = [...rows];
    const [moved] = updated.splice(dragIndex.current, 1);
    updated.splice(index, 0, moved);
    dragIndex.current = index;
    setRows(updated);
  };

  const handleDragEnd = () => {
    dragIndex.current = null;
    setDragOverIndex(null);
    setRows((prev) =>
      prev.map((r, i) => ({
        ...r,
        id: String(i + 1).padStart(2, "0"),
      }))
    );
  };

  const getTeamStyle = (team: Team) => teamStyles[team];
  const getConfStyle = (conf: Confidence) => confidenceStyles[conf];

  return (
    <div style={{ marginBottom: "48px" }}>
      <style>{`
        @media (max-width: 640px) {
          .ptt-drag-col { display: none !important; }
        }
      `}</style>

      {/* Toggle bar */}
      <div
        style={{
          display: "inline-flex",
          border: "1px solid var(--color-rule)",
          borderRadius: "var(--r-pill)",
          overflow: "hidden",
        }}
      >
        {(["headcount", "overview"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              padding: "6px 20px",
              fontSize: "13px",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              transition: "background 160ms, color 160ms",
              borderRadius: "var(--r-pill)",
              background:
                mode === m ? "var(--color-navy)" : "transparent",
              color:
                mode === m ? "var(--color-offwhite)" : "var(--color-ink-500)",
            }}
          >
            {m === "overview" ? "Overview" : "ROI"}
          </button>
        ))}
      </div>

      {/* Table wrapper */}
      <div style={{ overflowX: "auto", marginTop: "20px" }}>
        <table
          style={{
            width: "100%",
            minWidth: "560px",
            borderCollapse: "collapse",
            fontSize: "13px",
          }}
        >
          <colgroup>
            <col style={{ width: "28px" }} />
            <col style={{ width: "28px" }} />
            <col style={{ width: "160px" }} />
            {mode === "overview" ? (
              <>
                <col />
                <col style={{ width: "130px" }} />
              </>
            ) : (
              <>
                <col />
                <col style={{ width: "96px" }} />
                <col style={{ width: "96px" }} />
                <col style={{ width: "96px" }} />
              </>
            )}
          </colgroup>

          <thead>
            <tr style={{ borderBottom: "1px solid var(--color-rule)" }}>
              <th className="ptt-drag-col" style={thStyle} />
              <th style={thStyle}>#</th>
              <th style={{ ...thStyle, textAlign: "left" }}>Product</th>
              {mode === "overview" ? (
                <>
                  <th style={{ ...thStyle, textAlign: "left" }}>Description</th>
                  <th style={{ ...thStyle, textAlign: "left" }}>Team</th>
                </>
              ) : (
                <>
                  <th style={{ ...thStyle, textAlign: "left" }}>Basis</th>
                  <th style={{ ...thStyle, textAlign: "left" }}>Conservative</th>
                  <th style={{ ...thStyle, textAlign: "left" }}>Aggressive</th>
                  <th style={{ ...thStyle, textAlign: "left" }}>Confidence</th>
                </>
              )}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.id + row.name}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                style={{
                  borderBottom: "1px solid var(--color-rule-soft)",
                  opacity:
                    dragIndex.current === index && dragOverIndex !== null
                      ? 0.4
                      : 1,
                  background:
                    dragOverIndex === index
                      ? "var(--color-viola-50)"
                      : "transparent",
                  transition: "background 120ms ease",
                }}
              >
                <td
                  className="ptt-drag-col"
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  style={{ ...tdStyle, cursor: "grab" }}
                >
                  <GripIcon />
                </td>

                <td
                  style={{
                    ...tdStyle,
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--color-ink-300)",
                    textAlign: "center",
                  }}
                >
                  {row.id}
                </td>

                <td
                  style={{
                    ...tdStyle,
                    fontWeight: 500,
                    color: "var(--color-ink-900)",
                  }}
                >
                  <a
                    href={`#project-${row.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelectorAll<HTMLDetailsElement>(".tmc-deep-dive-toggle")
                        .forEach((el) => {
                          el.open = false;
                        });
                      const target = document.getElementById(`project-${row.slug}`);
                      if (target instanceof HTMLDetailsElement) {
                        target.open = true;
                      }
                      target?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      borderBottom: "1px dashed var(--color-rule-strong)",
                      paddingBottom: "1px",
                      cursor: "pointer",
                    }}
                  >
                    {row.name}
                  </a>
                </td>

                {mode === "overview" ? (
                  <>
                    <td style={{ ...tdStyle, color: "var(--color-ink-500)" }}>
                      {row.description}
                    </td>
                    <td style={tdStyle}>
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "11px",
                          fontWeight: 500,
                          padding: "2px 8px",
                          borderRadius: "var(--r-pill)",
                          whiteSpace: "nowrap",
                          ...getTeamStyle(row.team),
                        }}
                      >
                        {row.team}
                      </span>
                    </td>
                  </>
                ) : (
                  <>
                    <td style={{ ...tdStyle, color: "var(--color-ink-500)" }}>
                      {row.basis}
                    </td>
                    <td style={tdStyle}>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "14px",
                          color: getConfStyle(row.confidence).value,
                        }}
                      >
                        {row.conservative}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "var(--color-ink-300)",
                          marginTop: "2px",
                        }}
                      >
                        {row.conservativeNote}
                      </div>
                    </td>
                    <td style={tdStyle}>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "14px",
                          color: getConfStyle(row.confidence).value,
                        }}
                      >
                        {row.aggressive}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "var(--color-ink-300)",
                          marginTop: "2px",
                        }}
                      >
                        {row.aggressiveNote}
                      </div>
                    </td>
                    <td style={tdStyle}>
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "11px",
                          fontWeight: 500,
                          padding: "2px 8px",
                          borderRadius: "var(--r-pill)",
                          whiteSpace: "nowrap",
                          ...getConfStyle(row.confidence).pill,
                        }}
                      >
                        {row.confidence}
                      </span>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "var(--color-ink-300)",
                          marginTop: "2px",
                        }}
                      >
                        {row.confidenceNote}
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr
              style={{
                background: "var(--color-surface-2)",
                borderTop: "1px solid var(--color-rule)",
              }}
            >
              <td className="ptt-drag-col" style={tdStyle} />
              <td style={tdStyle} />
              <td
                style={{
                  ...tdStyle,
                  fontWeight: 600,
                  color: "var(--color-ink-900)",
                }}
              >
                Total
              </td>
              {mode === "overview" ? (
                <>
                  <td style={tdStyle} />
                  <td style={tdStyle} />
                </>
              ) : (
                <>
                  <td
                    style={{
                      ...tdStyle,
                      fontSize: "12px",
                      color: "var(--color-ink-300)",
                    }}
                  >
                    Sum of all six products
                  </td>
                  <td
                    style={{
                      ...tdStyle,
                      fontWeight: 600,
                      fontSize: "15px",
                      color: "var(--color-ink-900)",
                    }}
                  >
                    $550K
                  </td>
                  <td
                    style={{
                      ...tdStyle,
                      fontWeight: 600,
                      fontSize: "15px",
                      color: "var(--color-ink-900)",
                    }}
                  >
                    $960K
                  </td>
                  <td
                    style={{
                      ...tdStyle,
                      fontSize: "12px",
                      color: "var(--color-ink-300)",
                    }}
                  >
                    Solid core: $340–500K
                  </td>
                </>
              )}
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "12px",
          fontSize: "11px",
          color: "var(--color-ink-300)",
          flexWrap: "wrap",
        }}
      >
        {mode === "overview"
          ? (Object.keys(teamLegend) as Team[]).map((team) => (
              <div
                key={team}
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: getTeamStyle(team).background,
                    border: `1px solid ${getTeamStyle(team).color}`,
                  }}
                />
                {teamLegend[team]}
              </div>
            ))
          : (["High", "Medium", "Low"] as Confidence[]).map((c) => (
              <div
                key={c}
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: getConfStyle(c).pill.background,
                    border: `1px solid ${getConfStyle(c).pill.color}`,
                  }}
                />
                {c} confidence
              </div>
            ))}
      </div>

      {/* Verdict callout (headcount mode only) */}
      {mode === "headcount" && (
        <div className="callout-viola" style={{ marginTop: "20px" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--color-ink-900)",
              marginBottom: "4px",
            }}
          >
            The defensible number in the room
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "var(--color-ink-500)",
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            The math lands at{" "}
            <strong style={{ color: "var(--color-ink-900)" }}>$550K–$960K</strong>{" "}
            with honest assumptions. The solid core — Strategic BI and Portfolio
            Intelligence — is{" "}
            <strong style={{ color: "var(--color-ink-900)" }}>$340–500K</strong> and
            fully auditable. Lead with that; let the audience extrapolate upward.
          </p>
        </div>
      )}
    </div>
  );
}

/* ── Shared styles ──────────────────────────────────────────────────────── */

const thStyle: React.CSSProperties = {
  padding: "8px 8px",
  fontSize: "11px",
  fontWeight: 500,
  color: "var(--color-ink-300)",
  textAlign: "center",
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

const tdStyle: React.CSSProperties = {
  padding: "10px 8px",
  verticalAlign: "top",
  lineHeight: 1.45,
};

/* ── Grip icon (2×3 dot grid) ───────────────────────────────────────────── */

function GripIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor"
      style={{ color: "var(--color-ink-300)", display: "block", margin: "0 auto" }}
    >
      <circle cx="5" cy="2" r="1.2" />
      <circle cx="9" cy="2" r="1.2" />
      <circle cx="5" cy="7" r="1.2" />
      <circle cx="9" cy="7" r="1.2" />
      <circle cx="5" cy="12" r="1.2" />
      <circle cx="9" cy="12" r="1.2" />
    </svg>
  );
}
