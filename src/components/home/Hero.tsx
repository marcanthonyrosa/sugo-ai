"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Fade } from "@/components/ui/Fade";
import { openCal } from "@/components/ui/CalModal";
import { AskSugo } from "@/components/ask-sugo/AskSugo";

export function Hero() {
  return (
    <section className="pt-[92px] pb-16 max-[767px]:pt-[72px] max-[767px]:pb-12">
      <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6 relative">
        <div className="grid grid-cols-[minmax(0,55fr)_minmax(0,45fr)] gap-[60px] items-start max-[1023px]:grid-cols-1 max-[1023px]:gap-12">
          <div>
            <SectionLabel n="01">Sugo AI · Est. 2026</SectionLabel>
            <h1 className="type-display">
              Where AI strategy becomes working software.
            </h1>
            <Fade>
              <p className="type-lead mt-10 max-w-[560px]">
                Sugo AI helps mid-to-large enterprises cross the gap between AI
                pilots and production{"\u200A—\u200A"}with agents inside the
                business and AI-native features inside the product.
              </p>
            </Fade>
            <div className="flex items-center gap-7 mt-10 flex-wrap">
              <button className="btn-slide" onClick={openCal}>
                Start a conversation
              </button>
              <a className="link-grow" href="mailto:marc@sugoai.com">
                Or email Marc →
              </a>
            </div>
          </div>
          <div className="pt-[66px] max-[1023px]:pt-0">
            <AskSugo variant="chat" openCal={openCal} />
          </div>
        </div>
      </div>
    </section>
  );
}
