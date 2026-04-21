import { SectionLabel } from "@/components/ui/SectionLabel";
import { Fade } from "@/components/ui/Fade";

export function WhatWeDo() {
  return (
    <section className="py-[140px] max-[1199px]:py-28 max-[767px]:py-[72px]">
      <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6 relative">
        <div className="max-w-[680px]">
          <SectionLabel n="03">What We Do</SectionLabel>
          <h2 className="type-h2">Two places AI earns its keep.</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-16 max-[1023px]:grid-cols-1">
          <Fade className="bg-cream border border-rule p-12 rounded-sm">
            <p className="type-mono-label mb-5">In the business</p>
            <h3 className="type-serif-heading mb-5">Agents and automations inside the work.</h3>
            <p className="type-body">
              We build the quiet back-office software{"\u200A—\u200A"}agents that
              take manual work off the team, integrations that stop the
              copy-paste, dashboards that actually get opened on Monday.
            </p>
          </Fade>
          <Fade delay={80} className="bg-cream border border-rule p-12 rounded-sm">
            <p className="type-mono-label mb-5">In the product</p>
            <h3 className="type-serif-heading mb-5">AI-native features customers feel.</h3>
            <p className="type-body">
              We design and ship AI-native features into what you already sell
              {"\u200A—\u200A"}end-to-end, from discovery through launch, measured
              against real outcomes.
            </p>
          </Fade>
        </div>
        <p className="type-pullout mt-20">
          &ldquo;Operations and product. Most firms pick one.&rdquo;
        </p>
      </div>
    </section>
  );
}
