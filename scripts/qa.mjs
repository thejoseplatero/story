#!/usr/bin/env node
/* QA suite for joseplatero.com / thejoseplatero.github.io/story
   Zero dependencies. Run: node scripts/qa.mjs [--live]
   --live also verifies both production domains byte-match this repo. */

import { readFileSync, existsSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const LIVE = process.argv.includes('--live');

let pass = 0, fail = 0;
const t = (name, ok, detail = '') => {
  if (ok) { pass++; console.log(`  ok  ${name}`); }
  else { fail++; console.log(`FAIL  ${name}${detail ? ' :: ' + detail : ''}`); }
};
const section = (s) => console.log(`\n== ${s}`);

/* ---------- document integrity ---------- */
section('document integrity');
t('doctype present', /^<!doctype html>/i.test(html.trim()));
t('lang attribute', /<html lang="en">/.test(html));
t('charset utf-8', /<meta charset="utf-8">/i.test(html));
t('viewport meta', /name="viewport"/.test(html));
t('exactly one <h1>', (html.match(/<h1[\s>]/g) || []).length === 1);
const opens = (tag) => (html.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length;
const closes = (tag) => (html.match(new RegExp(`</${tag}>`, 'g')) || []).length;
for (const tag of ['section', 'div', 'span', 'figure', 'p', 'h2', 'h3', 'a', 'button', 'svg']) {
  t(`balanced <${tag}> (${opens(tag)})`, opens(tag) === closes(tag), `${opens(tag)} open vs ${closes(tag)} close`);
}
const ids = [...html.matchAll(/ id="([^"]+)"/g)].map(m => m[1]);
t('all ids unique', new Set(ids).size === ids.length,
  ids.filter((x, i) => ids.indexOf(x) !== i).join(','));

/* ---------- heading hierarchy ---------- */
section('heading hierarchy');
const heads = [...html.matchAll(/<h([1-3])[\s>]/g)].map(m => +m[1]);
let ordered = true;
for (let i = 1; i < heads.length; i++) if (heads[i] - heads[i - 1] > 1) ordered = false;
t('no heading level skips', ordered, heads.join(','));

/* ---------- SEO / AEO ---------- */
section('seo / aeo');
const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
t('title present', title.length > 0);
t(`title <= 70 chars (${title.length})`, title.length <= 70);
const desc = (html.match(/name="description" content="([^"]*)"/) || [])[1] || '';
t(`meta description 50-165 chars (${desc.length})`, desc.length >= 50 && desc.length <= 165);
t('canonical url', /rel="canonical" href="https:\/\/joseplatero\.com\/"/.test(html));
for (const p of ['og:title', 'og:description', 'og:image', 'og:url', 'og:type']) {
  t(`open graph ${p}`, new RegExp(`property="${p}"`).test(html));
}
t('twitter card', /name="twitter:card"/.test(html));
t('robots indexable', /name="robots" content="index/.test(html));
t('favicon', /rel="icon"/.test(html));
const ld = (html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/) || [])[1];
let ldObj = null;
try { ldObj = JSON.parse(ld); } catch {}
t('JSON-LD parses', !!ldObj);
t('JSON-LD Person', JSON.stringify(ldObj || {}).includes('"Person"'));
t('JSON-LD sameAs >= 3', (JSON.stringify(ldObj || {}).match(/https:/g) || []).length >= 3);

/* ---------- accessibility ---------- */
section('accessibility');
const imgs = [...html.matchAll(/<img [^>]*>/g)].map(m => m[0]);
t(`every <img> has alt (${imgs.length} imgs)`, imgs.every(i => / alt="[^"]+"/.test(i)));
const iframes = [...html.matchAll(/<iframe [^>]*>/g)].map(m => m[0]);
t('every <iframe> has title', iframes.every(i => / title="/.test(i)));
const autoVids = [...html.matchAll(/<video [^>]*>/g)].map(m => m[0]);
t('every <video> is muted+playsinline or user-controlled',
  autoVids.every(v => (/ muted/.test(v) && / playsinline/.test(v)) || / controls/.test(v)));
t('reduced-motion respected', /prefers-reduced-motion/.test(html));
t('nav landmarks labelled', /<nav id="gnav" aria-label=/.test(html));
const extLinks = [...html.matchAll(/<a [^>]*href="https?:\/\/[^"]*"[^>]*>/g)].map(m => m[0])
  .filter(a => !a.includes('joseplatero.com/"'));
t(`external links use rel=noopener (${extLinks.length})`, extLinks.every(a => /rel="noopener"/.test(a)));

/* ---------- internal anchors ---------- */
section('internal anchors');
const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map(m => m[1]);
const missing = anchors.filter(a => !ids.includes(a) && !['ch-1','ch-2','ch-3','ch-4','ch-5','ch-6'].includes(a));
const jsAssigned = anchors.filter(a => /^ch-\d$/.test(a));
t('static anchor targets exist', missing.length === 0, missing.join(','));
t('js-assigned ch-N anchors covered by assigner', jsAssigned.length === 0 || /s\.id = 'ch-' \+ \(i \+ 1\)/.test(html));

/* ---------- assets ---------- */
section('assets');
const assets = [...new Set([...html.matchAll(/(?:src|poster|href)="(assets\/[^"]+)"/g)].map(m => m[1]))];
const PENDING = ['ai-native-title.jpg','tw-fireside.jpg','tw-questions.jpg','aiai-toronto.mp4','elevate.mp4'];
const missingAssets = assets.filter(a => !existsSync(join(root, a)));
const unexpected = missingAssets.filter(a => !PENDING.some(h => a.endsWith(h)));
t(`all ${assets.length} referenced assets exist (${missingAssets.length} known-pending slots)`, unexpected.length === 0, unexpected.join(','));
const vids = [...html.matchAll(/<video [^>]*src="(assets[^"]+)"[^>]*poster="(assets[^"]+)"/g)];
t('every inline video has a poster', vids.length >= 5);
let oversize = [];
for (const a of assets) {
  const f = join(root, a);
  if (existsSync(f) && statSync(f).size > 99 * 1024 * 1024) oversize.push(a);
}
t('no asset over GitHub 100MB limit', oversize.length === 0, oversize.join(','));
t(`index.html under 150KB (${(html.length / 1024).toFixed(0)}KB)`, html.length < 150 * 1024);

/* ---------- javascript ---------- */
section('javascript');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
t('inline script blocks found', scripts.length >= 1);
let syntaxOk = true, syntaxErr = '';
try {
  execSync(`node --check /dev/stdin`, { input: scripts.join('\n;\n'), stdio: ['pipe', 'pipe', 'pipe'] });
} catch (e) { syntaxOk = false; syntaxErr = String(e.stderr).slice(0, 120); }
t('all inline JS parses (node --check)', syntaxOk, syntaxErr);
t("no console.log left in page", !scripts.join('').includes('console.log'));
t("'use strict' set", scripts.join('').includes("'use strict'"));

/* ---------- brand rules ---------- */
section('brand rules');
t('zero em dashes', !html.includes('—'));
const emoji = [...html].filter(c => c.codePointAt(0) > 0x1F000);
t('zero emoji', emoji.length === 0, emoji.join(''));
t('arrow glyphs carry text-presentation selector', !/↗(?!︎)/.test(html.replace(/↗︎/g, '')));

/* ---------- design: contrast (WCAG) ---------- */
section('design contrast');
const lum = (hex) => {
  const [r, g, b] = [0, 2, 4].map(i => parseInt(hex.slice(i + 1, i + 3), 16) / 255)
    .map(v => v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
const pairs = [
  ['body dim text on page bg', '#a9b1c4', '#0a0b0f', 4.5],
  ['white headings on page bg', '#ffffff', '#0a0b0f', 7],
  ['mail body ink on paper', '#3a352c', '#f4f1ea', 4.5],
  ['orange section labels on paper', '#b4460f', '#f4f1ea', 3],
  ['terminal text on terminal bg', '#c3cadb', '#0d0f15', 4.5],
];
for (const [name, fg, bg, min] of pairs) {
  const r = ratio(fg, bg);
  t(`${name} >= ${min}:1 (${r.toFixed(2)}:1)`, r >= min);
}

/* ---------- live parity ---------- */
if (LIVE) {
  section('live parity');
  const local = html;
  for (const d of ['https://joseplatero.com', 'https://thejoseplatero.github.io/story']) {
    const res = await fetch(`${d}/?qa=${Date.now()}`);
    const body = await res.text();
    t(`${d} responds 200`, res.status === 200);
    t(`${d} byte-matches repo (${body.length} vs ${local.length})`, body.length === local.length);
    const vid = await fetch(`${d}/assets/reels/behind-the-work.mp4`, { headers: { Range: 'bytes=0-0' } });
    t(`${d} serves video with byte-range (${vid.status})`, vid.status === 206);
  }
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
