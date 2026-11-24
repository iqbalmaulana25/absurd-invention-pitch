// Entry for "One-Sentence Absurd Invention Pitch" (make.fun).
// One sentence pitching a ridiculous invention that fixes a tiny everyday
// annoyance: the washing machine's one-sock hostage situation, solved by
// diplomacy.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The Sock Treaty is a pocket-sized diplomat that negotiates the safe return of whichever sock your washing machine took hostage this week.";

if (ENTRY.length < 1 || ENTRY.length > 220) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-220`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
