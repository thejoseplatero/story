---
name: targeting-kit
description: Build a short, sharp target list of roles and companies worth a job seeker's energy, from their real expertise, their real interests, and real market signals they can check. Output is a ranked list of 8 to 12 companies and 3 to 5 role titles, each with a written reason, a fit score, and a first move. Use when someone is starting a job search, is sending many applications with no replies, or cannot say out loud which jobs they are actually going for.
---

# Targeting Kit

Most job searches fail before the first application. The person is aiming at everything, so they aim at nothing. Two hundred applications, two replies.

This kit does the opposite of spray and pray. It produces a short list you can defend out loud, where every name has a reason next to it.

You can run this in about 20 minutes. It is meant to be run with a real person answering real questions, not filled in by guessing.

## What this kit is not

- It is not visa or immigration advice. Work eligibility is out of scope here. Ask a lawyer or the official government site, not a language model.
- It is not a list of companies that are definitely hiring you. It is a list of places worth your energy.
- It is not permanent. Run it again every 4 to 6 weeks as you learn things.

## What this kit cannot do

A kit is a set of instructions for Claude. It is not a program and it is not a service. Be clear about the limits before you rely on it.

- **It does not remember.** Claude starts every session with no memory of the last one. `target-list.md` is the memory. If the file is not saved, the work is gone.
- **It does not search job boards for you.** It cannot open a job board, read live postings, or check who is hiring today, unless you ask Claude to look something up in that same session and your setup allows it. Phase 1 List C is work you do. Paste what you find.
- **It does not know current market data.** No hiring rates, no salary numbers, no growth figures. Anything you did not read yourself is a guess, and a guess in a list looks exactly like a fact four weeks later.
- **It does not remind you.** The `Review again on` date in the file is a note to yourself. Nothing will ping you. Put the date in your own calendar.
- **It does not apply for you and does not send anything.** Every message leaves from your hands.

## Before you start: fill in your own details

This skill is written for **`<YOUR_NAME>`**.

- Resume or CV source: `<RESUME_SOURCE>` (a file path or pasted text)
- City and country you can work in: `<LOCATION>`
- Remote, hybrid, or onsite: `<WORK_MODE>`
- Anything you will not do, for example night shifts, heavy travel, or one industry you refuse: `<HARD_NOS>`

Fill these in once. Then you can reuse this skill every time.

## Rules for Claude running this skill

1. **Ask, do not guess.** If an input is missing, ask one short question and wait. Never invent an answer for the person.
2. **Ask one question at a time.** The person is a beginner. A wall of ten questions makes them freeze.
3. **Never invent a number.** No made up hiring stats, no made up salary data, no "this company is growing 40 percent." If you did not read it in a source the person can open, do not write it.
4. **Say when you are unsure.** Mark any company you are not confident about with `NEEDS CHECK` and tell the person exactly what to look up.
5. **Simple English. Short sentences. No em dashes.**
6. **Stay inside the time box.** Phase 1 to 4 must be done in 20 minutes. Do not go deep on any one company.

## Inputs (ask, do not guess)

| Input | Required? | If it is missing |
|---|---|---|
| `<YOUR_NAME>` | Required | Ask for it. Do not write a list addressed to nobody. |
| Resume, or a plain description of the last two jobs | Required | Ask the person to talk through their last two jobs out loud instead. Two minutes of talking is enough. Never write experience they did not describe. |
| Answers to the three question sets in Phase 1 | Required | Ask one question at a time and wait. If they cannot answer a question, write `NOT ANSWERED` and carry on. Never answer it for them. |
| `<LOCATION>` and `<WORK_MODE>` | Required | Ask. Without these, half the list will be places they cannot work. |
| Real job postings for List C, 3 to 5 of them | Required for a real list | Stop and ask them to open a job board and paste 3 to 5 postings. If they truly cannot, mark the whole market section `NEEDS CHECK`, say plainly that the list is built on their memory of the market and not on real postings, and tell them to redo List C within the week. |
| `<HARD_NOS>` | Optional | Ask once. If they say they have none, write "none stated" and move on. |
| Companies they already admire or already tried | Optional | Skip it. Do not invent admiration. |

Two rules that sit above the table. If an input is missing, ask one short question and wait for the answer. If the person says they do not know, write `NOT ANSWERED` or `NEEDS CHECK` in the output and keep going. Never fill the hole yourself.

## Phase 1: The three lists (8 minutes)

Aim is the crossing point of three things: what you are good at, what you actually care about, and what someone will pay for right now. A job that is only two of the three will burn you or ignore you.

Ask these out loud, one at a time, and write the answers down.

### List A: Expertise (what you are actually good at)

- What is the hardest problem you have solved at work? Say it in one sentence.
- What do people at work come to you for, when they could ask anyone?
- What have you done more than five times, so you are fast at it now?
- What part of your last job would take a new person six months to learn?

Turn the answers into 4 to 6 short skill phrases. Not job titles. Skills.
Good: "turning messy customer complaints into a ranked roadmap."
Bad: "product management."

### List B: Interests (what you would keep doing on a Friday afternoon)

- What kind of product would you use every day even if you were not paid to build it?
- What industry problem makes you angry in a useful way?
- Which of your past projects would you happily talk about for an hour?
- What did you hate, so we never aim there again?

Turn this into 2 to 4 domain phrases, for example "money tools for people who are bad with money" or "logistics for small shops."

### List C: Market (what someone is paying for now)

Do not guess this. Look.

Ask the person to open a job board they can access and search for the skill phrases from List A, not for job titles. Then have them answer:

- Which job titles keep appearing next to your skills?
- Which company names appear more than once?
- Which requirements appear in almost every posting? Those are the real must-haves.
- Which requirements appear in only one posting? Those are noise, ignore them.

If the person cannot browse, ask them to paste 3 to 5 job postings they already have. Work from the real text of those.

Write down 3 to 5 role titles from the real postings. Use the exact words the postings use. This matters because your target companies will use the same words.

## Phase 2: Build the target list (6 minutes)

Now make the list. Aim for 8 to 12 companies. Not 50. If the list is longer than 12, it is a wish, not a plan.

Build the list from these five sources, so it is not just famous names:

1. **Companies from the postings** you just read in List C. They are hiring right now, which is the strongest signal that exists.
2. **Competitors of those companies.** If one company needs this skill, their competitor needs it too, and their posting may not be up yet.
3. **Companies that sell to the industry you came from.** Your old industry knowledge is worth real money to the companies selling into it. This is the most underused source for people trained outside North America.
4. **Companies whose product the person already uses and understands.** Real product opinions win interviews.
5. **Smaller companies most people skip.** Fewer applicants, faster decisions, more chance a human reads your name.

For every company, you must be able to write one honest sentence about why it is on the list. If you cannot, take it off.

## Phase 3: Score and rank (4 minutes)

Score each company from 1 to 5 on three things. Be strict. A 5 must be rare.

- **Skill match.** How much of List A does this company actually need? Judge from real posting text where possible.
- **Pull.** How much does the person actually want this? A 2 here is a real answer and it is fine.
- **Reachability.** Can you get to a human? Do you know someone there, or someone who knows someone, or does the team write in public so you have a way in? A big famous company with no route in scores low even if you love it.

Add the three. Rank the list by total. Then split into three tiers.

- **Tier 1, top 3 to 4.** These get real effort: a tailored application, a person contacted, maybe a custom pitch page.
- **Tier 2, next 4 to 5.** These get a solid application and one outreach message.
- **Tier 3, the rest.** These get watched. Apply if a good posting appears.

## Phase 4: Write the reasons and the first moves (2 minutes)

For every Tier 1 and Tier 2 company, write:

- **Why them, in one sentence.** Specific to that company, not something you could paste onto any company.
- **The honest gap.** One thing they will ask about that you cannot fully answer yet. Every real target has one. Naming it now means it does not surprise you in an interview.
- **The first move.** One concrete action with a date. "Apply" is weak. "Read their engineering blog and comment on the newest post, Tuesday" is a move.

## Output format

Produce a single markdown file, `target-list.md`, in this shape.

```markdown
# Target list: <YOUR_NAME>
Updated: <date>. Review again on: <date + 4 weeks>

## My three lists
**Expertise:** <4 to 6 skill phrases>
**Interests:** <2 to 4 domain phrases>
**Market titles I am aiming at:** <3 to 5 exact titles from real postings>

## Tier 1: real effort
| Company | Score | Why them | Honest gap | First move | By when |
|---|---|---|---|---|---|

## Tier 2: solid application plus one message
| Company | Score | Why them | Honest gap | First move | By when |
|---|---|---|---|---|---|

## Tier 3: watching
| Company | Why it is here | What would move it up |
|---|---|---|

## Cut list
<Companies removed, and the reason. Keep this. It stops you drifting back.>

## To check
<Anything marked NEEDS CHECK, with the exact thing to look up.>
```

## Worked example

This is a made up person, used to show the shape of a real run. The scores and reasons are the kind of thing a real session produces. No claim here is a statement about any real company's hiring.

**Person:** Priya. 7 years as a product manager at a large bank in Bengaluru. Moved to Toronto four months ago. Has sent about 180 applications, has had 2 phone screens. Speaks good English but says she "sounds too formal."

### List A: Expertise
- Turning bank compliance rules into product requirements engineers can build
- Running a shared roadmap across 4 teams who did not report to her
- Rebuilding a customer onboarding flow that was failing at the identity check step
- Reading fraud and dispute data and deciding what to fix first
- Managing vendor relationships for payment tooling

### List B: Interests
- Money tools for people who feel stupid about money
- Anything where the rules are complicated and the user should not have to care

Hard no: advertising technology. She has done it and hated it.

### List C: Market (from 6 real postings she read)
Titles that repeated: Senior Product Manager, Payments. Product Manager, Risk and Compliance. Senior PM, Onboarding.
Requirements in almost every posting: KYC or identity verification experience, working with engineering directly, comfort with regulated environments, SQL or "data fluency."
Requirement in only one posting: "experience with crypto rails." Noise. Ignored.

### Target list built

Tier 1:

| Company | Score | Why them | Honest gap | First move | By when |
|---|---|---|---|---|---|
| Mid size Canadian fintech doing lending, from a live posting | 13 (5 skill, 4 pull, 4 reach) | Their live posting asks for identity verification and regulated product experience, which is literally the onboarding flow she rebuilt | Their stack is Canadian regulation, hers is Indian. Same shape, different rulebook. | Apply, and message the hiring manager named in the posting with one specific line about their onboarding flow | Tue |
| Payments company that sells software to banks | 13 (5 skill, 4 pull, 4 reach) | They sell into banks, and she has spent 7 years as the buyer inside a bank. She knows what that room says no to. | Never worked at a vendor, only the client side | Write one short LinkedIn post about what makes banks reject vendor tools, then send it to their PM lead | Thu |
| Series B startup building dispute tooling | 11 (4 skill, 5 pull, 2 reach) | Closest to what she says she cares about. She has read dispute data for years. | Small team, so they may want someone more hands on with SQL than she is now | Comment properly on their founder's next post, then ask for 15 minutes | This week |

Tier 2 held four more: two competitors of the first company, one credit union, one insurance company modernising claims.

Tier 3 held the big famous banks. High skill match, low reachability, hundreds of applicants. She keeps watching them, but she stops spending Tuesday nights on them.

Cut list: three consulting firms (she does not want consulting), one adtech company (hard no), and two US-only companies (cannot work there).

To check: whether the second company has a Toronto office or is fully remote. NEEDS CHECK, look at their careers page.

**What changed for Priya:** she went from 180 applications with no reason behind them to 3 companies she can explain in one sentence each, plus 4 more with a real move attached. The next hour of her week goes into 3 names, not 30.

## Honest limits

- This kit makes your aim sharper. It does not make anyone reply. Replies come from what you do after this list exists: the outreach, the tailored application, the public work.
- The list is only as good as the postings you actually read. If you skip List C and guess the market, you get a nice looking list that nobody is hiring for.
- A short list feels scary. Sending 200 applications feels productive. The feeling is backwards, and the results are the proof.

### Where you have to use your own judgement

Claude can sort and rank. It cannot know these things, so you decide them.

- **Pull.** Only you know whether you actually want a company or only think you should. Score it honestly, even when the honest score is a 2.
- **Reachability.** You know who you know. Claude does not.
- **Whether you can legally work there.** Out of scope for this kit. Check it yourself before a company goes on the list.
- **The final cut.** If a company is on the list and you cannot say one true sentence about why, take it off, whatever the score says.
- **The scores themselves.** They are a way to think, not a verdict. A 10 you feel strongly about beats a 13 you feel nothing about.
