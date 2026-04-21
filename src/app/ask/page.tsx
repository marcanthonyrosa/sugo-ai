import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { AskPageClient } from "./AskPageClient";

export default function AskPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "180px" }}>
        <div className="wrap">
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
