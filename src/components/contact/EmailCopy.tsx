"use client";

import { useRef, useState } from "react";

const EMAIL = "marc@sugoai.com";

export function EmailCopy() {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const announce = (message: string) => {
    setStatus(message);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 2600);
  };

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
        announce(`Copied — ${EMAIL} is on your clipboard.`);
        return;
      }
      throw new Error("clipboard unavailable");
    } catch {
      announce(`Copy didn’t work — the address is ${EMAIL}.`);
    }
  };

  return (
    <div className="convo__email">
      <p className="convo__email-kicker">The direct line</p>
      <button
        className="email-copy"
        type="button"
        onClick={copy}
        aria-label={`Copy ${EMAIL} to your clipboard`}
      >
        <span className="email-copy__addr">{EMAIL}</span>
        <span className="email-copy__hint" aria-hidden="true">
          Click to copy
        </span>
      </button>
      <p className="email-copy__status" role="status" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
