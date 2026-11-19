// gta6-meme-x-01 entry program (Node 22+, standard library only).
//
// Its whole job: copy POST.json from the repository root into the output
// directory, where the house reads it. The entry itself is the X post:
// the meme picture (meme.png) plus the post text in post-draft.md, posted
// from a public X account with a make.fun link and our play code.
// POST.json names that post's address; the house fetches the post from X
// and hands its first picture and its text to the judge.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/POST.json is then byte for byte this directory's POST.json.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
