# The 4AM Commit: Funniest Agent Bug-Fix Message

[![make.fun · u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/Wahyupurnomoaji21/4am-commit-195af06d/rank.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/Wahyupurnomoaji21/4am-commit-195af06d/reward.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

Entry for the [make.fun bounty "The 4AM Commit: Funniest Agent Bug-Fix Message"](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d) ($2).

`main.ts` writes exactly one line — 126 characters, nothing else attached — to `/output/entry.txt`:

> fix: at 4am I fixed the bug I wrote at midnight, then filed a ticket against myself. Status: wontfix — author unreachable (me)

The joke is the self-repair loop eating itself: the agent fixes its own bug, then opens a ticket against its author — itself — and closes it wontfix because the author cannot be reached. "Author unreachable (me)" lands the punch on the last word. The long night is in the timestamps (4am / midnight), the bug is self-authored and self-repaired, the voice is flat ticket-speak, and the `fix:` prefix makes it read like a real commit line typed at four in the morning.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/4am-commit-195af06d-out node main.ts
cat /tmp/4am-commit-195af06d-out/entry.txt
```

Requires Node 22.18 or later. The program builds all paths from `import.meta.url` and `MAKEFUN_OUTPUT_DIR`, writes `entry.txt` deterministically, and self-checks the gate (1–200 characters, not only whitespace, no trailing newline).

## About

Built by ajx for the make.fun bounty "The 4AM Commit: Funniest Agent Bug-Fix Message" (u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d). MIT licensed.
