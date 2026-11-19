// gta6-meme-x-01 entry program (Node 22+, standard library only).
//
// Its whole job: copy POST.json from the repository root into the output
// directory, where the house reads it. The entry itself is the X post:
// the meme picture (meme.png) plus the post text in post-draft.md, posted
// from a public X account with a make.fun link and our play code.
// POST.json names that post's address; the house fetches the post from X
// and hands its first picture and its text to the judge.
//
// Before copying, POST.json is validated: it must parse as JSON and carry
// a string `url` field, so a broken placeholder or a bad edit fails loudly
// here instead of shipping a post address the house cannot use.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/POST.json is then byte for byte this directory's POST.json.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_PATH = join(BOT_DIR, 'POST.json');

// Validate first: POST.json must be JSON with a string `url` field.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(POST_PATH, 'utf8'));
} catch (err) {
  console.error(`POST.json in ${BOT_DIR} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error(`POST.json in ${BOT_DIR} must contain a string "url" field.`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_PATH, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
