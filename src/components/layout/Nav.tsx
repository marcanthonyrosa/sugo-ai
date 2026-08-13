"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname === "/") {
    return null;
  }

  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [mobileOpen]);

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <Link className="nav__wordmark" href="/">
          <Image
            src="/sugo-logo.png"
            alt=""
            width={22}
            height={22}
            className="nav__logo"
            aria-hidden="true"
          />
          <span>Sugo AI</span>
        </Link>
        <div className="nav__links">
          <Link
            className="nav__link"
            href="/how-we-work"
            aria-current={pathname === "/how-we-work" ? "page" : undefined}
          >
            How we work
          </Link>
          <Link
            className="nav__link"
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            About
          </Link>
          <Link
            className="nav__link"
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </div>
        <button
          className="nav__menu-toggle"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          Menu
        </button>
      </nav>

      {mobileOpen && (
        <div className="nav-overlay" role="dialog" aria-label="Navigation">
          <button
            className="nav-overlay__close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>
          {[
            { href: "/", label: "Home" },
            { href: "/how-we-work", label: "How we work" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              className="nav-overlay__link"
              href={href}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
