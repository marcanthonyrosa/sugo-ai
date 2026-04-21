import Link from "next/link";

export function Wordmark() {
  return (
    <Link className="inline-flex items-baseline gap-1 no-underline" href="/">
      <span className="wordmark-sugo-text font-serif font-medium text-2xl leading-none -tracking-[0.01em] text-ink" style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50' }}>
        Sugo
      </span>
      <span className="wordmark-ai-anim">AI</span>
    </Link>
  );
}
