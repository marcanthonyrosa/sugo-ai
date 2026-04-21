"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CalModal } from "@/components/ui/CalModal";

export function GetStarted() {
  const [cal, setCal] = useState(false);

  return (
    <section className="py-[140px] max-[1199px]:py-28 max-[767px]:py-[72px]">
      <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6 relative">
        <div className="max-w-[680px]">
          <SectionLabel n="08">Get Started</SectionLabel>
          <h1 className="type-h1 mb-5">Start a conversation.</h1>
          <p className="type-lead">Two ways to reach Marc. Either works.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-14 max-[1023px]:grid-cols-1">
          <div className="bg-cream border border-rule p-12 flex flex-col gap-4">
            <p className="type-mono-label">15 min · Calendly</p>
            <h3 className="type-serif-heading">Pick a slot.</h3>
            <p className="type-body">
              A short intro call{"\u200A—\u200A"}no deck, no agenda. Just a
              conversation.
            </p>
            <div className="mt-3">
              <button className="btn-slide" onClick={() => setCal(true)}>
                Book 15 minutes →
              </button>
            </div>
          </div>
          <div className="bg-cream border border-rule p-12 flex flex-col gap-4">
            <p className="type-mono-label">Direct</p>
            <h3 className="type-serif-heading">Email Marc directly.</h3>
            <p className="type-body">
              marc@sugoai.com. Tell me what you&rsquo;re working on
              {"\u200A—\u200A"}I read these myself and write back personally.
            </p>
            <div className="mt-3">
              <a className="link-grow" href="mailto:marc@sugoai.com">
                marc@sugoai.com →
              </a>
            </div>
          </div>
        </div>
        <p className="type-mono-meta mt-10">
          Based in Houston, TX · working US-wide.
        </p>
      </div>
      <CalModal open={cal} onClose={() => setCal(false)} />
    </section>
  );
}
