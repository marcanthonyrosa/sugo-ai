"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/ui/Wordmark";
import { useNavColor } from "@/contexts/NavColorContext";

export function Nav() {
  const pathname = usePathname();
  const { navColor } = useNavColor();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileOpen);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [mobileOpen]);

  const showWriting = process.env.NODE_ENV === "development";

  const cls = `nav-bar fixed top-0 left-0 right-0 z-80 flex items-center justify-between px-8 py-6 bg-paper/90 backdrop-saturate-[1.05] transition-[background,color] duration-200 ease-in-out ${
    navColor === "clay" ? "on-clay" : navColor === "moss" ? "on-moss" : ""
  }`;

  return (
    <>
      <nav className={cls}>
        <Wordmark />
        <div className="flex gap-9 max-[767px]:hidden">
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
          className="nav-mobile-btn hidden max-[767px]:inline-block font-sans font-medium text-base bg-transparent border-none p-0 cursor-pointer text-ink"
          onClick={() => setMobileOpen(true)}
        >
          Menu
        </button>
      </nav>
      {mobileOpen && (
        <div
          className={`fixed inset-0 z-90 flex flex-col pt-24 px-6 pb-10 gap-6 ${
            navColor === "clay"
              ? "bg-clay"
              : navColor === "moss"
                ? "bg-moss"
                : "bg-paper"
          }`}
        >
          <button
            className="absolute top-6 right-6 font-sans font-medium text-base bg-transparent border-none cursor-pointer text-inherit"
            onClick={() => setMobileOpen(false)}
          >
            Close
          </button>
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            ...(showWriting
              ? [{ href: "/writing", label: "Writing" }]
              : []),
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              className={`font-serif font-normal text-[56px] leading-[1.02] bg-transparent border-none text-left p-0 cursor-pointer ${
                navColor === "clay" || navColor === "moss"
                  ? "text-paper"
                  : "text-ink"
              }`}
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
