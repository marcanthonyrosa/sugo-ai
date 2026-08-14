import Image from "next/image";
import Link from "next/link";

function MetaRow() {
  return (
    <div className="foot__meta">
      <Link className="wordmark" href="/">
        Sugo AI
      </Link>
      <span className="foot__brandmark" aria-hidden="true">
        <Image src="/brand/sugo-mark-simple-transparent.png" alt="" width={372} height={398} />
      </span>
      <Link href="/how-we-work">How we work</Link>
      {/* <Link href="/writing">Writing</Link> — re-enable when essays are written */}
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <span>&copy; 2026 Sugo Product Company, LLC d/b/a Sugo AI</span>
      <span className="foot__note">
        sugo (n.) — Italian for sauce. The good ones are made slowly, with real
        ingredients.
      </span>
    </div>
  );
}

export function Footer({ variant }: { variant?: "compact" }) {
  if (variant === "compact") {
    return (
      <footer className="foot">
        <div className="wrap">
          <MetaRow />
        </div>
      </footer>
    );
  }

  return (
    <footer className="foot">
      <div className="wrap">
        <p className="foot__statement">
          If the software matters, the product work should too.
        </p>
        <p className="foot__body">
          Sugo AI helps traditional businesses build internal tools,
          AI&nbsp;agents, and customer products with more rigor, better taste,
          and end-to-end ownership.
        </p>
        <div className="foot__actionrow">
          <Link className="btn btn--primary" href="/contact">
            Start a conversation
          </Link>
          <span className="foot__art" aria-hidden="true">
            <Image src="/brand/sugo-mark-simple-transparent.png" alt="" width={372} height={398} />
          </span>
        </div>
        <MetaRow />
      </div>
    </footer>
  );
}
