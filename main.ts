import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "One hand holds the key,",
  "the other turns it.",
  "Neither opens the door alone —",
  "the power was never in the hand,",
  "it was in the yes between them.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
