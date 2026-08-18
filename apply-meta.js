#!/usr/bin/env node
/*
 * apply-meta.js
 *
 * Bakes the shared favicon + font-preload <link> tags (the single source of truth lives in
 * js/meta.js) into every .html page in this project, as real, visible tags in each page's own
 * <head> -- not a runtime script injection. This means "View Page Source" always shows the
 * actual tags on every page, while you still only ever edit them in ONE file.
 *
 * Usage: whenever you change the tags in js/meta.js, run this from the project root:
 *
 *     node apply-meta.js
 *
 * It is safe to run repeatedly (idempotent). It looks in each page for either:
 *   - a first-time "site-meta-placeholder" marker (a leftover from an older script-based
 *     version of this mechanism), or
 *   - a previously-baked <!-- site-meta:start --> ... <!-- site-meta:end --> block
 * and replaces whichever it finds with the current contents of js/meta.js. Pages with neither
 * are left untouched and listed at the end so you can decide whether to add the block manually.
 *
 * No dependencies beyond Node's built-in fs/path -- nothing to npm install.
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const META_TAGS = require("./js/meta.js");

const START_MARKER = "<!-- site-meta:start -->";
const END_MARKER = "<!-- site-meta:end -->";

function escapeForRegex(str) {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function getTagLines() {
  return META_TAGS.split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function findHtmlFiles(dir, files) {
  files = files || [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(full, files);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".html")) {
      files.push(full);
    }
  }
  return files;
}

function buildBlock(tagLines, indent) {
  return [START_MARKER, ...tagLines, END_MARKER].map((line) => indent + line).join("\n");
}

const PLACEHOLDER_RE =
  /([ \t]*)<!-- site-meta-placeholder:[^\n]*-->\r?\n[ \t]*<script src="\/js\/meta\.js"><\/script>/;

function applyToFile(filePath, tagLines) {
  const original = fs.readFileSync(filePath, "utf8");
  let updated = original;

  const bakedRe = new RegExp(
    "([ \\t]*)" + escapeForRegex(START_MARKER) + "[\\s\\S]*?" + escapeForRegex(END_MARKER)
  );

  if (PLACEHOLDER_RE.test(updated)) {
    updated = updated.replace(PLACEHOLDER_RE, (_match, indent) => buildBlock(tagLines, indent));
  } else if (bakedRe.test(updated)) {
    updated = updated.replace(bakedRe, (_match, indent) => buildBlock(tagLines, indent));
  } else {
    return "skipped";
  }

  if (updated === original) return "unchanged";
  fs.writeFileSync(filePath, updated, "utf8");
  return "updated";
}

function main() {
  const tagLines = getTagLines();
  const files = findHtmlFiles(ROOT);
  const summary = { updated: [], unchanged: [], skipped: [] };

  for (const file of files) {
    const rel = path.relative(ROOT, file);
    const status = applyToFile(file, tagLines);
    summary[status].push(rel);
  }

  console.log(
    "apply-meta: " +
      summary.updated.length +
      " updated, " +
      summary.unchanged.length +
      " already current, " +
      summary.skipped.length +
      " skipped."
  );
  if (summary.skipped.length) {
    console.log("Skipped (no site-meta marker found -- add one manually if this page should get the shared tags):");
    summary.skipped.forEach((f) => console.log("  - " + f));
  }
}

main();
