import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { AskPageClient } from "./AskPageClient";

export default function AskPage() {
  return (
    <main>
      <section className="py-[100px] pt-[140px] max-[767px]:py-[56px] max-[767px]:pt-[100px]">
        <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6">
          <div style={{ maxWidth: "520px", margin: "0 auto" }}>
            <Suspense fallback={null}>
              <AskPageClient />
            </Suspense>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
