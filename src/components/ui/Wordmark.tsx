import Link from "next/link";

export function Wordmark() {
  return (
    <Link
      className="inline-flex items-center gap-[10px] no-underline"
      href="/"
      style={{ border: "none" }}
    >
      <span className="wordmark-dot" />
      <span className="wordmark-text">Sugo AI</span>
    </Link>
  );
}
