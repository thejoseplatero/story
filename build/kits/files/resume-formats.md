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
