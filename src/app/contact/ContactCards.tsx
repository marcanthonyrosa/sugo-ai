"use client";

import { openCal } from "@/components/ui/CalModal";

export function ContactCards() {

  return (
    <>
      <div className="grid grid-cols-2 gap-8 mt-14 max-[1023px]:grid-cols-1">
        <div className="bg-cream border border-rule p-12 flex flex-col gap-4">
          <p className="type-mono-label">30 min · Google Meet</p>
          <h3 className="type-serif-heading" style={{ fontSize: "34px" }}>Pick a slot.</h3>
          <p className="type-body">
            A short intro call{"\u200A—\u200A"}no deck, no agenda. Just a
            conversation.
          </p>
          <div className="mt-3">
            <button className="btn-slide" onClick={openCal}>
              Book 30 minutes →
            </button>
          </div>
        </div>
        <div className="bg-cream border border-rule p-12 flex flex-col gap-4">
          <p className="type-mono-label">Direct</p>
          <h3 className="type-serif-heading" style={{ fontSize: "34px" }}>Email Marc directly.</h3>
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
    </>
  );
}
