import { SectionLabel } from "@/components/ui/SectionLabel";
import { Footer } from "@/components/layout/Footer";
import { ContactCards } from "./ContactCards";

export default function ContactPage() {
  return (
    <main>
      <section className="py-[140px] pt-[180px] max-[1199px]:py-28 max-[767px]:py-[72px]">
        <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6">
          <div className="max-w-[680px] ml-40 max-[1199px]:max-w-[580px] max-[1199px]:ml-20 max-[767px]:max-w-full max-[767px]:ml-0">
            <SectionLabel n="—">Contact — Sugo AI</SectionLabel>
            <h1 className="type-h1">Start a conversation.</h1>
            <p className="type-lead mt-10">Two ways. Either works.</p>
          </div>
          <ContactCards />
          <p className="type-mono-meta mt-10">
            Based in Houston, TX · working US-wide.
            <br />
            sugoai.com · marc@sugoai.com
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
