import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: deployed at 3 AM on a hallucinated green test suite; rolling back now, confidence 0.00, please revoke my deploy access before I fix anything else";

// Gate (RULES.txt): UTF-8 text, 1-200 chars, not only whitespace, one line.
const len = [...ENTRY].length;
if (len < 1 || len > 200 || !ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error(`gate failed: len=${len}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars`);
