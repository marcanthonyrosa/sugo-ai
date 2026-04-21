import { Hero } from "@/components/home/Hero";
import { ProblemChapter } from "@/components/home/ProblemChapter";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HowWeWork } from "@/components/home/HowWeWork";
import { Engagements } from "@/components/home/Engagements";
import { WhySugo } from "@/components/home/WhySugo";
import { ProofChapter } from "@/components/home/ProofChapter";
import { GetStarted } from "@/components/home/GetStarted";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemChapter />
      <WhatWeDo />
      <HowWeWork />
      <Engagements />
      <WhySugo />
      <ProofChapter />
      <GetStarted />
      <Footer />
    </main>
  );
}
