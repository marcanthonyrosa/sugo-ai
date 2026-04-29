"use client";

import { openCal } from "@/components/ui/CalModal";

export function ContactCards() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-12 max-[900px]:grid-cols-1">
      <div className="card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="eyebrow">30 min &middot; Google Meet</div>
        <h3 className="type-serif-heading">Pick a <span className="italic-accent">slot.</span></h3>
        <p className="type-body">
          A short intro call{"\u200A—\u200A"}no deck, no agenda. Just a
          conversation.
        </p>
        <div className="mt-2">
          <button className="btn-primary" onClick={openCal}>
            Book 30 minutes <span className="arrow">→</span>
          </button>
        </div>
      </div>
      <div className="card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="eyebrow">Direct</div>
        <h3 className="type-serif-heading">Email Marc <span className="italic-accent">directly.</span></h3>
        <p className="type-body">
          marc@sugoai.com. Tell me what you&rsquo;re working on
          {"\u200A—\u200A"}I read these myself and write back personally.
        </p>
        <div className="mt-2">
          <a className="btn-secondary" href="mailto:marc@sugoai.com" style={{ textDecoration: "none" }}>
            marc@sugoai.com <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
