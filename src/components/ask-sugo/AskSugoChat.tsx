"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { askSugo, SEEDS } from "./ask-engine";

interface LogEntry {
  who: "sugo" | "visitor";
  text: string;
  streaming?: boolean;
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
        className="w-full font-mono text-[13px] bg-transparent border-none outline-none py-1.5"
        style={{ color: "var(--color-ink-900)", borderBottom: "1px solid var(--color-rule)" }}
      />
    </form>
  );
}

interface AskSugoChatProps {
  openCal?: () => void;
}

export function AskSugoChat({ openCal }: AskSugoChatProps) {
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
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [log]);

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

  const allSeedsUsed = usedSeeds.size === SEEDS.length;
  const remainingSeeds = SEEDS.filter((s) => !usedSeeds.has(s));

  const avatarStyle = {
    background: "var(--color-pomodoro)",
    color: "var(--color-offwhite)",
    fontVariationSettings: '"opsz" 72, "SOFT" 50',
  };

  return (
    <div
      className="max-w-[520px] flex flex-col overflow-hidden"
      style={{
        background: "var(--color-surface-3)",
        border: "1px solid var(--color-rule-soft)",
        borderRadius: "var(--r-lg)",
        boxShadow: "var(--shadow-lg)",
      }}
      role="region"
      aria-label="Ask Sugo"
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-5 py-[18px]"
        style={{ borderBottom: "1px solid var(--color-rule-soft)", background: "var(--color-surface-3)" }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-medium text-xl shrink-0"
          style={avatarStyle}
          aria-hidden="true"
        >
          S
        </div>
        <div>
          <div className="font-sans font-medium text-[15px]" style={{ color: "var(--color-ink-900)" }}>Sugo AI</div>
          <div className="font-mono text-[10px] tracking-[0.1em] uppercase flex items-center gap-1.5 mt-1" style={{ color: "var(--color-ink-500)" }}>
            <span className="w-[7px] h-[7px] rounded-full inline-block" style={{ background: "var(--color-sage)" }} aria-hidden="true" />
            Online &middot; replies in seconds
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-5 flex flex-col gap-3.5 min-h-60 max-h-[460px] overflow-y-auto" role="log" aria-live="polite" ref={bodyRef}>
        {log.map((t, i) => (
          <div key={i} className={`flex gap-2.5 items-end max-w-[90%] ${t.who === "sugo" ? "self-start" : "self-end flex-row-reverse"}`}>
            {t.who === "sugo" && (
              <div
                className="w-[26px] h-[26px] rounded-full flex items-center justify-center font-serif font-medium text-[13px] shrink-0"
                style={avatarStyle}
                aria-hidden="true"
              >
                S
              </div>
            )}
            <div
              className="font-sans text-[14.5px] leading-[1.5] px-4 py-3 rounded-[14px]"
              style={
                t.who === "sugo"
                  ? { background: "var(--color-surface-2)", border: "1px solid var(--color-rule-soft)", borderBottomLeftRadius: "4px", color: "var(--color-ink-900)" }
                  : { background: "var(--color-navy)", color: "var(--color-offwhite)", borderBottomRightRadius: "4px" }
              }
            >
              {t.text.split(/\n\n+/).map((p, j, arr) => (
                <p key={j} className="[&+p]:mt-2">
                  {p}
                  {t.streaming && j === arr.length - 1 && (
                    <span style={{ color: "var(--color-viola-500)", animation: "caret-blink 900ms steps(2) infinite", marginLeft: "1px", display: "inline-block" }}>▊</span>
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}
        {emailSlot && !emailSent && (
          <div className="flex gap-2.5 items-end max-w-[90%] self-start">
            <div className="w-[26px] h-[26px] rounded-full flex items-center justify-center font-serif font-medium text-[13px] shrink-0" style={avatarStyle} aria-hidden="true">S</div>
            <div className="font-sans text-[14.5px] leading-[1.5] px-4 py-3 rounded-[14px]" style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-rule-soft)", borderBottomLeftRadius: "4px", color: "var(--color-ink-900)" }}>
              <p>Leave an email and I&rsquo;ll reply personally.</p>
              <EmailLine onSent={() => setEmailSent(true)} />
            </div>
          </div>
        )}
        {emailSent && (
          <div className="flex gap-2.5 items-end max-w-[90%] self-start">
            <div className="w-[26px] h-[26px] rounded-full flex items-center justify-center font-serif font-medium text-[13px] shrink-0" style={avatarStyle} aria-hidden="true">S</div>
            <div className="font-sans text-[14.5px] leading-[1.5] px-4 py-3 rounded-[14px]" style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-rule-soft)", borderBottomLeftRadius: "4px", color: "var(--color-ink-900)" }}>
              <p>Thanks &middot; Marc will be in touch.</p>
            </div>
          </div>
        )}
      </div>

      {/* Chips */}
      <div className="px-5 pt-1 pb-3.5 flex flex-wrap gap-2">
        {!allSeedsUsed &&
          remainingSeeds.map((s) => (
            <button key={s} className="chip-pill" onClick={() => run(s, true)} disabled={streaming}>
              {s}
            </button>
          ))}
        {allSeedsUsed && !streaming && (
          <button className="chip-pill" style={{ background: "var(--color-navy)", color: "var(--color-offwhite)", borderColor: "transparent" }} onClick={openCal}>
            I&rsquo;m ready to get in touch →
          </button>
        )}
      </div>

      {/* Input */}
      <form
        className="px-4 pl-5 py-3 flex items-center gap-3"
        style={{ borderTop: "1px solid var(--color-rule-soft)", background: "var(--color-surface-3)" }}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Message Sugo AI…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={streaming}
          aria-label="Message Sugo AI"
          className="flex-1 font-sans text-[14.5px] bg-transparent border-none outline-none py-2"
          style={{ color: "var(--color-ink-900)" }}
        />
        <button
          type="submit"
          className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase bg-transparent border-none cursor-pointer py-1.5 px-1 disabled:cursor-not-allowed"
          style={{ color: streaming || !input.trim() ? "var(--color-ink-300)" : "var(--color-viola-500)" }}
          disabled={streaming || !input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}
