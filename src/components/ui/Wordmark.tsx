import Image from "next/image";
import Link from "next/link";

export function Wordmark() {
  return (
    <Link
      className="inline-flex items-center gap-[10px] no-underline"
      href="/"
      style={{ border: "none" }}
    >
      <Image
        src="/sugo-logo.png"
        alt="Sugo logo"
        width={28}
        height={28}
        className="wordmark-dot"
      />
      <span className="wordmark-text">Sugo AI</span>
    </Link>
  );
}
