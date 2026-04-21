"use client";

interface CalModalProps {
  open: boolean;
  onClose: () => void;
}

export function CalModal({ open, onClose }: CalModalProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-ink/50 p-6"
      onClick={onClose}
    >
      <div
        className="flex flex-col gap-4 bg-paper p-12 relative w-[720px] max-w-full h-[640px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-6 font-mono text-xs tracking-[0.1em] uppercase text-clay bg-transparent border-none cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
        <p className="type-mono-label">Calendly · 15 min</p>
        <div className="h-0.5 w-14 bg-clay" />
        <h2 className="type-h2">Pick a slot.</h2>
        <p className="type-body">
          A short intro call — no deck, no agenda. Just a conversation.
        </p>
        <p className="type-mono-meta mt-auto">calendly.com/placeholder</p>
      </div>
    </div>
  );
}
