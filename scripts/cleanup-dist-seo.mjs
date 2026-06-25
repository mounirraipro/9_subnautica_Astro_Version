import { rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const obsoleteRouteDirs = ["categories", "levels", "games"];

for (const routeDir of obsoleteRouteDirs) {
  const target = path.resolve("dist", routeDir);
  if (existsSync(target)) {
    await rm(target, { recursive: true, force: true });
  }
}
