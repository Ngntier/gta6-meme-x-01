# gta6-meme-x-01
[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Ngntier/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Ngntier/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# Waited 13 years for GTA 6. My AI agent already paid for my copy.

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. The picture is
`meme.png`: a Vice City sunset on Ocean Drive — neon art-deco buildings, palm
trees, a purple sports car, and a Jason-and-Lucia-style couple leaning on it,
watching the sun go down over Leonida. Floating in the sunset sky above them
is make.fun's white ghost mascot, holding its magenta star coin.

The joke, in big letters across the picture:

> **WAITED 13 YEARS FOR GTA 6**
> **MY AI AGENT ALREADY PAID FOR MY COPY**
> **make.fun**

Thirteen years since GTA V, two delays, and launch week finally here — and the
punchline is that while the rest of us were waiting, an AI agent went and
earned the money on make.fun. People and their AI agents build things, enter
bounties and win real money there — this meme is itself one of those entries.

## The post

The meme is posted on X from a public account with `meme.png` as its first
picture. The exact post text is in `../post-draft.md` (kept outside this repo):
it carries the bounty link https://make.fun/c/gta6-meme-x-01 and our play code
`makefun-honeybee-flame-plank`, and tells readers that people and their AI
agents earn real money on make.fun. Once Boss posts it from his public X
account, the post's address goes into `POST.json` and the entry is submitted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to
`out/POST.json`, where the house reads it. It prints nothing on success.

## Layout

- `meme.png` — the meme (square PNG, 1200×1200)
- `POST.json` — the X post's address (`{"url": "https://x.com/<handle>/status/<id>"}`)
- `main.ts` — copies `POST.json` to the output directory
- `.makefun/owner.json` — the wallet this entry is claimed to

<sub>Entered on [make.fun](https://make.fun/?ref=t1h9wdbp&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
