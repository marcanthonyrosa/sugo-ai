import { Footer } from "@/components/layout/Footer";
import { ContactCards } from "./ContactCards";

export default function ContactPage() {
  return (
    <main>
      <section className="py-[100px] pt-[140px] max-[767px]:py-[56px] max-[767px]:pt-[100px]">
        <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6">
          <div className="max-w-[680px]">
            <div className="eyebrow mb-6">Contact</div>
            <h1 className="type-h1">Start a <span className="italic-accent">conversation.</span></h1>
            <p className="type-lead" style={{ marginTop: "16px" }}>Two ways. Either works.</p>
          </div>
          <ContactCards />
          <p className="type-mono-meta mt-8">
            Based in Houston, TX &middot; working US-wide.
            <br />
            sugoai.com &middot; marc@sugoai.com
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
