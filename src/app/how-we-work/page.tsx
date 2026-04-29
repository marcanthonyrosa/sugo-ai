import { ProblemChapter } from "@/components/home/ProblemChapter";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HowWeWork } from "@/components/home/HowWeWork";
import { Engagements } from "@/components/home/Engagements";
import { WhySugo } from "@/components/home/WhySugo";
import { ProofChapter } from "@/components/home/ProofChapter";
import { Footer } from "@/components/layout/Footer";

export default function HowWeWorkPage() {
  return (
    <main>
      <section className="pt-[140px] pb-16 max-[767px]:pt-[100px] max-[767px]:pb-8">
        <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6">
          <div className="max-w-[680px]">
            <div className="eyebrow mb-6">How We Work</div>
            <h1 className="type-h1">
              The full <span className="italic-accent">picture.</span>
            </h1>
            <p className="type-lead" style={{ marginTop: "16px" }}>
              The problem we solve, how we solve it, and what makes this
              practice different from a typical consulting engagement.
            </p>
          </div>
        </div>
      </section>
      <ProblemChapter />
      <WhatWeDo />
      <HowWeWork />
      <Engagements />
      <WhySugo />
      <ProofChapter />
      <Footer />
    </main>
  );
}
