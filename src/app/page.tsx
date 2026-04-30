import { Hero } from "@/components/home/Hero";
import { StatCallout } from "@/components/home/StatCallout";
import { WhatWeDoCompact } from "@/components/home/WhatWeDoCompact";
import { Credibility } from "@/components/home/Credibility";
import { ProofArtifacts } from "@/components/home/ProofArtifacts";
import { WhySugo } from "@/components/home/WhySugo";
import { GetStarted } from "@/components/home/GetStarted";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatCallout />
      <WhatWeDoCompact />
      <Credibility />
      <ProofArtifacts />
      <WhySugo />
      <GetStarted />
      <Footer />
    </main>
  );
}
