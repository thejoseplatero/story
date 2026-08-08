---
name: warm-circle
description: Remember the people you care about properly. Who they are, what matters to them, what they are working on, and what you last talked about. Then, when you ask, get a short read on who you have not spoken to in a while and what would actually be useful to them, plus a draft message you rewrite in your own words and send yourself. Use when you meet someone new, after any good conversation, or when you want to reconnect with someone you have not spoken to in months.
---

# Warm Circle

A warm circle is the small group of people who know you, like you, and would say your name in a room you are not in.

Most people only reach out when they need something. That is exactly why it does not work. The person on the other side can feel it. They have not heard from you in two years and now there is a favour attached.

A coffee chat does not get you a job, and that was never the point. The research on how people actually find work backs this up: most offers come through acquaintances people saw rarely, not close friends, because weak ties carry new information. A wide circle that remembers you beats a small circle you exhaust.

This kit fixes the memory problem, not the asking problem. You remember people properly. You stay useful. The job, the intro, the referral: those are side effects of the relationship, never the purpose of it.

**The notes are a means. Remembering people is the point.** If you ever feel like you are working a list instead of thinking about a person, stop and close the file.

These are not leads, contacts, or prospects, and this is not a pipeline. They are people you know. If the words in your head start sounding like sales words, that is the signal to put this down for a week.

## Before you start: fill in your own details

This kit is written for **`<YOUR_NAME>`**.

- Where your notes live: `<CIRCLE_FOLDER>` (for example `~/notes/people/`). One folder. One markdown file per person.
- What you are working on right now, in one sentence: `<YOUR_FOCUS>` (for example "moving from PM roles in Manila to product roles at Canadian fintechs"). This helps Claude spot when someone in your circle is worth reconnecting with, and helps you say something true about yourself when they ask.
- Your time zone: `<YOUR_TIMEZONE>`
- Anything private that must never leave your machine: `<PRIVATE_NOTES>` (for example health details someone told you in confidence). These stay in the file for your memory. They never go into a draft message.

Wherever this file says `<YOUR_NAME>`, `<CIRCLE_FOLDER>`, and so on, put in your own answer. Do this once. Then reuse the kit forever.

## Inputs (ask, do not guess)

| Input | Required? | If it is missing |
|---|---|---|
| `<CIRCLE_FOLDER>` | Required | Ask where the notes should live. If the person has no folder yet, suggest one and ask them to confirm before writing any file. Never scatter person files into whatever folder happens to be open. |
| What you remember about the person | Required | Ask them to talk about the conversation for two minutes. Whatever they remember is the input. If they cannot remember a detail, write "unsure" in the file. Never fill it in with something plausible. |
| The person's name and how you met | Required | Ask. A file with no name and no meeting story is not worth keeping. |
| `<YOUR_FOCUS>` | Recommended | Ask once. Without it, Claude cannot tell what would be genuinely useful to share. Do not invent a focus for them. |
| `nudge_every` for this person | Recommended | Ask "how often does it make sense to be in touch with this person?" If they do not know, write 6 weeks and say plainly that it is a placeholder for them to change. |
| `<PRIVATE_NOTES>` | Recommended | Ask before the first draft message. If unanswered, treat every health, family, money, and immigration detail in the file as private and keep it out of drafts. |

When something is missing, ask one short question and wait. Three questions maximum in one go. Never guess a detail about a real person. A wrong detail in a message is worse than no message, because it tells them you were not really listening.

## What this kit cannot do

A kit is a set of instructions for Claude. It is not an app and not a service. Know the limits before you rely on it.

- **It does not remember between sessions.** Claude starts empty every time. The files in `<CIRCLE_FOLDER>` are the memory. No files, no circle.
- **Nothing will nudge you.** There is no alarm, no notification, no email. Phase 2 happens because you sit down once a week and ask. Put that in your calendar yourself.
- **It cannot send anything.** Not email, not LinkedIn, not text. Claude writes a draft. You rewrite it and you send it, from your own account. This limit is deliberate. See Phase 4.
- **It cannot look people up.** It does not know who someone is, where they work now, or what they posted last week, unless you tell it or paste it in.
- **It does not know if someone replied.** If you do not log it, it never happened as far as the file is concerned.

## Ground rules (read these once, they are the whole kit)

1. **Only write what really happened.** Never invent a detail about a person. If you cannot remember whether her daughter is five or seven, write "young daughter, age unsure."
2. **Be useful before you need anything.** The measure of a good month is not how many people replied. It is how many people you helped.
3. **Claude drafts. You decide.** Claude writes the first version of a check in. You read it and ask one question: would I actually say this out loud, in these words, to this person? If not, rewrite it or delete it. Sending something that does not sound like you is worse than sending nothing.
4. **No mass sending.** One message, one person, every time. If a message would work for ten people, it will land with none of them.
5. **Silence is fine.** Some people go quiet. That is normal and it is not a rejection. Keep the note, lower the nudge, move on.

## The person file

One markdown file per person, named after them: `<CIRCLE_FOLDER>/priya-raman.md`.

Ask Claude to create it from whatever you have: a business card photo, a LinkedIn profile you paste in, or just you talking about the conversation you had. Do not type this by hand from a blank screen.

The file below is an example, filled in for a made up person called Priya Raman.

```markdown
---
name: Priya Raman
met: 2026-07-14
where: Toronto Product Meetup, Spadina
last_contact: 2026-07-14
warmth: new
nudge_every: 4 weeks
---

# Priya Raman

## Who she is
Senior product manager at a payments company in Toronto. Grew up in Chennai,
moved here in 2019. Six years in payments, two of them on fraud tooling.

## What she cares about
Getting non technical teammates to read data properly. She says most product
decisions at her company are made on vibes and she is tired of it.
Also: she runs half marathons and talks about it happily.

## What she is working on
Rebuilding their merchant onboarding flow. The hard part is compliance
checks that take three days and kill signups.

## What we last talked about
2026-07-14, meetup. We talked about how onboarding friction looks like a
compliance problem but is often a communication problem. She laughed about
her legal team. She asked what I was building and I told her about my
target list. She said to send it to her when it is ready.

## How I can be useful
- She wanted a good article on explaining data to non technical teams.
- She mentioned she is hiring a junior PM in the fall. Not for me, but I
  might know someone.

## What I owe her
Send the target list I promised. Promised on 2026-07-14. Not sent yet.

## Notes
Do not mention her current company by name in public posts. She was
careful about that.
```

Field notes:

- `warmth`: use `new`, `warm`, `cooling`, or `quiet`. Plain words, no scores. A person is not a number.
- `nudge_every`: how often it makes sense to be in touch with this specific person. A new contact might be 4 weeks. A close friend from a past job might be 4 months. Set it by the relationship, not by a rule.
- `What I owe her`: the most important section. Unkept small promises are the fastest way to go cold.

## Phase 1: Capture, within 24 hours

Right after you meet someone or have a real conversation, run this. Memory decays fast and a week later you will only remember their job title, which is the least interesting thing about them.

Say to Claude:

> Add to my warm circle. I met Priya Raman tonight at the Toronto Product Meetup. She is a senior PM in payments, moved from Chennai in 2019. She is frustrated that decisions at her company get made without data. She is rebuilding merchant onboarding and compliance checks take three days. She runs half marathons. I promised to send her my target list.

Claude should:
1. Create or update the person file in `<CIRCLE_FOLDER>`.
2. Sort what you said into the right sections.
3. Ask you up to three questions about things that are missing and worth knowing. Not twenty questions. Three.
4. Never fill a gap with a guess.

## Phase 2: The weekly read

Nothing will remind you. Claude cannot start a conversation, and no notification is coming. This works because once a week you sit down and ask. Put a 15 minute slot in your own calendar. That slot is the whole system.

Ask Claude:

> Read my warm circle. Who have I not spoken to in a while, and is there anything I could actually be useful about?

Claude reads every file, compares `last_contact` with `nudge_every`, and gives you a short read. For each person:

- How long it has been.
- What you promised them and have not done.
- The most useful thing you could do for them right now, based on what is in their file.

An unkept promise comes first, always. Someone you owe nothing to and have nothing useful for does not belong on this week's list, whatever the date says. Do not reach out empty. That is the habit this kit exists to break.

This is a read on people you have been quiet with. It is not a queue and it is not a follow up list. If the read comes back with three names and none of them make you think "oh, I should tell her about that", the right answer is to close the file and go find something worth sharing.

## Phase 3: The draft

Pick one person. Ask Claude:

> Draft a check in to Priya. Read her file first.

The draft must follow these rules:

- Short. Four or five sentences at the most.
- It opens with the specific thing, not with "I hope you are well."
- It gives something: an article, an introduction, a piece of news she would want, an answer to something she was stuck on. If Claude cannot find a genuine thing to give, it should say so and suggest you wait.
- It asks nothing. No favour, no meeting request, no "any openings?"
- It sounds like a person, not a template.
- It never uses anything from `<PRIVATE_NOTES>`.

A good draft looks like this:

> Hi Priya, that thing you said about decisions getting made on vibes stuck with me. I came across this piece on writing data for people who do not read charts and thought of your legal team straight away. [link]
>
> Also, here is the target list I promised you. Still rough, but you asked to see it.
>
> How is the onboarding rebuild going? Three days for a compliance check still sounds painful.

Notice what it does not do. It does not mention that you are job hunting. It does not ask her for anything at all. She already knows you are looking. You told her in July.

## Phase 4: The rejection step (do not skip this)

Read the draft out loud.

Ask yourself the only question that matters: **would I say this, in these words, to this person's face?**

If any part makes you wince, it is not yours yet. Common problems and what to do:

| Problem | Fix |
|---|---|
| Too formal, sounds like a cover letter | Say it the way you would in a voice note, then type that |
| Too warm for how well you know them | Cut the warmth down one level |
| The "gift" is generic, any link would do | Do not send. Wait until you have something real |
| It secretly asks for something | Cut the ask. Send the give on its own |
| It uses words you never use | Replace them with your words, even if they are simpler |

Rewrite it yourself. Then send it from your own email or LinkedIn. Claude does not send messages for you. You send them, because you meant them.

## Phase 5: Log it, right away

After you send, tell Claude:

> Logged: sent Priya the data article and my target list, 2026-08-04.

Claude updates `last_contact`, moves the promise out of `What I owe her`, and adds a line under `What we last talked about`. If she replies, log that too, including anything new you learned about her. The file is only as good as the last time you fed it.

## A full worked example

**This is an example. Marco and Priya are made up people, invented to show the shape of a real run over months. Nothing here is a real person, a real company, or a promised outcome.**

**January.** Marco meets Priya at a meetup in Toronto. He has been in Canada for eight months and has sent 140 applications. That night he opens Claude and talks for two minutes about the conversation. Claude writes her file. He promises nothing except a target list.

**February.** He sits down on a Sunday and asks for the weekly read. It comes back saying he has not spoken to Priya in a month and still owes her the list. He sends it with one line about her legal team problem. She replies with three companies he had not thought of and a note that his list is missing Canadian insurance companies, which hire heavily for the exact thing he does. He logs it. Her file now has a section called "What she is working on" with a new line about a fraud project she mentioned in the reply.

**April.** He reads something about fraud tooling at small merchants. He sends it with two sentences. No ask. She replies "this is exactly the thing." He logs it.

**June.** Priya messages him. Her company opened a PM role on the onboarding team and she has already mentioned his name to the hiring manager. He never asked once.

That is five months and four short messages. It works because none of them were about him.

Be honest with yourself about the timeline. It usually takes months, not weeks. Some people never come back to you, and that is normal.

## The room catalogue (optional, for people who go to events)

Most people meet others in rooms: meetups, panels, workshops, community groups. Then they forget
which rooms were worth it, and go back to the wrong ones.

If the person wants this, keep one file at `rooms.md` beside the person files. One line per event
they attend.

```markdown
| Date | Event | Type | Who was there | Who I met | Again? |
|---|---|---|---|---|---|
| 2026-09-14 | Toronto Product Meetup | Practitioner | Mid level PMs, two hiring managers | Priya (payments), Dan (organiser) | Yes |
| 2026-09-22 | Fintech panel night | Industry | Senior, lots of recruiters | Nobody, arrived late | Not alone |
```

The four types, so the Type column means something:

- **Practitioner.** Peers doing the job. Best for honest answers about what local teams are really like.
- **Industry.** Panels and industry nights. Hiring managers turn up. Higher value, lower warmth.
- **Workshop or class.** You are seen working, which is worth more than being seen networking.
- **Community.** Newcomer and affinity groups. Warm, high trust, most overlooked.

Rules for this file:

1. **Fill it the same night, in two minutes.** A catalogue written a week later is fiction.
2. **Anyone worth remembering gets a person file too.** The catalogue records the room. The person
   files record the people. Do not let names live only in this table.
3. **The Again column is the whole point.** After three months they can see which kinds of room
   actually produce conversations for them, and stop attending the ones that do not.

When asked to find events, be honest: you cannot browse listings reliably, and any list you produce
from memory will be out of date or invented. Instead, help them work out which platforms their
industry uses locally, and suggest they follow 3 to 5 organisers rather than chasing individual
events, because organisers keep producing rooms. Never invent an event name, a date, or a venue.

**Say this once, plainly:** going to events is not networking. It is how you meet people. This kit is
what stops those meetings evaporating by Friday.

## What this kit is not

- **Not a sales pipeline, in any form.** No stages, no leads, no conversion, no follow up cadence, no counting. If you find yourself counting replies as wins and silence as losses, you have turned people into numbers. Stop and reread the ground rules. Claude must never write about these people in sales language either, not in a file and not in a summary.
- **Not a way to reach many people fast.** Ten people you actually know beats four hundred connections who would not recognise your name.
- **Not automatic.** Claude cannot know what is genuine. Only you know that. Claude drafts and remembers what you told it. You decide and you send.
- **Not a replacement for being interested in people.** If you are not curious about what someone is working on, no file will fake it for you.
- **Not a record you should keep about anyone.** These are private notes about people who did not agree to be written about. Keep the folder on your own machine, do not share it, and never write anything you would be ashamed for that person to read.

## Where you have to use your own judgement

Claude can hold the details. These parts are yours and cannot be handed over.

- **Whether a thing is genuinely useful or just an excuse to message.** You know the difference. Claude cannot feel it.
- **Whether you are actually close enough to say that.** Warmth that runs ahead of the real relationship reads as fake.
- **What is private.** Someone told you something in confidence. It goes in the file for your memory and it never goes anywhere else. Claude cannot tell which detail was said in confidence unless you mark it.
- **Whether to write a file about someone at all.** A doctor, a therapist, a person from a support group. Some relationships should not be documented. Use your sense.
- **When to stop.** If the weekly read starts to feel like homework, the relationship part has already left. Take a month off. The people will still be there.

## When something goes wrong

- **You have not touched the folder in two months.** That is fine. Do not try to catch up on twenty people. Pick the two you actually miss and start there.
- **Someone did not reply.** Do not send a follow up asking why. Set `warmth: quiet`, set `nudge_every` to 3 months, and let it rest. If you find something genuinely useful for them later, send that.
- **You feel awkward messaging out of nowhere.** Say so in the message. "This is out of nowhere, but I saw this and thought of you" is a real sentence that real people use.
- **Your English feels too simple for a professional message.** Simple is better. Short, clear sentences read as confident. Long, decorated sentences read as nervous. Do not let Claude add words to make you sound impressive.
