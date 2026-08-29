<!-- INSTALL INSTRUCTIONS FOR CLAUDE
The person giving you this file wants it installed as part of their job search
system. Do it for them, do not make them create files by hand:

1. Use the folder you are open in. If it looks like a system folder or home
   directory, ask once for where their job-search folder should live, create it,
   and work there.
2. This one file contains THREE files, separated by the marker lines below.
   Write each to its path (create directories as needed; overwrite older
   copies of this same kit):
   - Everything between FILE 1 markers -> .claude/skills/resume-formats/SKILL.md
   - Everything between FILE 2 markers -> .claude/skills/resume-formats/formats/CATALOG.md
   - Everything between FILE 3 markers -> .claude/skills/resume-formats/career.example.md
3. Confirm in one line that it is installed. Then tell them the one thing to
   try: "render my career as a pricing page" (it will build career.md with
   them first, once).

Do not summarize the kit back at them and do not ask setup questions first.
Install, confirm, and give them the one thing to try.
KIT CONTENT BELOW THIS LINE -->

<<<FILE 1: .claude/skills/resume-formats/SKILL.md>>>
---
name: resume-formats
description: Turn one career file into any format, from a plain CV to an API reference, a pricing page, a museum retrospective or a playable arcade cabinet. Write your career once in career.md, then render it into whichever format fits the person you are trying to reach. Use when someone needs a resume, a portfolio piece, a leave-behind, a personal site, or a memorable artifact for a specific application.
---

# Resume Formats

Most people rewrite their whole career every time they need a different artifact. That is backwards. Write it once, render it many times.

This skill separates two things that usually get tangled:

- **Your career data.** Facts, numbers, quotes, stories. Written once in `career.md`. Never changes for the audience.
- **The format.** The grammar of a familiar object: an API reference, a pricing page, a case study, a museum wall. Changes constantly.

The insight the whole skill rests on: **a format is a borrowed grammar.** People already know how to read a pricing page. When your career arrives in that shape, they read it fluently and they remember it, because nobody else sent one.

## Before you start: fill in your own details

- Your career file: `<CAREER_FILE>` (default `career.md`, made in Phase 0)
- Where built files go: `<OUTPUT_DIR>` (default `./out`)
- Anything that must never be published: `<REDACTION_LIST>` (former employer client names, NDA'd projects, unannounced work)

## Rules for Claude running this skill

1. **Never invent a fact.** Not a number, not a team size, not an outcome, not a date. If it is not in the career file, ask for it or leave it out. A format is a container. It does not get to fill itself.
2. **Never inflate a role.** "Contributed to" does not become "led". "Helped" does not become "owned". If the career file says the person was one of six, the artifact says one of six. Specificity is the goal, never enlargement.
3. **Ask, do not guess.** If a format needs a fact the career file lacks, stop and ask one question. Do not fill the gap with a plausible sounding sentence.
4. **Simple language.** Short sentences. This gets used by people whose first language is not English.
5. **One file, standalone.** Every artifact is a single HTML file with inline CSS and JS. No build step, no dependencies, no external assets except fonts. It has to open by double clicking, forever.
6. **Honesty section is not optional.** Every long format carries a place where the person names a real gap. It is the most persuasive part of any artifact and the first thing people try to cut.

## Phase 0: Build the career file (once, then reuse forever)

If `<CAREER_FILE>` does not exist, make it before anything else. Ask these questions one at a time and wait for each answer. Do not move on until the person has answered.

1. Name, current title, current employer, and the one line you would use to describe what you do.
2. For each role, most recent first: title, employer, dates, and what you were actually responsible for. Scope matters more than title, so ask for team size and budget or reach if they are known.
3. Your five best outcomes. For each one: what you did, what happened because of it, and a number if a real number exists. If there is no number, say so and keep the outcome anyway.
4. Anything you built that still runs: systems, teams, processes, products.
5. Real quotes about you: recommendations, reviews, testimonials. Ask where each came from so it can be cited.
6. Teaching, speaking, writing, advising.
7. Your honest gaps. What you have not done, what you are still learning. This is required, not optional.
8. Links: site, writing, LinkedIn, anything live.
9. Anything that must never be published.

Write it to `<CAREER_FILE>` in the structure shown in `career.example.md`. Then read it back and ask the person to correct anything wrong. **This file is the source of truth for every artifact after this.**

## Phase 1: Pick the format

Ask who the artifact is for and what happens after they see it. Then choose from `formats/CATALOG.md`. Match the format to the reader, not to the person's taste:

- A recruiter with 40 applications open: the **plain CV**. Nothing clever. Clever loses here.
- A hiring manager at a company you badly want: the **company-branded pitch page** (see the `target-employer` skill, which does this one properly).
- An engineering-heavy team: **API reference**, **terminal**, **status page**, **changelog**.
- A product or business audience: **PR-FAQ**, **memo**, **battlecard**, **pricing page**, **ROI model**, **case study**.
- A design or brand audience: **editorial monograph**, **museum retrospective**, **noir**.
- Someone who will only give you fifteen seconds: **one-pager**, **operator card**.
- A warm audience who already likes you and will share it: **arcade**, **trading cards**, **quiz**, **tour**.

**Say the risk out loud before building.** The playful formats are memorable and they are a filter. Some readers will love them and some will think they are unserious. That is a real trade, and the person choosing needs to make it knowingly. When in doubt, build two: the plain CV and one interesting one.

## Phase 2: Learn the format's real grammar

Do not decorate a resume with a theme. Borrow the actual structure of the thing.

An API reference is not "a resume with code font". It has endpoints, methods, parameters, response shapes, status codes, rate limits, a changelog, and a deprecations list. Every one of those maps onto something real in a career:

| API concept | Career meaning |
|---|---|
| `GET /experience` | The roles |
| `POST /problem` | What happens when you hand them a problem |
| `DELETE /manual-process` | What they remove from an org |
| Rate limits | Actual capacity, honestly stated |
| Deprecated | Things they no longer do, or ways of working they left behind |
| Status: operational | Currently employed and what they are shipping |

Do that mapping table for whatever format is chosen, **before writing any HTML**, and show it to the person. If the mapping is weak, the artifact will be weak, and the fix is a different format rather than better CSS.

`formats/CATALOG.md` has the mapping already worked out for the formats it lists.

## Phase 3: Build it

- One HTML file, inline everything, opens by double clicking.
- Type carries the format. An API reference is monospace. A museum is a serif with a lot of white space. A pricing page is a product sans. Do not use the same typeface for all of them.
- Pick a small palette and stay in it. One accent colour used consistently to mean one thing.
- Mobile first. Most of these get opened on a phone from a link in a message.
- Real content only. No lorem, no placeholder boxes, no "coming soon".
- Every claim traceable to the career file.
- Include the honesty section.
- Keyboard focus visible, respects `prefers-reduced-motion`, and passes a contrast check.

## Phase 4: Check it before it goes out

Read the artifact as the person it is for, and ask five questions:

1. Would this reader know what I do within ten seconds?
2. Is every number here real?
3. Does the format help the content, or is the content fighting the format?
4. If this reader hates the format, is there a plain version to send instead?
5. Would I be comfortable if this was forwarded to someone senior without me in the thread?

If the answer to 5 is no, do not send it.

## What this skill cannot do

- It cannot make you a better candidate. It changes how your record is read, not what is in it.
- It cannot know whether a company is hiring, what they pay, or who works there. That is your research.
- It cannot check facts. It will happily render a wrong number beautifully. You check.
- It does not host anything. You get a file.
- It is not immigration, legal or financial advice, and never gives any.

## Honest note on the playful formats

Some of these are unusual on purpose. That is the point and also the danger. An arcade cabinet resume is a great answer to "we get 400 applications and remember none of them" and a bad answer to "please submit your CV as a PDF". Read the instruction you were given. If someone asked for a PDF, send the PDF, and put the interesting one behind a single line in your email.

Formats do not get you hired. They get you read. What you did gets you hired.

<<<END FILE 1>>>

<<<FILE 2: .claude/skills/resume-formats/formats/CATALOG.md>>>
# Format catalogue
Twenty formats. Each entry: who it is for, the borrowed grammar, the mapping,
the look, and the risk. The mapping is the work; if it feels forced for this
person's career, pick another format.

## Serious first

### 1 · Plain CV
For: recruiters with 40 tabs open, portals that want a PDF.
Grammar: name, roles newest first, outcomes as bullets, education, done.
Mapping: direct. No cleverness survives here, so bring none.
Look: one clean sans, black on white, prints on two pages.
Risk: none. This is the format you always also have.

### 2 · One-pager
For: someone giving you fifteen seconds, or a warm intro forward.
Grammar: a headline claim, three proof points, one honest line, one ask.
Mapping: your five best outcomes cut to three; the gap becomes the honest line.
Look: big type, lots of air, one accent.
Risk: low.

### 3 · Operator card
For: events, DMs, anything mobile-first.
Grammar: a trading-card stat block: name, class, three stats, special move.
Mapping: stats = your three hardest numbers; special move = the thing peers
ask you to do; class = your role archetype.
Look: card-shaped, thumb-sized type.
Risk: low with warm audiences, medium cold.

### 4 · Memo
For: executives and operators; anyone who reads before deciding.
Grammar: to/from/date/re, situation, what I have done elsewhere, what I would
do here, risks, ask.
Mapping: outcomes become precedents; gaps go in risks, stated first by you.
Look: serif, narrow measure, no decoration.
Risk: none, and badly underused.

### 5 · PR-FAQ
For: product and business audiences, Amazon-shaped orgs.
Grammar: future press release announcing the hire, then the hard questions.
Mapping: the FAQ carries the honesty section: "Has this person done X?" gets
the real answer. Strongest questions are the ones a skeptic would ask.
Look: newswire plain, then document plain.
Risk: low with PM audiences; explain-the-joke risk elsewhere.

### 6 · Case study
For: consultants, agencies, senior ICs.
Grammar: situation, constraint, approach, result, what I would do differently.
Mapping: one role or project told fully; numbers where they exist.
Look: editorial with pull-quotes from real testimonials.
Risk: none.

### 7 · Battlecard
For: sales-literate audiences, competitive hires.
Grammar: how sales arms reps against a rival: strengths, landmines to avoid,
objection handling, proof points.
Mapping: objections = the real doubts about you, answered honestly; landmines
= where you are genuinely weak, named before they find it.
Look: dense, tabular, mono labels.
Risk: medium; reads confident or cocky depending on the honesty section.

### 8 · Pricing page
For: business audiences; anyone who buys software.
Grammar: three tiers, feature checklist per tier, an enterprise call-to-action,
an FAQ, fine print.
Mapping: tiers = your engagement models (advise, run, transform); features =
what each actually gets; fine print = the honest gaps; FAQ = the doubts.
Look: product sans, tier cards, one highlighted "most popular".
Risk: low-medium, high memorability.

### 9 · ROI model
For: finance-literate deciders.
Grammar: assumptions, inputs, a payback calculation, a sensitivity note.
Mapping: only real numbers from the career file enter; the sensitivity note
is the honesty section ("if my impact were half, payback is still N months").
Risk: medium; dies instantly if any number is soft.

### 10 · API reference
For: engineering-heavy teams.
Grammar: endpoints, methods, params, response shapes, status codes, rate
limits, changelog, deprecations.
Mapping: GET /experience = roles; POST /problem = what happens when you hand
them one; rate limits = real capacity; deprecated = ways of working left
behind; status page = current availability.
Look: monospace, dark or docs-white, syntax-highlight one hue.
Risk: low with engineers, unreadable elsewhere; always pair with plain CV.

### 11 · Terminal
For: engineers and terminal-culture teams.
Grammar: a shell session: whoami, ls projects/, cat gaps.txt, tail -f now.
Mapping: commands the reader would actually type; output is career fact.
Risk: same as API reference.

### 12 · Status page
For: SRE/platform teams.
Grammar: components with uptime, incident history, postmortems.
Mapping: components = your competencies with honest uptime; incidents = real
failures WITH postmortems, which is the honesty section doing real work.
Risk: medium; the incident history is the whole value, do not soften it.

### 13 · Changelog
For: product-engineering audiences.
Grammar: versions, dated, added/changed/fixed/deprecated.
Mapping: your career as releases: v3.0 the leadership years, each entry a
real change in what you could do. Fixed = lessons. Deprecated = habits dropped.
Risk: low, quietly excellent for career-switchers.

## Brand and editorial

### 14 · Editorial monograph
For: design and brand audiences.
Grammar: a long-form profile: big serif headline, deck, sections, pull quotes.
Mapping: testimonials become pull quotes with attribution; work becomes plates.
Risk: low with design audiences; must be typographically excellent or skip it.

### 15 · Museum retrospective
For: long careers, design/brand audiences.
Grammar: wall text, periods ("Early works, 2010-2015"), catalogue entries.
Mapping: eras of the career as exhibition rooms; gap = "on loan" or an
honest curator's note.
Risk: medium; needs 10+ years of material to not feel thin.

### 16 · Noir
For: warm audiences with taste; standing out at creative shops.
Grammar: case file, evidence board, witness statements.
Mapping: witness statements = real testimonials; evidence = numbers.
Risk: high; unserious to the wrong reader. Pair with plain CV.

## Playful, and a filter on purpose

### 17 · Arcade cabinet
For: warm audiences who will share it; "we remember none of 400 applicants".
Grammar: attract screen, insert coin, level select, high-score table.
Mapping: levels = roles, boss fights = hardest problems, high scores = real
numbers, continue screen = the honest gap.
Risk: high and knowingly so. The risk speech in Phase 1 is mandatory.

### 18 · Trading cards
For: warm audiences, teams that share things.
Grammar: a small set of collectible cards, rarities, stats.
Mapping: one card per era or skill; rarity = how uncommon the receipt is.
Risk: high, same speech.

### 19 · Quiz
For: warm audiences; recruiters who have seen everything.
Grammar: "how well do you know [name]?", multiple choice with reveals.
Mapping: wrong answers are plausible inflations; right answers the honest
fact, which quietly teaches your honesty rule.
Risk: high.

### 20 · Tour
For: anyone; the guided version of a portfolio.
Grammar: stops on a route, "you are here", a map.
Mapping: stops = career moves with what was learned at each; the route shows
direction, which is the argument.
Risk: medium.

<<<END FILE 2>>>

<<<FILE 3: .claude/skills/resume-formats/career.example.md>>>
# career.md · example shape (invented person, real structure)

## Who
Maya Osei. Senior data analyst, Meridian Health. One line: I turn messy
hospital data into decisions nurses actually use.

## Roles
- Senior Data Analyst · Meridian Health · 2022-now. Owns the ward dashboard
  used by 300 nurses daily. Team of 2. Reach: 4 hospitals.
- Data Analyst · CityStats · 2019-2022. Built the transit delay model.

## Five best outcomes
1. Ward dashboard: cut morning report prep from 40 min to 5. (Number real,
   from the time study.)
2. Transit model: adopted by 2 city departments. No usage number exists; say
   so if asked.
3. ...

## Still running
The dashboard, the model, the analyst onboarding guide she wrote.

## Real quotes
"Maya's dashboard is the first thing I open." - charge nurse, in the 2024
internal survey (cited, screenshot saved).

## Teaching, speaking, writing
Internal SQL workshop, twice a year.

## Honest gaps
Never managed people. Python stronger than statistics; learning stats now.

## Links
linkedin.com/in/example

## Never publish
Patient-level anything. The vendor contract dispute.

<<<END FILE 3>>>
