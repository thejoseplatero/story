---
name: voice-and-tone
description: Capture how you actually write from your own past writing, save it as a voice guide, then draft LinkedIn posts and newsletter issues that sound like you and not like AI. Includes a rejection step where you throw away drafts that do not sound like you, and the comment first LinkedIn strategy. Use when you are starting to post in public, when a draft sounds robotic, or when you do not know what to write about.
---

# Voice and Tone

Two problems stop people from posting. The first is not knowing what to say. The second is that everything AI writes sounds like a LinkedIn robot: "Excited to share that I am thrilled to announce my journey."

This kit solves both. It reads your real writing, learns your real voice, and then drafts from it. And it teaches the part most people get wrong: **document your journey, do not promote yourself.**

Nobody wants to read your highlights. People follow other people who are figuring something out in the open.

## Before you start: fill in your own details

This kit is written for **`<YOUR_NAME>`**.

- Where your writing samples live: `<SAMPLES_FOLDER>` (for example `~/notes/voice/samples/`)
- Where the voice guide gets saved: `<VOICE_GUIDE_PATH>` (for example `~/notes/voice/voice-guide.md`)
- Your one lane: `<YOUR_LANE>` (the single topic you post about, for example "making onboarding flows faster in fintech"). One lane, not three.
- Who you want to notice you: `<YOUR_AUDIENCE>` (be exact, for example "product design leaders at Series B and later Canadian startups", not "people in tech")
- What you are working on that you can show: `<CURRENT_WORK>` (a project, a rebuild, a thing you are learning)
- Things you cannot write about publicly: `<OFF_LIMITS>` (an employer's client names, an NDA project, someone's private situation)

Put your own answers in wherever this file uses these names. Do it once, then reuse the kit.

## Inputs (ask, do not guess)

| Input | Required? | If it is missing |
|---|---|---|
| 5 to 10 real writing samples in `<SAMPLES_FOLDER>` | Required | Stop. Do not build a voice guide from fewer than 5 samples, and never from zero. If the person has nothing saved, ask them to record a three minute voice note about their work and transcribe it. That is one sample. Ask for four more. |
| `<VOICE_GUIDE_PATH>` | Required before drafting | Ask where to save it. If the guide does not exist yet, run Phase 2 first. Never draft a post from a voice you have not read. |
| `<YOUR_LANE>` | Required before drafting | Ask one question: "What is the one topic you want to be known for?" If they name three, ask them to pick one for the next month. Do not pick for them. |
| `<CURRENT_WORK>` | Required for Phase 3 | Ask what they have actually worked on in the last two weeks, paid or not. If the answer is nothing, say so plainly and suggest they build something small first. Do not generate post ideas about work that did not happen. |
| `<YOUR_AUDIENCE>` | Recommended | Ask once. If they say "people in tech", ask them to name two real people who fit. Use those two as the definition. |
| `<OFF_LIMITS>` | Recommended | Ask before the first draft, every time. If they have not answered, do not name any employer, client, or colleague in a draft. |

If any required input is missing, ask one short question and wait. Never guess at someone's voice, their lane, or their work. A guessed voice guide is worse than none, because every draft after it inherits the mistake.

## What this kit cannot do

A kit is a set of instructions for Claude. Be clear about the limits.

- **It does not remember your voice.** Claude starts each session empty. `<VOICE_GUIDE_PATH>` is the memory. If you do not save the guide and point Claude at it, every session starts from zero.
- **It does not read your LinkedIn, your inbox, or your old posts on its own.** You paste them in or save them as files.
- **It cannot post, comment, or send anything.** Every word goes out from your account, by your hand. That is on purpose. See Phase 5.
- **It does not know how your posts performed.** It cannot see views, reach, or who read you. If you want that in the guide, you tell it.

## Phase 1: Collect real samples

Claude cannot learn a voice from nothing. It needs to read you.

Put 5 to 10 pieces of your own writing into `<SAMPLES_FOLDER>`. Good sources, in order of how useful they are:

1. **Long messages you sent to a friend or a colleague.** This is your most honest voice. WhatsApp, Slack, a long email explaining something. Best material there is.
2. **Something you wrote when you were annoyed or excited.** Emotion pushes the corporate mask off.
3. **An explanation you wrote for someone who did not understand the topic.** Shows how you simplify.
4. **Old posts, even in your first language.** Write a rough English version yourself. Rough is fine. Do not have Claude translate it, because that removes exactly the thing we are trying to capture.
5. **A voice note you transcribe.** Talk for three minutes about your work, then transcribe it.

Weak sources, use less of these: your resume, your cover letters, your performance review self assessment. Those are written in a costume.

If English is your second language, use your English samples anyway, even the imperfect ones. Your real English is your voice. A version cleaned up until it sounds native is not you, and it will not sound like you when you post.

## Phase 2: Build the voice guide

Say to Claude:

> Read every file in `<SAMPLES_FOLDER>` and write my voice guide to `<VOICE_GUIDE_PATH>`. Only describe what you actually see in the samples. Do not describe a voice you think I should have.

The guide must cover:

```markdown
# Voice guide: <YOUR_NAME>

## Sentence length
Average length, and whether I mix short and long. Quote two real sentences.

## Words I actually use
15 to 25 words and phrases that show up in my samples. Real quotes only.

## Words I never use
Words I have never once written. These are banned in every draft.

## How I start things
The pattern in my first sentences. Question? Statement? A story?

## How I end things
Do I end with a question, a summary, a joke, or just stop?

## How I explain a hard idea
Do I use examples, comparisons, numbers, or step by step?

## Humour
Do I make jokes? What kind? Dry, silly, self mocking, none?

## Where I am uncertain
How do I say I am not sure? "I think", "maybe", "I could be wrong"?

## My grammar habits
Including the non standard ones. If I write short fragments, keep that.
If my article use is inconsistent, note it. These are fingerprints.

## Ten sentences that are unmistakably mine
Direct quotes from my samples, nothing edited.
```

That last section matters most. When a draft feels wrong, read those ten sentences and you will feel the gap straight away.

Read the guide. If it describes someone smoother and more polished than you, the samples were too formal. Add messier ones and run it again.

## Phase 3: Find what to write about

You do not need ideas. You need to notice what you already did.

Ask Claude:

> Based on `<CURRENT_WORK>`, give me 10 things I could write about this week. Each one must be something that actually happened to me, not a general opinion piece.

Good post shapes, all of them documentation rather than promotion:

| Shape | Example |
|---|---|
| What I tried and it did not work | "I rebuilt this flow three times. Here is why the first two failed." |
| What I got wrong for years | "I thought onboarding drop off was a design problem. It was a legal one." |
| Something I learned this week | "I did not know Canadian job postings list a range now. Here is what changed." |
| A thing I built, shown working | A short video of the actual screen, plus what was hard |
| A question I do not have the answer to | "How do you decide when a compliance step is worth the friction?" |
| A comparison across two places I worked | "Product reviews in Manila versus Toronto. Same goal, different room." |

Bad shapes, avoid these: "5 lessons from my journey", "Here is why every PM should...", congratulating yourself, announcing you are open to work in inspirational language, and anything with a rocket in it.

The test for every post: **does this show me thinking, or does this show me claiming?** Show the thinking.

## Phase 4: Draft

> Draft a LinkedIn post about the compliance discovery. Read `<VOICE_GUIDE_PATH>` first and follow it exactly. Do not use any word from my "words I never use" list. Do not use em dashes. Do not add a call to action. Do not add hashtags unless I use hashtags in my samples.

Rules Claude must follow:

- Follow the voice guide, including the imperfect parts. Do not upgrade the writing.
- First line must be a real sentence about a real thing, not a hook designed to bait.
- No em dashes.
- No "excited to share", "thrilled to announce", "humbled", "game changer", "deep dive", "leverage", "unlock", "in today's fast paced world".
- No made up numbers, no invented results. If you did not measure it, do not claim it.
- Nothing from `<OFF_LIMITS>`.
- One idea per post. Not five.
- No closing question added for engagement. If you have a real question, ask it. If not, just stop.

For a newsletter issue, same rules, longer form. Ask for a title, an opening that lands in the first two sentences, and one clear idea developed with a real example. Newsletters can hold more uncertainty than a post can.

## Phase 5: Reject the drafts that are not you (never skip this)

This is the most important step in the kit. Assume the first draft is wrong.

Read it out loud. Then check:

1. **Would I say this sentence to a friend?** Any sentence that fails, delete or rewrite.
2. **Does any line try to impress rather than explain?** Cut it.
3. **Compare against your ten sentences in the voice guide.** Does the draft sit next to them naturally, or does it sound like a different person?
4. **Is there a claim you cannot defend?** Remove it. Being caught with an invented number costs more than any post earns.
5. **Is it smoother than you actually are?** That is a failure, not a success. Put the roughness back.

Then tell Claude what was wrong, specifically:

> The second paragraph is not me. I would never say "streamline the experience". I would say "make it less annoying". And the ending is too neat. I do not know the answer yet, so say that.

Do that two or three times per post at first. Feed the corrections back:

> Add to `<VOICE_GUIDE_PATH>`: I say "annoying" not "friction". I never end on a tidy conclusion when I do not have one.

The guide gets better every time you reject something. After about ten posts the drafts start landing close on the first try.

**Rule to keep forever: if you would be embarrassed for a former colleague to know AI wrote it, do not post it.** Rewrite it until you would not be.

## Phase 6: The LinkedIn strategy: comment first

Most people post into silence, get nothing, and quit in three weeks. The order is wrong. Comment first, post second.

The behaviour to build. Every line here is worth doing because of what it does to the people reading, so it holds whatever the platform is doing this month.

- **Comment more than you post.** A comment puts your name under something that already has the attention of the people you want. Your own post starts with nobody. Comments are also easier to write, so you will keep doing them.
- **Write at least 15 words, and add something real.** An example, a disagreement, a question that moves the idea forward. "Great post!" gives the author nothing and gives a reader no reason to click your name. This is our writing rule, not a rule of the platform.
- **Be early.** Pick 5 to 10 people your target audience already reads, turn on notifications for them, and comment while the conversation is still small. Everyone who arrives later reads what is already there.
- **Comment first, then post.** Comment on a few target posts, then publish your own shortly after, while the same people are still looking at their feed.
- **Stay in one lane.** Post about `<YOUR_LANE>` only. A human who reads your name three times should know what you are known for. Five interests teaches them nothing.
- **Reply to everyone, fast.** Someone who took the time to comment is the most interested person you will meet that week. Answer properly, the same day. Real conversation beats broadcast.

The weekly cadence, about 30 minutes a day and sustainable while job hunting:

1. **Daily:** 3 to 5 real comments, 15 or more words each, on people your audience reads, as soon after they post as you can manage.
2. **Twice a week:** one post documenting your journey, drafted from your voice guide and edited by hand.
3. **Straight after posting:** reply to every single comment while you are still at your desk. Not "thanks". A real reply.
4. **Weekly:** if you had a real conversation with someone, write them into your warm circle so you remember it properly. A conversation, not a profile view. You are keeping notes on people you spoke to, not counting an audience.
5. **Monthly:** one longer thing, a newsletter issue or a short screen recording of you working, that your daily activity can point back to.

Use the voice guide for comments too:

> Draft a comment on this post. 15 to 30 words. Add one specific thing from my own experience. Do not compliment the author. Use my voice guide.

**About the numbers you will read elsewhere.** Social media marketing companies publish figures about how LinkedIn ranks things: that a comment is worth about five times a like, that a comment in the first hour counts for several times more than a late one. Those come from Hootsuite, Sprout Social and similar third parties watching from the outside. LinkedIn does not publish any of it, nobody outside the company can see the ranking, and it changes.

So: never repeat a multiplier to anyone as a fact, and do not build your week around one. Build it around the behaviour above, which works on readers rather than on a ranking. Do not let Claude add exact figures to this file. If you see a number in a draft that is not written here, it was invented.

## A full worked example

**This is an example. Ana is a made up person, invented to show the shape of a real run. Nothing here is a claim about a real designer, a real company, or a real result.**

Ana is a product designer from Bogota, in Toronto for a year. She has posted nothing because everything she drafts sounds fake.

**Samples.** She puts in four long WhatsApp messages to a friend back home about her job hunt, one angry email she wrote about a bad design review, and a two page explanation of design systems she once wrote for an engineer. Six files. All honest.

**Guide.** Claude finds that she writes short sentences, asks a lot of questions, uses "honestly" often, never uses the word "stakeholders", and always explains with a real example. It quotes ten of her sentences, including "Honestly the review was fine until someone asked about the colour."

**Idea.** She spent the week rebuilding a booking flow as practice and found she could remove two screens by moving one question earlier.

**Draft one.** Claude writes: "Excited to share a recent exploration where I streamlined a booking experience, reducing friction and unlocking a more seamless user journey."

**Rejection.** Every word of that is wrong. She tells Claude: "I do not say exploration, streamlined, friction, seamless, or journey. I removed two screens. Say that."

**Draft two.** "I rebuilt a booking flow this week as practice. I got it from seven screens to five. Honestly the trick was boring: I asked for the date at the start instead of the end, so three later screens had nothing left to ask. I do not know yet if this holds when payment is involved. Going to try that next."

She reads it out loud. It sounds like her, including the uncertainty at the end. She posts it.

**Comments.** That morning she had already left four comments on posts by design leaders at Canadian startups. One of them, a design director, sees her post that afternoon and replies about payment steps specifically. She answers within ten minutes with a real question. He answers again.

She logs him in her warm circle file. No job came from this post. A conversation did, and that is what she was actually building.

## What this kit is not

- **Not a way to sound like a native English speaker.** It captures your English, not someone else's. Clear beats native every time.
- **Not an autopilot.** If you post drafts you have not rewritten, people will feel it. AI writing has a smell.
- **Not a growth hack.** Follower counts are not the goal. Ten of the right people reading you beats ten thousand who cannot hire you or refer you.
- **Not fast.** Expect two to three months of steady posting before conversations start. Anyone promising faster is selling something.
- **Not for claiming expertise you do not have.** You are keeping a public research notebook. That is enough, and it is the honest version.

## Where you have to use your own judgement

Claude can copy a pattern. It cannot know these things, so they are yours.

- **Whether it sounds like you.** This is the whole kit and it cannot be delegated. Phase 5 is not optional.
- **What is true.** Claude cannot tell a real result from a plausible one. If a draft contains a number, you check it or you cut it.
- **What is safe to say in public.** Your old employer's rules, your visa situation, a colleague's privacy, what your current boss can see. Claude does not know any of it.
- **Whether a post is worth writing at all.** Some weeks you have nothing real to say. Saying nothing is a valid week.
- **How much to show.** Documenting your journey means showing work in progress. Only you know where your line is between honest and exposed.
