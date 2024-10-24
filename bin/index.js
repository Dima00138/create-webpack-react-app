#! /usr/bin/env node
import path from "node:path";
import * as url from "node:url";
import { copyFolderRecursiveSync } from "./utils.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const curDir = process.cwd();
copyFolderRecursiveSync(
  path.join(__dirname, "../template"),
  path.join(curDir),
  true
);
