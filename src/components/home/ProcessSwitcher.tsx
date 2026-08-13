"use client";

import { useRef, useState } from "react";

type Stage = {
  num: string;
  tab: string;
  title: string;
  body: string;
  tickets: [string, string, string];
};

const STAGES: Stage[] = [
  {
    num: "01",
    tab: "Discovery",
    title: "Discovery",
    body: "Deep discovery to find the real operational pain. We start inside the work, not in a slide deck — sitting with the operators who live the process, tracing where time and money actually leak, and naming the constraint that matters.",
    tickets: [
      "A named problem worth building for",
      "A clear picture of how the work moves today",
      "A scoped first release with a reason to exist",
    ],
  },
  {
    num: "02",
    tab: "Workflow mapping",
    title: "Workflow mapping",
    body: "End-to-end workflow mapping so the product fits the business. Software fails in the seams — handoffs, exceptions, approvals, the spreadsheet nobody admits to. We map the full path from intake to done before we design a single screen.",
    tickets: [
      "An end-to-end map of the workflow, seams included",
      "The exception cases named up front",
      "A plan for the systems the product must talk to",
    ],
  },
  {
    num: "03",
    tab: "Product design",
    title: "Product design",
    body: "Product design shaped around regulated, operationally complex environments. We design for the people who will use the product every day — clear states, honest edge cases, accessibility from the start. Compliance and audit needs are design inputs, not afterthoughts.",
    tickets: [
      "Working prototypes tested with the people who’ll use them",
      "Interfaces the team can actually run the business on",
      "Accessibility built in, not bolted on",
    ],
  },
  {
    num: "04",
    tab: "Engineering",
    title: "Engineering through production",
    body: "Hands-on engineering ownership until it’s live. We write the code, integrate the systems, and carry the product through security review, data migration, and rollout — accountable until it is standing up in the real world.",
    tickets: [
      "Production-grade code, shipped",
      "Integration with the systems you already run",
      "A rollout your teams can actually follow",
    ],
  },
  {
    num: "05",
    tab: "Iteration",
    title: "Iteration",
    body: "Ongoing iteration after version one. Launch is the beginning of the learning, not the end of the engagement — we watch how the product is used, fix what the real world reveals, and keep improving what matters.",
    tickets: [
      "Improvements driven by real usage, not opinions",
      "A steady cadence of releases",
      "A product that keeps earning its place",
    ],
  },
];

export function ProcessSwitcher() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const select = (index: number, moveFocus: boolean) => {
    setSelected(index);
    if (moveFocus) tabRefs.current[index]?.focus({ preventScroll: true });
  };

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight")
      next = (index + 1) % STAGES.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft")
      next = (index - 1 + STAGES.length) % STAGES.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = STAGES.length - 1;
    if (next !== null) {
      e.preventDefault();
      select(next, true);
    }
  };

  return (
    <div className="proc">
      <div
        className="proc__tabs"
        role="tablist"
        aria-label="How we work — the five stages"
      >
        {STAGES.map((s, i) => (
          <button
            key={s.num}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            className="proc__tab"
            role="tab"
            id={`tab-${i + 1}`}
            aria-selected={i === selected}
            aria-controls={`stage-${i + 1}`}
            tabIndex={i === selected ? 0 : -1}
            onClick={() => select(i, false)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            <span className="proc__num">{s.num}</span>
            <span className="proc__name">{s.tab}</span>
          </button>
        ))}
      </div>
      <div className="proc__view">
        {STAGES.map((s, i) => (
          <div
            key={s.num}
            className={`proc__panel${i === selected ? " is-active" : ""}`}
            role="tabpanel"
            id={`stage-${i + 1}`}
            aria-labelledby={`tab-${i + 1}`}
            tabIndex={0}
          >
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <p className="proc__label">What you get</p>
            <ul className="proc__tickets">
              {s.tickets.map((t) => (
                <li key={t} className="ticket">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
