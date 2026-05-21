import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-row">
              <Image src="/sugo-logo.png" alt="" width={22} height={22} className="footer__brand-logo" aria-hidden="true" />
              <span className="footer__brand-name">Sugo AI</span>
            </div>
            <p className="footer__tagline">
              Where AI strategy becomes working software.
            </p>
          </div>
          <div>
            <div className="footer__col-label">Practice</div>
            <div className="footer__col-links">
              <Link href="/how-we-work">How we work</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <div className="footer__col-label">Connect</div>
            <div className="footer__col-links">
              <a href="mailto:marc@sugoai.com">marc@sugoai.com</a>
              <span>Houston, TX</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>&copy; 2026 Sugo Product Company, LLC</span>
          <span>Houston, TX &middot; est. 2026</span>
        </div>
      </div>
    </footer>
  );
}
