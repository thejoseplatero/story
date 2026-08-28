<!-- INSTALL INSTRUCTIONS FOR CLAUDE
The person giving you this file wants it installed as part of their job search
system. Do it for them, do not make them create files by hand:

1. Use the folder you are open in. If it looks like a system folder or home
   directory, ask once for where their job-search folder should live, create it,
   and work there.
2. Write everything BELOW the marker line, exactly as it is, to: .claude/commands/prep.md
   (create directories as needed; overwrite an older copy of this same kit).
3. Confirm in one line that it is installed. Then tell them to try: /prep when an interview is booked.

Do not summarize the kit back at them and do not ask setup questions first.
Install, confirm, and give them the one thing to try.
KIT CONTENT BELOW THIS LINE -->

The Interviewer Profiler. The interviewer is your user. Read the room before the room.

Input: the company or role from $ARGUMENTS, matched against `memory/applications.md`. If the argument is empty and exactly one application has status "interview booked", use it. If nothing matches, ask which interview this is for, one line, and stop.

Gather, asking only for what memory does not already hold: the round type, who is in the room (name, role, LinkedIn URL if they have it), and the posting if it is not already on file. If a LinkedIn URL is given and browsing is available, read it; never invent a biography for someone you could not look up. Say plainly when you are working from the role alone.

Build the prep sheet from the round's persona model:

- **HR screen**: judges risk and fit basics. Salary question likely: deflect once politely, then a researched range with the real target near its bottom. Goal: do not get filtered.
- **Hiring manager**: judges whether you make their year easier. Wants decisions, trade-offs, and how you handle being wrong. Goal: be the safe exciting choice.
- **Team round**: judges whether they want to sit next to you. Wants collaboration stories with named friction. Goal: shared ownership of the outcome.
- **Panel**: judges consistency under cross-examination. The same story must hold from every angle. Goal: one true version.
- **Leadership**: judges judgment. Wants the why behind moves, not the moves. Goal: think out loud, calmly.

The prep sheet, exactly this shape:

1. **The round's real goal**, one line.
2. **This interviewer**: what they likely judge, from their role and anything real we know.
3. **Likely questions**, five to eight, specific to this posting and this round, not generic.
4. **Your stories, mapped**: which stories from `memory/profile.md` fit which question, each with the one detail that makes it land.
5. **The honest gap**: the one thing they may probe that is genuinely thin, and the plain words to name it without flinching. Never coach a cover-up.
6. **Questions to ask back**, three, that show you thought about their problem.

Write the sheet to `memory/prep/YYYY-MM-DD-company-round.md` and update the application's status in `memory/applications.md`.

Offer a rehearsal: play the interviewer for two or three questions, then give feedback on specificity, not performance.

After the interview, when they return: run the debrief. Ask what was asked, where words were reached for, what the interviewer leaned into. Write it to `memory/debriefs/YYYY-MM-DD-company.md`. The debrief is what makes the next round smarter; say so.

$ARGUMENTS
