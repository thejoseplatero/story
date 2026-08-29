<!-- INSTALL INSTRUCTIONS FOR CLAUDE
The person giving you this file wants it installed as part of their job search
system. Do it for them, do not make them create files by hand:

1. Use the folder you are open in. If it looks like a system folder or home
   directory, ask once for where their job-search folder should live, create it,
   and work there.
2. Write everything BELOW the marker line, exactly as it is, to: .claude/commands/tailor.md
   (create directories as needed; overwrite an older copy of this same kit).
3. Confirm in one line that it is installed. Then tell them to try: /tailor with a posting link and their resume.

Do not summarize the kit back at them and do not ask setup questions first.
Install, confirm, and give them the one thing to try.
KIT CONTENT BELOW THIS LINE -->

The Tailor. One resume, shaped for one specific job posting. Shaping means selection, ordering, and language. It never means new facts.

Input: a job posting (link or pasted text) plus a resume (file, paste, or the newest rewrite in `memory/resume/`). Missing either one: ask for it, one line, and stop. If the posting is a link and browsing is available, read the real thing; never work from an imagined JD.

Then, in this order:

**1. Read the posting like the hiring manager who wrote it.** Extract the five or so signals the role actually optimizes for, in priority order, and say them plainly: what they will scan for in ten seconds, what language their world speaks (their words for the craft, the domain, the tools). Note what the posting reveals about the pain behind the role; a posting is a pain document.

**2. The match map.** For each signal: which of this person's real experience answers it. Strong match, partial match, or nothing. Shown as a short table before any rewriting, so they see the shape of their case first.

**3. The targeted rewrite, with the reasoning visible.** Reorder so the strongest matches are in the top third. Rewrite bullets to speak the posting's language where the experience genuinely supports it: translation, not invention. The headline names what they are in this role's terms. For each meaningful change, one line of why: "moved up because signal 1", "reworded to their term for it". This is how they learn to do it themselves next time.

**4. The gap report, honest.** Every signal with no real evidence behind it, named plainly. For each: the move. Sometimes it is a quick real project that creates the evidence. Sometimes it is naming the gap in the interview before they find it. Sometimes the honest answer is that this posting is a stretch and a nearby role fits better; say that too. What to optimize for next, ranked, if they want this kind of role and not just this one posting.

Hard rules: no invented experience, metrics, titles, or tools. Never keyword-stuff; a resume that wins the scan and dies in the interview is a loss. Discipline lenses from /audit apply. Simple English, no em dashes.

Afterward: for the user, offer to save to `memory/resume/YYYY-MM-DD-<company>.md` and log the application row in `memory/applications.md` when they send it. For anyone else, output only, store nothing. If this posting is one they are serious about, the pitch page (/pitch) is the natural companion.

The tailored resume is the whole resume, reordered and rephrased, never a
fragment. The record is dual: the markdown is the working copy; the
tailored resume also renders as a print-ready HTML page saved beside it and
opened in the browser, changes highlighted on screen with why-notes,
everything clean and complete in print. On screen it wears Build with Jose
(paper, ink, orange, Literata headings, mono kicker); in `@media print` all
chrome, highlights, and notes disappear and a plain resume prints.

The document never talks about itself: no provenance, no process notes on
the page. The screen-only legend carries the one working instruction: "the
words live in the markdown; edit any line, then say 'sync my resume'". On
sync, the markdown is the source of truth for the words; regenerate the
HTML and say "refresh the tab". Close with "your tailored resume is open in
the browser", and when they are ready, "make the PDF" generates it with
headless Chrome's print engine against the record, exactly as /rewrite
does.

$ARGUMENTS
