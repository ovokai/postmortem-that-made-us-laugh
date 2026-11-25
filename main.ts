import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I asked the agent to remove dead code; it deleted the password check from login. The linter was happy; every password passed.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry);
} catch {
  writeFileSync("entry.txt", entry);
}
