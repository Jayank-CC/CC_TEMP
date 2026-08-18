/* Meta tags - single source of truth for the shared favicon + font-preload <link> tags used
   across every page on this site.

   This file is NOT loaded by any page anymore (no page contains a
   <script src="/js/meta.js"> reference). Editing the tags below does nothing on its own -- this
   file exists purely as the source apply-meta.js reads from.

   Why it works this way: the earlier version of this file ran in the browser via
   document.write() from a <script> tag placed in <head>, which meant editing this one file did
   update every page live -- but "View Page Source" only ever shows the raw HTML a server sent,
   never anything document.write() adds afterward, so the actual <link> tags were invisible
   there. The user wants the real tags physically present in every page's HTML (visible in View
   Source), while still only editing them in one place. On a static site with no build tooling,
   those two goals can only both be satisfied with a small regenerate step: edit the tags here,
   then run

       node apply-meta.js

   from the project root, and it re-bakes the current tags into every .html page in the repo,
   between the <!-- site-meta:start --> / <!-- site-meta:end --> markers already present in each
   page's <head> -- so each page keeps its own real, visible copy, and "one file" still means
   "one edit" (just with one extra command afterward instead of zero).

   Charset and viewport meta tags are still never centralized here -- those must stay written
   directly in each page's own <head> regardless of this mechanism.

   Absolute root paths (/assets/...) are used so the same tags apply unmodified to both
   root-level pages and nested pages (case-studies/*.html, job/*.html). */
const META_TAGS = `
<link rel="icon" href="/assets/images/CloudConverge_Final_Logo_CC_Small_Color_V1-150x150.png" sizes="32x32">
<link rel="icon" href="/assets/images/CloudConverge_Final_Logo_CC_Small_Color_V1-300x300.png" sizes="192x192">
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/dm-sans-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/poppins-600-latin.woff2" crossorigin>
`;

if (typeof module !== "undefined") module.exports = META_TAGS;
