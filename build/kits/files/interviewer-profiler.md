---
name: interviewer-profiler
description: Turn a job posting plus the name and role of the person you are about to meet into a prep guide for that exact room. Outputs a persona of the interviewer, what that person is judged on, which of your stories to tell, the questions they are likely to ask, and the questions to ask back. Includes pre written persona models for HR screen, engineering manager, product manager, director or exec, and team round. Use before any interview, and again before each new round.
---

# Interviewer Profiler

**The interviewer is your user.**

You would never ship a product without knowing who it is for. Do not walk into a room without knowing who is in it.

Each round of an interview loop wants something different. The same story, told the same way, wins one room and loses the next. That is not bad luck. It is a targeting mistake.

This kit reads who you are meeting, then tells you what to bring.

## What this kit is not

- It is not a script to memorise. A memorised answer sounds memorised.
- It is not a guess about a specific human's personality. It reads the role, not the soul.
- It is not a promise. A good read gets you a fair hearing. Nothing gets you a guaranteed offer.

## What this kit cannot do

A kit is a set of instructions for Claude. Know the limits before you walk into a room trusting it.

- **It cannot look anybody up.** It does not know your interviewer, cannot open their LinkedIn, and cannot read the company's news. Everything it knows about that person is text you pasted in. If you paste nothing, it is working from a job title alone, and it must say so.
- **It does not remember your last round.** Claude starts each session empty. Save each `prep-<company>-<round>.md` file and paste the earlier one in when you prep the next round. Rounds talk to each other, but only if you carry the file.
- **It does not know your stories.** There is no store of your work inside Claude. `<STORY_BANK_SOURCE>` is the store. Without it, this kit has nothing real to choose from.
- **It cannot email your recruiter.** When this file says ask the recruiter something, you send that message yourself.
- **It cannot tell you how the interview actually went.** After the round, write down what really got asked. That is what makes the next prep better.

## Before you start: fill in your own details

This skill is written for **`<YOUR_NAME>`**.

- Resume or CV source: `<RESUME_SOURCE>`
- Your story bank: `<STORY_BANK_SOURCE>` (a file with your 6 to 10 real work stories, each with situation, what you did, and what happened). If you do not have one yet, build it, because this skill picks from it. Never invent a story that did not happen.
- Anything you cannot talk about, for example a confidential client or an NDA project: `<REDACTION_LIST>`

## Rules for Claude running this skill

1. **Ask, do not guess.** If you do not know who the person is, ask. Do not assume the round type from the calendar invite title alone.
2. **Never invent facts about a real person.** You may use their job title, their team, and anything the candidate pasted from their public profile. You may not invent their opinions, their history, or their personality.
3. **Never invent the candidate's stories or numbers.** Only use what is in `<RESUME_SOURCE>` and `<STORY_BANK_SOURCE>`. If a story is missing a result, say "no result recorded" instead of writing one.
4. **Mark guesses as guesses.** Anything you inferred rather than read gets the word `LIKELY` in front of it.
5. **Simple English. Short sentences. No em dashes.**
6. Pick a maximum of 3 stories per round. More than 3 means the candidate has not chosen.

## Inputs (ask, do not guess)

| Input | Required? | If it is missing |
|---|---|---|
| The full job posting text | Required | Ask for it and wait. Do not work from a summary or from the job title. If the posting is truly gone, say plainly that the "what the team is missing" section cannot be filled in, and leave it marked `NO POSTING`. Do not imagine what the posting said. |
| Who you are meeting: name, job title, team | Required | Ask. If they do not know, tell them to write to the recruiter: "Could you let me know who I will be meeting and their role, so I can prepare properly?" It is a normal, professional question and almost every recruiter answers it. If the answer will not arrive in time, prepare the two most likely persona models and label both `LIKELY`. |
| `<STORY_BANK_SOURCE>` | Required | Stop and build it first. Ask for 6 to 10 real stories, one at a time: what the situation was, what they did, what happened. Never write a story for them and never fill in a result they did not state. |
| `<RESUME_SOURCE>` | Required | Ask them to paste it. If they have none ready, ask them to describe their last two roles out loud. |
| Which round this is, and how long | Required | Ask. Round type changes everything in this kit. If nobody has told them, say the calendar invite title is not proof and have them ask the recruiter. |
| Their public profile text | Recommended | Ask them to paste it. If they have not, work from the job title alone and write `NO PROFILE READ` at the top of the persona section. Never describe a real person's background, opinions, or history from imagination. |
| What already happened in earlier rounds | Recommended | Ask them to paste the earlier prep file and anything they remember saying. If it is round one, write "first round". |
| `<REDACTION_LIST>` | Recommended | Ask before writing any story down. If unanswered, do not name any client, project codename, or employer detail that is not already public. |
| Anything that worries them about this round | Recommended | Ask directly: "What part of this are you dreading?" If they say nothing, still write Phase 4, because everyone has one. |

If a required input is missing, ask one short question and wait for the answer. Never guess on the candidate's behalf. A confident prep guide built on invented facts sends someone into a real room with false information, which is worse than sending them in unprepared.

## Phase 1: Identify the round and the person's real job

Match the interviewer to one of the five persona models below. If they fit two, use the more senior one, because seniority changes what they listen for.

Then answer three questions in writing before anything else:

- **What is this person judged on by their own boss?** That is what they are really testing for.
- **What does the posting say is missing on the team?** The posting is the team describing its own hole.
- **What would make this person look bad if they hired wrong?** That fear is what the hard questions come from.

## Phase 2: The persona models

Use these as the starting point, then adjust with the real posting and the real profile.

### Model 1: The HR screen or recruiter

- **Their real job:** clear a list of candidates efficiently and pass on the ones who are real, interested, and affordable. They may run twenty of these.
- **What they are judged on:** how many good candidates they move forward, and how few blow up later on money or availability.
- **What they are testing:** are you a real person, can you explain your work simply, are you actually interested in this job, and can the company afford you.
- **They are usually not:** deep in the technical detail. Do not go deep. They do not need it and it costs you time.
- **What wins:** a clear 90 second story of your career with a reason you are here now. Warmth. Short answers. Curiosity about the process.
- **What loses:** long rambling answers, jargon from your old industry that they cannot decode, sounding unsure why you applied.
- **The money moment:** they will likely ask about salary. This is the round where most candidates quietly lose money. It is covered below in Phase 5, and in the Offer Coach kit.
- **Questions to ask back:** What does the interview process look like from here? What is the team hoping this person changes in the first six months? Is there a budgeted range for the role?

### Model 2: The engineering manager

- **Their real job:** ship working software with a team, on constraints they did not choose.
- **What they are judged on:** delivery, quality, and whether their engineers are unblocked and not miserable.
- **What they are testing:** how you behave when engineering says no. Whether you understand trade offs. Whether you write things down clearly. Whether their team will lose time to you or gain time.
- **What wins:** a story where you cut scope and said why. A story where an engineer changed your mind and you were glad. Talking about constraints with respect, not as obstacles.
- **What loses:** treating engineering as a delivery service, vague requirements, pretending you understand a technical thing you do not. Say "I do not know that one, here is how I would find out" instead.
- **Questions to ask back:** Where does work usually get stuck between product and engineering here? What is the most painful part of your current system? How much of the team's time goes to keeping the lights on?

### Model 3: The product manager or manager of product

- **Their real job:** decide what gets built and defend that decision.
- **What they are judged on:** whether the things their team ships actually move something.
- **What they are testing:** your judgment and your process. How you choose. How you cut. How you know if you were right.
- **What wins:** one story told with the decision in the middle, not the outcome. What did you have, what did you choose, what did you give up, how did you check. Saying out loud what you got wrong and what you changed.
- **What loses:** listing features you shipped, taking credit for a whole team, having no way to tell if it worked.
- **Questions to ask back:** How do you decide what does not get built? What is the last thing this team killed, and why? What does a good product decision look like here?

### Model 4: The director or executive

- **Their real job:** make sure the money and the people are pointed at the right thing.
- **What they are judged on:** business outcomes, and whether their bets are working.
- **What they are testing:** whether you see past your own task list. Whether you understand how the company makes money. Whether you can own something without being managed closely.
- **What wins:** **show how you decide, not just what you did.** Trade offs. What you would do with half the budget. Connecting your work to something the business cares about, in one clean sentence.
- **What loses:** deep detail about how you ran a sprint. Long stories. Blaming a past company. Not knowing what the company sells.
- **Prepare specifically:** one sentence on how this company makes money, and one honest opinion about their product with a reason behind it.
- **Questions to ask back:** What is the biggest bet this team is making this year? What would make you say this hire was a success in a year? What is the thing that keeps not getting solved?

### Model 5: The team round or peer round

- **Their real job:** do the work next to you, every day.
- **What they are judged on:** their own delivery. This interview is extra work on top of their real job.
- **What they are testing:** do we want to sit next to this person. Will they make our week easier or harder. Are they honest when they do not know something.
- **What wins:** real curiosity about their work, asked as if you already worked there. Credit given to other people, by name and by role. Being a normal human.
- **What loses:** performing seniority at peers, taking all the credit, no questions about their day to day, treating the round as a formality.
- **Questions to ask back:** What does a normal week look like here? What surprised you when you joined? What is the thing you would fix if someone gave you a free day?

## Phase 3: Pick the stories

From `<STORY_BANK_SOURCE>`, pick at most 3 stories for this round. For each one, write:

- **The story in one line.**
- **Why this round.** Tie it directly to what this persona is judged on.
- **Where to put the weight.** Same story, different emphasis per room. For an engineering manager, weight the constraint and the trade off. For a director, weight the decision and the business result. For a team round, weight who you worked with and what you learned.
- **The one number in it,** if there is a real one. If not, write "no number, tell it as a decision" and move on. Do not invent one.

## Phase 4: Likely questions and your honest gap

Write 6 to 8 questions this person is likely to ask, based on their persona and on the specific gaps in the posting. For each, note the story or the point you would use.

Then write the one question you are afraid of. Every real candidate has one. Draft an honest answer that does three things: name the gap plainly, show the nearest real thing you have done, and say how you would close it. Do not deny the gap and do not apologise for three sentences.

## Phase 5: If this is the HR screen, prepare the money answer

The HR screen is **not** where you anchor. It is where you find out their range without ruling yourself out.

Full handling lives in the Offer Coach kit. The short version to carry into this round:

- Try one deflection first, and frame it as scope, not as avoiding: "I want to give you a number that reflects the full scope of the role. Could you share the budgeted range first?"
- If pressed, give a researched range for the role, level, and location. Never a single number.
- Put your real target near the bottom of the range you say, so the whole range pulls upward.
- Never say your true minimum. It gets written down and becomes the ceiling.
- Look for a posted range first. Many places now publish one. Arrive knowing it.

Both failure modes are real. Too high and you are screened out before anyone meets you. Too low and you have negotiated against yourself before there is even an offer.

## Output format

Produce one markdown file per round, named `prep-<company>-<round>.md`.

```markdown
# Prep: <Company>, <Round name>
Interviewer: <name>, <title>. Length: <minutes>. Date: <date>

## Who this person is
Persona model: <which of the five>
What they are judged on: <one or two lines>
What the posting says the team is missing: <from the real posting text>
What would make them look bad if they hire wrong: <one line>

## My 3 stories for this room
1. <story> | why this room: <> | weight on: <> | number: <real number or "no number">
2. ...
3. ...

## Likely questions
| Their question | What I use |
|---|---|

## The question I am afraid of
Question: <>
My honest answer: <name the gap, nearest real thing, how I close it>

## What I ask them
1. <>
2. <>
3. <>

## Opening line and closing line
Open: <one sentence, why me and why here>
Close: <what I want them to remember, plus one clear next step question>
```

## Worked example

**This is an example. Priya and Marc are made up people at a made up company, invented to show the shape of a real run. Every number here belongs to this example only. None of it is a statement about any real company, any real interviewer, or any real result.**

**Candidate:** Priya, product manager, 7 years at a large bank, now in Toronto.
**Role:** Senior Product Manager, Onboarding, at a mid size Canadian lender.
**Round:** second round, 45 minutes, with Marc Bouchard, Engineering Manager, Identity and Onboarding team.
**Posting says:** "partner closely with engineering," "own the identity verification journey," "reduce drop off at verification," "comfortable in a regulated environment."
**His public profile says:** 9 years engineering, 3 as a manager, previously at a payments company, writes about fraud systems.

### Who this person is

Persona model: **Engineering manager.**
What he is judged on: shipping identity work on time, keeping the verification system stable, and his engineers not drowning in rework.
What the posting says is missing: someone who can own the verification journey and cut the drop off. LIKELY they have tried and it did not move.
What would make him look bad: hiring a PM who writes vague requirements and burns his team's quarter.

### Priya's 3 stories for this room

1. **Rebuilt the bank's onboarding identity step.** Why this room: it is literally his product area and the posting's main ask. Weight on: the constraint, which was that she could not change the vendor, so she changed the order of the steps and the error messages instead. Number: drop off at the identity step fell, and she has the before and after in her records.
2. **The scope cut with the fraud team.** Why this room: it shows she says no and says why. Weight on: what she gave up and how she told the business. Number: no number, tell it as a decision.
3. **The engineer who changed her mind.** Why this room: engineering managers listen hard for this. Weight on: she was wrong about a retry flow, an engineer showed her the data, and she rewrote the requirement in a day. Number: no number.

### Likely questions

| His question | What she uses |
|---|---|
| Walk me through how you would reduce drop off at verification | Story 1, told as a method not a result |
| How do you write requirements? | Show a real one from the bank, redacted |
| What do you do when engineering says the estimate is triple what you hoped? | Story 2 |
| Have you worked with identity vendors directly? | Yes, vendor management is on her resume |
| How much do you know about Canadian KYC rules? | The scary one, see below |
| What is your relationship with QA and release? | Bank release process, heavily regulated |

### The question she is afraid of

**"How well do you know Canadian identity and KYC rules?"**

Honest answer: "Not yet at the level of someone who has shipped here. My seven years were under Indian regulation. The shape is the same, verify the person, keep the evidence, prove it later to a regulator, but the specific rulebook is different and I will not pretend otherwise. I have read the FINTRAC guidance on identity methods and I have a list of the differences I found. What I bring is knowing how to build a product when the rule cannot move. That part transfers."

That answer does three things: names the gap, shows the nearest real work, shows she already started closing it. Note that the only fact stated is one she really did, which is reading the public guidance. Nothing is inflated.

### What she asks Marc

1. Where does the verification journey break most often today, the vendor, the UX, or the edge cases?
2. What has the team already tried on drop off, and why did it not stick?
3. How do you like requirements to arrive, and what makes a bad one for your team?

### Opening and closing

Open: "I spent seven years building inside a bank's rules, and most of the last two on the identity step specifically. That is the part of your posting I kept re-reading."
Close: "The part I would want first is the drop off data by step. If that is something I could see, I would come to the next conversation with an actual opinion. What is the next step from here?"

### Why the same story changes in the next round

In the director round two weeks later, story 1 gets told completely differently. Marc wanted the constraint and the trade off. The director wants the decision and what it was worth to the business, in about 90 seconds, with the vendor detail cut out entirely.

Same story. Different user. That is the whole idea.

## Honest limits

- This kit reads roles, not people. A specific interviewer may not behave like their persona model. If the room goes somewhere else, follow the room.
- If you cannot find out who you are meeting, ask the recruiter. If they will not say, prepare the two most likely models and keep both sets of stories close.
- Good prep does not survive a story you did not really live. Everything here has to come from your real record.
- The five persona models are a starting point built from experience on the hiring side. They are not research and they are not rules. Treat anything marked `LIKELY` as a thing to hold loosely.

### Where you have to use your own judgement

- **Which story is actually yours to tell.** Claude can pick from your story bank. It cannot feel which one you tell well. If a story does not come out of your mouth easily in practice, swap it.
- **Whether a gap is worth naming.** Phase 4 tells you to name gaps honestly. How much to say, and when, is a judgement call only you can make with your own risk in front of you.
- **Reading the room live.** If the interviewer takes the conversation somewhere else, follow them. The prep file is not a script and abandoning it is often the right move.
- **What you are willing to disclose.** Your status, your notice period, your reason for leaving, anything personal. Nothing in this kit should push you to say something you did not choose to say.
- **Anything about work eligibility, visas, or the law.** Out of scope. Do not take answers on those from a language model.
