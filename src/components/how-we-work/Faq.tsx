"use client";

import { useState } from "react";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "How long until something ships?",
    a: "Sooner than most teams expect, if the problem is well chosen and the path to production is clear. We do not promise a fixed timeline before we understand the workflow, the constraints, and what “shipped” means in your environment.",
  },
  {
    q: "Who actually does the work?",
    a: "The people who shape the work are the people doing the work. There is no sales handoff, no strategy layer disappearing after discovery, and no separate implementation team learning the problem from a document.",
  },
  {
    q: "How do you handle regulated data?",
    a: "By treating it as a product constraint, not a footnote. We design and build with the assumption that data handling, approvals, access, and auditability are part of the work from day one.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the shape of the problem, the number of systems involved, and how much of the path to production already exists. We will tell you plainly what looks contained, what looks larger, and where the uncertainty is.",
  },
  {
    q: "What happens after version one?",
    a: "We look at what changed once people started using it. Sometimes that means tightening the first version. Sometimes it means extending the product into the next workflow, decision, or user group.",
  },
];

function Chevron() {
  return (
    <svg
      className="faq__chev"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        d="M3 6 L8 11 L13 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="faq__list">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="faq__item">
            <h3>
              <button
                className="faq__trigger"
                aria-expanded={isOpen}
                aria-controls={`faq-p${i + 1}`}
                id={`faq-t${i + 1}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.q}
                <Chevron />
              </button>
            </h3>
            <div
              className={`faq__panel${isOpen ? " is-open" : ""}`}
              id={`faq-p${i + 1}`}
              role="region"
              aria-labelledby={`faq-t${i + 1}`}
            >
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
