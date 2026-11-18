#!/usr/bin/env bash
set -euo pipefail

root=$(cd "$(dirname "$0")/../.." && pwd)
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT

cd "$root/tangle"
archive=$(npm pack --pack-destination "$work" --silent)
cd "$work"
mkdir consumer demo
cd consumer
npm init -y >/dev/null
npm install --omit=dev "../$archive"
node --input-type=module <<'JS'
import assert from "node:assert/strict";
import plugin, {compileTangleToAST, generateJS} from "tanglekit";
assert.equal(plugin().name, "vite-plugin-tangle");
assert.match(await generateJS(compileTangleToAST("<p/>"), "Smoke.tngl"), /createElement\("p"\)/);
JS

cd ../demo
cp -R "$root/tangle-demo/"{package.json,package-lock.json,.npmrc,index.html,vite.config.js,src,public} .
npm install --package-lock-only "../$archive"
npm ci
node --input-type=module - "$root/tangle/README.md" <<'JS'
import assert from "node:assert/strict";
import {lstatSync, readFileSync, writeFileSync} from "node:fs";
const lock = JSON.parse(readFileSync("package-lock.json", "utf8"));
assert.match(lock.packages["node_modules/tanglekit"].resolved, /^file:.*\.tgz$/);
assert.equal(lstatSync("node_modules/tanglekit").isSymbolicLink(), false);
const readme = readFileSync(process.argv[2], "utf8");
const [, config] = readme.match(/```js\n(\s*import \{ defineConfig \}[\s\S]*?)```/);
writeFileSync("readme.config.mjs", config);
const {default: {plugins}} = await import("./readme.config.mjs");
assert.equal(plugins[0].name, "vite-plugin-tangle");
JS
npm run build
