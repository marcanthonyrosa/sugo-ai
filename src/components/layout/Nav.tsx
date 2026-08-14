"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/how-we-work", label: "How we work" },
  // { href: "/writing", label: "Writing" }, // Re-enable when essays are written
  { href: "/about", label: "About" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined;

  return (
    <header className="nav">
      <div className="wrap">
        <div className="nav__row">
          <Link className="wordmark" href="/">
            Sugo AI
            <span className="navmark" aria-hidden="true">
              <Image
                src="/brand/sugo-mark-simple-transparent.png"
                alt=""
                width={372}
                height={398}
                priority
              />
            </span>
          </Link>
          <ul className="nav__links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  className="nav__link"
                  href={l.href}
                  aria-current={current(l.href)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="btn btn--primary nav__cta" href="/contact">
                Contact us
              </Link>
            </li>
          </ul>
          <button
            className="btn btn--ghost nav__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="nav-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
        <div className={`nav__drawer${open ? " is-open" : ""}`} id="nav-drawer">
          <div>
            <ul>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    className="nav__link"
                    href={l.href}
                    aria-current={current(l.href)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="btn btn--primary" href="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
