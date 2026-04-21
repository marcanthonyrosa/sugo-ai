// Ask Sugo — two variants: editorial "paper" (ledger) and "chat".
// Clean seam: askSugo(prompt): AsyncIterable<string> is swappable for a real LLM backend.

const CANNED = {
  "What does Sugo actually do?":
`Two things. First: we build agents and automations inside your business — the quiet back-office work that moves the P&L. Second: we build AI-native features inside your product — the kind customers feel. Same senior team, both sides.`,
  "Why do 95% of AI pilots fail?":
`Not the models. The models are extraordinary. Pilots stall because generic tools don\u2019t learn the business, integrations stay shallow, and the internal team is stretched too thin to get new software live. MIT published the finding in August 2025. The 5% who cross over partner with specialists, pick one painful workflow, and launch something real before expanding.`,
  "How fast can you ship something real?":
`A 2\u2013\u20093 week opportunity audit. A 6\u2013\u200912 week back-office agent build. An 8\u2013\u200916 week AI-native product feature. Small team, modern tools, senior by default. We ship working software in weeks, not quarters.`
};

const SEEDS = [
  "What does Sugo actually do?",
  "Why do 95% of AI pilots fail?",
  "How fast can you ship something real?"
];

async function* askSugo(prompt) {
  const canned = CANNED[prompt];
  const body = canned ??
    `Thanks \u2014\u200A${prompt ? `I\u2019ll pass \u201c${prompt}\u201d to Marc and reply personally.` : "I\u2019ll be in touch."}`;
  const charMs = 1000 / 60;
  for (const ch of body) {
    yield ch;
    await new Promise(r => setTimeout(r, charMs));
  }
}

// ----- Shared streaming state -----
function useAskState() {
  const [log, setLog] = React.useState([
    { who: "sugo", text: "I\u2019m Sugo, a small AI product and consulting firm. I help mid-to-large enterprises cross the gap between AI pilots and production.\n\nPick a question below, or ask your own." }
  ]);
  const [streaming, setStreaming] = React.useState(false);
  const [usedSeeds, setUsedSeeds] = React.useState(new Set());
  const [emailSlot, setEmailSlot] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);

  const run = React.useCallback(async (prompt, isSeed) => {
    if (streaming) return;
    setStreaming(true);
    if (isSeed) setUsedSeeds(s => new Set([...s, prompt]));
    setLog(l => [...l, { who: "visitor", text: prompt }, { who: "sugo", text: "", streaming: true }]);
    let acc = "";
    try {
      for await (const ch of askSugo(prompt)) {
        acc += ch;
        setLog(l => {
          const copy = l.slice();
          copy[copy.length - 1] = { who: "sugo", text: acc, streaming: true };
          return copy;
        });
      }
    } finally {
      setLog(l => {
        const copy = l.slice();
        copy[copy.length - 1] = { who: "sugo", text: acc, streaming: false };
        return copy;
      });
      setStreaming(false);
      if (!isSeed) setEmailSlot(true);
    }
  }, [streaming]);

  return { log, streaming, usedSeeds, emailSlot, setEmailSent, emailSent, run };
}

// ----- Paper (editorial ledger) variant -----
function AskSugoPaper() {
  const { log, streaming, usedSeeds, emailSlot, setEmailSent, emailSent, run } = useAskState();
  const [input, setInput] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const v = input.trim();
    if (!v || streaming) return;
    setInput("");
    run(v, false);
  };
  const seedsShown = usedSeeds.size === 0 && !streaming;
  return (
    <div className="ask-sugo" role="region" aria-label="Ask Sugo">
      <div className="ask-sugo-head">
        <span className="mono-label">Ask Sugo &middot; v0.1</span>
        <span className="mono-meta">2026 &middot; TX</span>
      </div>
      <div className="ask-sugo-bar" aria-hidden="true"></div>
      <div className="ask-sugo-log" role="log" aria-live="polite">
        {log.map((t, i) => <Turn key={i} turn={t} />)}
        {seedsShown && (
          <div className="seed-prompts">
            {SEEDS.map(s => (
              <button key={s} className="seed" onClick={() => run(s, true)} disabled={streaming}>
                — {s}
              </button>
            ))}
          </div>
        )}
      </div>
      <form className="ask-input-row" onSubmit={onSubmit}>
        <input className="ask-input" type="text" placeholder="Ask anything —"
               value={input} onChange={e => setInput(e.target.value)}
               disabled={streaming} aria-label="Ask Sugo a question" />
        <button type="submit" className="ask-submit" disabled={streaming || !input.trim()}>Send →</button>
      </form>
      {emailSlot && !emailSent && (
        <div className="ask-email-slot">
          <div className="mono-label">Leave an email &middot; Marc will reply</div>
          <EmailLine onSent={() => setEmailSent(true)} />
        </div>
      )}
      {emailSent && (
        <div className="ask-email-slot"><div className="mono-label">Thanks &middot; Marc will be in touch</div></div>
      )}
    </div>
  );
}

function Turn({ turn }) {
  const { who, text, streaming } = turn;
  const cls = who === "visitor" ? "turn turn-visitor" : "turn turn-sugo";
  const paras = text.split(/\n\n+/);
  return (
    <div className={cls}>
      {paras.map((p, i) => (
        <p key={i}>
          {p}
          {streaming && i === paras.length - 1 && <span className="caret">▊</span>}
        </p>
      ))}
    </div>
  );
}

function EmailLine({ onSent }) {
  const [v, setV] = React.useState("");
  const submit = (e) => {
    e.preventDefault();
    if (v.includes("@")) onSent();
  };
  return (
    <form onSubmit={submit}>
      <input type="email" placeholder="you@company.com"
             value={v} onChange={e => setV(e.target.value)} aria-label="Your email" />
    </form>
  );
}

// ----- Chat (messenger) variant -----
function AskSugoChat({ openCal }) {
  const { log, streaming, usedSeeds, emailSlot, setEmailSent, emailSent, run } = useAskState();
  const [input, setInput] = React.useState("");
  const bodyRef = React.useRef(null);
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [log]);

  const onSubmit = (e) => {
    e.preventDefault();
    const v = input.trim();
    if (!v || streaming) return;
    setInput("");
    run(v, false);
  };

  const allSeedsUsed = usedSeeds.size === SEEDS.length;
  const remainingSeeds = SEEDS.filter(s => !usedSeeds.has(s));

  return (
    <div className="ask-chat" role="region" aria-label="Ask Sugo">
      <div className="ask-chat-head">
        <div className="ask-chat-avatar" aria-hidden="true">S</div>
        <div>
          <div className="ask-chat-name">Sugo AI</div>
          <div className="ask-chat-sub">
            <span className="ask-chat-dot" aria-hidden="true"></span>
            Online &middot; replies in seconds
          </div>
        </div>
      </div>
      <div className="ask-chat-body" role="log" aria-live="polite" ref={bodyRef}>
        {log.map((t, i) => (
          <div key={i} className={`ask-chat-row ${t.who}`}>
            {t.who === "sugo" && <div className="ask-chat-mini" aria-hidden="true">S</div>}
            <div className="ask-chat-bubble">
              {t.text.split(/\n\n+/).map((p, j, arr) => (
                <p key={j}>
                  {p}
                  {t.streaming && j === arr.length - 1 && <span className="caret">▊</span>}
                </p>
              ))}
            </div>
          </div>
        ))}
        {emailSlot && !emailSent && (
          <div className="ask-chat-row sugo">
            <div className="ask-chat-mini" aria-hidden="true">S</div>
            <div className="ask-chat-bubble">
              <p>Leave an email and I&rsquo;ll reply personally.</p>
              <EmailLine onSent={() => setEmailSent(true)} />
            </div>
          </div>
        )}
        {emailSent && (
          <div className="ask-chat-row sugo">
            <div className="ask-chat-mini" aria-hidden="true">S</div>
            <div className="ask-chat-bubble"><p>Thanks &middot; Marc will be in touch.</p></div>
          </div>
        )}
      </div>
      <div className="ask-chat-chips">
        {!allSeedsUsed && remainingSeeds.map(s => (
          <button key={s} className="chip" onClick={() => run(s, true)} disabled={streaming}>
            {s}
          </button>
        ))}
        {allSeedsUsed && !streaming && (
          <button className="chip chip-cta" onClick={openCal}>
            I&rsquo;m ready to get in touch →
          </button>
        )}
      </div>
      <form className="ask-chat-input" onSubmit={onSubmit}>
        <input type="text" placeholder="Message Sugo AI…"
               value={input} onChange={e => setInput(e.target.value)}
               disabled={streaming} aria-label="Message Sugo AI" />
        <button type="submit" className="ask-chat-send" disabled={streaming || !input.trim()}>Send</button>
      </form>
    </div>
  );
}

function AskSugo({ variant, openCal }) {
  if (variant === "chat") return <AskSugoChat openCal={openCal} />;
  return <AskSugoPaper />;
}

window.AskSugo = AskSugo;
window.askSugo = askSugo;
