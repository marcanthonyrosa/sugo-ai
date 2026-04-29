"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/ui/Wordmark";

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileOpen);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [mobileOpen]);

  const showWriting = process.env.NODE_ENV === "development";

  return (
    <>
      <nav className="nav-bar fixed top-0 left-0 right-0 z-80 flex items-center justify-between px-8 py-5">
        <Wordmark />
        <div className="flex gap-8 max-[767px]:hidden">
          <Link
            className="nav-link-anim"
            href="/how-we-work"
            aria-current={pathname === "/how-we-work" ? "page" : undefined}
          >
            How We Work
          </Link>
          <Link
            className="nav-link-anim"
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            About
          </Link>
          {showWriting && (
            <Link
              className="nav-link-anim"
              href="/writing"
              aria-current={
                pathname.startsWith("/writing") ? "page" : undefined
              }
            >
              Writing
            </Link>
          )}
          <Link
            className="nav-link-anim"
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </div>
        <button
          className="hidden max-[767px]:inline-block font-sans font-medium text-sm bg-transparent p-0 cursor-pointer"
          style={{ color: "var(--color-ink-500)", border: "none" }}
          onClick={() => setMobileOpen(true)}
        >
          Menu
        </button>
      </nav>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-90 flex flex-col pt-24 px-6 pb-10 gap-6"
          style={{ background: "var(--color-surface-1)" }}
        >
          <button
            className="absolute top-6 right-6 font-sans font-medium text-sm bg-transparent cursor-pointer"
            style={{ color: "var(--color-ink-500)", border: "none" }}
            onClick={() => setMobileOpen(false)}
          >
            Close
          </button>
          {[
            { href: "/", label: "Home" },
            { href: "/how-we-work", label: "How We Work" },
            { href: "/about", label: "About" },
            ...(showWriting
              ? [{ href: "/writing", label: "Writing" }]
              : []),
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              className="font-serif font-normal text-[48px] leading-[1.05] p-0 cursor-pointer"
              style={{
                color: "var(--color-ink-900)",
                letterSpacing: "-0.015em",
                border: "none",
              }}
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
