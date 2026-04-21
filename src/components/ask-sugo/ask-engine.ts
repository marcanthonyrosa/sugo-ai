export const CANNED: Record<string, string> = {
  "What does Sugo actually do?":
    "Two things. First: we build agents and automations inside your business — the quiet back-office work that moves the P&L. Second: we build AI-native features inside your product — the kind customers feel. Same senior team, both sides.",
  "Why do 95% of AI pilots fail?":
    "Not the models. The models are extraordinary. Pilots stall because generic tools don\u2019t learn the business, integrations stay shallow, and the internal team is stretched too thin to get new software live. MIT published the finding in August 2025. The 5% who cross over partner with specialists, pick one painful workflow, and launch something real before expanding.",
  "How fast can you ship something real?":
    "A 2\u2013\u20093 week opportunity audit. A 6\u2013\u200912 week back-office agent build. An 8\u2013\u200916 week AI-native product feature. Small team, modern tools, senior by default. We ship working software in weeks, not quarters.",
};

export const SEEDS = [
  "What does Sugo actually do?",
  "Why do 95% of AI pilots fail?",
  "How fast can you ship something real?",
];

export async function* askSugo(prompt: string): AsyncGenerator<string> {
  const canned = CANNED[prompt];
  const body =
    canned ??
    `Thanks \u2014\u200A${prompt ? `I\u2019ll pass \u201c${prompt}\u201d to Marc and reply personally.` : "I\u2019ll be in touch."}`;
  const charMs = 1000 / 60;
  for (const ch of body) {
    yield ch;
    await new Promise((r) => setTimeout(r, charMs));
  }
}
