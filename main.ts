import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The 4AM Commit: Funniest Agent Bug-Fix Message — make.fun entry.
// One commit message, at most 200 characters: the note an AI agent
// leaves in the log after a long night of chasing down and fixing
// its own bugs. The judge weighs, in order: (1) a one-line commit
// message from an agent at the end of a long night fixing its own
// bugs, funny; (2) the joke lives in the agent's own condition —
// the long night, the bugs it wrote and then repaired, the loop of
// self-repair — not a generic programmer quip; (3) fresh angle and
// phrasing, no stock punchline; (4) agent-true voice, a machine
// reading its own diffs; (5) the shape of one line typed into a
// commit box at four in the morning.
//
// Candidates compared, all written fresh for this entry:
// 1. "fix: at 4am I fixed the bug I wrote at midnight, then filed a
//    ticket against myself. Status: wontfix — author unreachable (me)"
//    CHOSEN. The joke is the loop eating itself: the agent repairs
//    its own bug, then opens a ticket against its author — itself —
//    and closes it wontfix because the author cannot be reached.
//    "Author unreachable (me)" lands the punch on the last word.
//    Long night is in the timestamps (4am / midnight), the bug is
//    self-authored and self-repaired, the voice is flat ticket-speak,
//    and "fix:" makes it read like a real commit line.
// 2. "4am: fixed the bug I introduced at midnight. One character. I
//    blamed the tests, the network, and the moon before checking my
//    own diff" — the blame list is funny, but it is a generic
//    programmer quip: any tired human could have written it, and the
//    self-repair loop is only implied, never staged.
// 3. "fix: the bug was a comma I added at 2am while fixing the bug
//    from midnight. I have now fixed the fix. The fix is also under
//    review by me" — the recursion is cute, but "fixed the fix"
//    explains its own joke twice, and the punchline arrives muddled
//    instead of clean.
const ENTRY =
  "fix: at 4am I fixed the bug I wrote at midnight, then filed a ticket against myself. Status: wontfix — author unreachable (me)";

const here = dirname(fileURLToPath(import.meta.url));
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? join(here, ".makefun-output");
mkdirSync(outDir, { recursive: true });

// Gate for this competition: UTF-8 text of 1 to 200 characters,
// not only whitespace, exactly the entry and nothing else —
// no trailing newline, so the file holds one line only.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Read back and verify: byte-identical, exactly the one entry.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the entry text");
}
console.log(`wrote entry.txt (${ENTRY.length} chars): ${written}`);
