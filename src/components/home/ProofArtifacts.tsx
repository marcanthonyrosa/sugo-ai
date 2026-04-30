import { Fade } from "@/components/ui/Fade";

const ARTIFACTS = [
  {
    title: "Opportunity map",
    label: "Audit output",
    description:
      "A ranked shortlist of AI opportunities scored by ROI, feasibility, workflow fit, and time-to-value.",
    bullets: ["Decision memo", "Prioritized roadmap", "Build recommendation"],
  },
  {
    title: "Workflow blueprint",
    label: "Build planning",
    description:
      "A delivery-ready map of the user flow, integrations, model touchpoints, risks, and success metrics.",
    bullets: ["System flow", "Prompt boundaries", "Measurement plan"],
  },
  {
    title: "Production handoff",
    label: "What ships",
    description:
      "The software itself, plus documentation your internal team can operate, extend, and improve without guesswork.",
    bullets: ["Working software", "Team handoff", "Launch checklist"],
  },
];

export function ProofArtifacts() {
  return (
    <section
      className="py-[84px] max-[767px]:py-[52px]"
      style={{ borderTop: "1px solid var(--color-rule-soft)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6">
        <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(320px,0.85fr)] gap-10 items-start max-[900px]:grid-cols-1">
          <Fade>
            <div className="max-w-[560px]">
              <div className="eyebrow mb-5">What you actually get</div>
              <h2 className="type-h1">
                Less theater. More <span className="italic-accent">work product.</span>
              </h2>
            </div>
          </Fade>

        </div>

        <div className="grid grid-cols-3 gap-6 mt-12 max-[960px]:grid-cols-1">
          {ARTIFACTS.map((artifact, index) => (
            <Fade
              key={artifact.title}
              delay={index * 80}
              className="card"
              style={{ display: "grid", gap: "16px", height: "100%" }}
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="chip-pill viola">{artifact.label}</div>
                <div className="fig">Sample deliverable</div>
              </div>
              <h3 className="type-serif-heading">{artifact.title}</h3>
              <p className="type-body" style={{ fontSize: "15px", maxWidth: "unset" }}>
                {artifact.description}
              </p>
              <div className="grid gap-2 pt-2">
                {artifact.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-3"
                    style={{ color: "var(--color-ink-700)", fontSize: "14px" }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "999px",
                        background: "var(--color-viola-500)",
                        flexShrink: 0,
                      }}
                    />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
