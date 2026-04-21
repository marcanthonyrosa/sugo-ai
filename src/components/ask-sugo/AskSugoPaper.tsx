"use client";

import { useState, useCallback } from "react";
import { askSugo, SEEDS } from "./ask-engine";

interface LogEntry {
  who: "sugo" | "visitor";
  text: string;
  streaming?: boolean;
}

function Turn({ turn }: { turn: LogEntry }) {
  const cls = turn.who === "visitor"
    ? "font-serif text-[21px] leading-[1.4] text-ink italic"
    : "turn-arrow font-serif text-[21px] leading-[1.4] text-ink";
  const paras = turn.text.split(/\n\n+/);
  return (
    <div className={cls} style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50' }}>
      {paras.map((p, i) => (
        <p key={i} className="[&+p]:mt-2.5">
          {p}
          {turn.streaming && i === paras.length - 1 && (
            <span className="caret-blink">▊</span>
          )}
        </p>
      ))}
    </div>
  );
}

function EmailLine({ onSent }: { onSent: () => void }) {
  const [v, setV] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (v.includes("@")) onSent();
  };
  return (
    <form onSubmit={submit}>
      <input
        type="email"
        placeholder="you@company.com"
        value={v}
        onChange={(e) => setV(e.target.value)}
        aria-label="Your email"
        className="w-full font-mono text-[13px] bg-transparent border-none outline-none border-b border-rule py-1.5 text-ink"
      />
    </form>
  );
}

export function AskSugoPaper() {
  const [log, setLog] = useState<LogEntry[]>([
    {
      who: "sugo",
      text: "I\u2019m Sugo, a small AI product and consulting firm. I help mid-to-large enterprises cross the gap between AI pilots and production.\n\nPick a question below, or ask your own.",
    },
  ]);
  const [streaming, setStreaming] = useState(false);
  const [usedSeeds, setUsedSeeds] = useState<Set<string>>(new Set());
  const [emailSlot, setEmailSlot] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [input, setInput] = useState("");

  const run = useCallback(
    async (prompt: string, isSeed: boolean) => {
      if (streaming) return;
      setStreaming(true);
      if (isSeed) setUsedSeeds((s) => new Set([...s, prompt]));
      setLog((l) => [
        ...l,
        { who: "visitor", text: prompt },
        { who: "sugo", text: "", streaming: true },
      ]);
      let acc = "";
      try {
        for await (const ch of askSugo(prompt)) {
          acc += ch;
          setLog((l) => {
            const copy = l.slice();
            copy[copy.length - 1] = { who: "sugo", text: acc, streaming: true };
            return copy;
          });
        }
      } finally {
        setLog((l) => {
          const copy = l.slice();
          copy[copy.length - 1] = { who: "sugo", text: acc, streaming: false };
          return copy;
        });
        setStreaming(false);
        if (!isSeed) setEmailSlot(true);
      }
    },
    [streaming],
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = input.trim();
    if (!v || streaming) return;
    setInput("");
    run(v, false);
  };

  const seedsShown = usedSeeds.size === 0 && !streaming;

  return (
    <div className="bg-cream border border-rule rounded-[4px] p-9 max-[767px]:p-7 shadow-[0_6px_28px_rgba(30,27,23,0.10)] relative max-w-[520px]" role="region" aria-label="Ask Sugo">
      <div className="flex justify-between items-baseline gap-4 mb-2.5">
        <span className="type-mono-label">Ask Sugo &middot; v0.1</span>
        <span className="type-mono-meta text-xs">2026 &middot; TX</span>
      </div>
      <div className="h-0.5 w-14 bg-clay mb-6" aria-hidden="true" />
      <div className="flex flex-col gap-6" role="log" aria-live="polite">
        {log.map((t, i) => (
          <Turn key={i} turn={t} />
        ))}
        {seedsShown && (
          <div className="flex flex-col gap-2.5 mt-5">
            {SEEDS.map((s) => (
              <button
                key={s}
                className="seed-btn"
                onClick={() => run(s, true)}
                disabled={streaming}
              >
                — {s}
              </button>
            ))}
          </div>
        )}
      </div>
      <form className="mt-7 flex items-center gap-3 border-t border-rule pt-5" onSubmit={onSubmit}>
        <input
          className="flex-1 font-mono text-[13px] text-ink bg-transparent border-none outline-none py-1.5 tracking-[0.02em] placeholder:text-stone"
          type="text"
          placeholder="Ask anything —"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={streaming}
          aria-label="Ask Sugo a question"
        />
        <button
          type="submit"
          className="font-mono text-xs font-medium tracking-[0.1em] uppercase text-clay bg-transparent border-none cursor-pointer py-1 hover:underline"
          disabled={streaming || !input.trim()}
        >
          Send →
        </button>
      </form>
      {emailSlot && !emailSent && (
        <div className="mt-4 p-4 px-5 bg-paper border border-rule rounded-sm">
          <div className="type-mono-label mb-2">
            Leave an email &middot; Marc will reply
          </div>
          <EmailLine onSent={() => setEmailSent(true)} />
        </div>
      )}
      {emailSent && (
        <div className="mt-4 p-4 px-5 bg-paper border border-rule rounded-sm">
          <div className="type-mono-label">
            Thanks &middot; Marc will be in touch
          </div>
        </div>
      )}
    </div>
  );
}
