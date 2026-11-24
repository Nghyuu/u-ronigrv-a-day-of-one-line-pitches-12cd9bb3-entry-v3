import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const entry =
  "Tell the agent the little app you've always wanted — a birthday list for the whole family, say — and by tonight you'll have something real to tap, still yours, with nothing to install and nothing to lose.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(scriptDir, process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
