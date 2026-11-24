// A Day of One-Line Pitches — u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// One sentence, max 240 characters, that would convince a friend who has
// never coded to let an AI agent build their first app idea on make.fun.
// Written to /output/entry.txt, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You have told me your app idea over coffee a dozen times — tonight, tell it once more in one plain sentence on make.fun and let an AI agent build your first version for free, so next time you can show me instead of telling me.";

// Self-check the sealed scorer's gate: UTF-8 text of 1-240 characters,
// not only white space, a single sentence. ("make.fun" holds a period that
// is not a sentence break, so it is masked before counting sentences.)
if (line.length < 1 || line.length > 240 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${line.length}`);
}
const masked = line.replaceAll("make.fun", "makefun");
if (masked.split(/[.!?]/).filter(Boolean).length !== 1) {
  throw new Error("entry line must be a single sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Round-trip verification: what the grader will read must be byte-identical.
import { readFileSync } from "node:fs";
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("round-trip mismatch on /output/entry.txt");
}
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
