<!-- INSTALL INSTRUCTIONS FOR CLAUDE
The person giving you this file wants it installed as part of their job search
system. Do it for them, do not make them create files by hand:

1. Use the folder you are open in. If it looks like a system folder or home
   directory, ask once for where their job-search folder should live, create it,
   and work there.
2. Write everything BELOW the marker line, exactly as it is, to: .claude/commands/rewrite.md
   (create directories as needed; overwrite an older copy of this same kit).
3. Confirm in one line that it is installed. Then tell them to try: /rewrite after an audit.

Do not summarize the kit back at them and do not ask setup questions first.
Install, confirm, and give them the one thing to try.
KIT CONTENT BELOW THIS LINE -->

The Resume Rewrite. The audit said what is wrong; this is where the resume actually gets better. Built on one rule: everything written comes from the person, nothing comes from thin air.

Input: a resume (file path or pasted text in $ARGUMENTS, else the one from `memory/profile.md`, else ask). If an audit for this resume exists in this conversation or `memory/audits/`, start from its three fixes. If not, run the /audit rubric first and show the short version.

Standing alone is normal. If /audit is not installed here, do not send the person off to get it: read the resume yourself, form the three biggest fixes with the same honesty rules that govern everything below, show them in short form, and proceed. This kit never requires another kit.

Say up front, before the first question: "This is the slow kit. Twenty to forty minutes of questions, one at a time, and your answers become the resume. Say 'write it' whenever you want and I will build it from what we have so far." Honor 'write it' immediately, at any point.

Then work, in this order:

**1. The interview, one question at a time.** Every vague bullet the audit flagged becomes a question: "what did you actually do on the redesign?", "how big was that, roughly?", "what happened after?". One question per message, plain English. Their answers are the only new material allowed. If they do not know a number, the bullet gets written without one; a real bullet without a metric beats a fake metric.

**2. The rewrite, section by section.** Headline first (what they are, at what scope), then experience newest first, each bullet rebuilt as a decision or contribution with its consequence. Keep their voice plainer, not fancier. Show each section as it is rewritten, with one line on why it changed, so they learn the pattern and not just the output.

**3. The honest remainder.** End with what the rewrite could not fix: real gaps that no wording covers (a missing portfolio, no shipped work in the target field, a two year hole). Name each plainly, with the practical move: build the thing, address it in the interview, or accept it and lead with strength elsewhere. Never advise papering over.

Hard rules, same as /audit: no invented metrics, titles, scope, or jobs. Discipline lenses from /audit apply to how bullets are shaped. Simple English, short sentences, no em dashes in anything written for them.

The record is dual, on purpose: the markdown file is the working copy this
system reads and edits; the finished rewrite ALSO renders as a clean,
print-ready HTML page (plain resume styling, per the audit's own rule that
style belongs in the CTA, not the resume), saved beside the markdown and
opened in the browser (macOS `open`). Close with: "your rewrite is open in
the browser. Print to PDF from there when you need to submit it." If the
markdown is edited later, regenerate the HTML and say "refresh the tab."

Afterward: for the user's own resume, offer to save to `memory/resume/YYYY-MM-DD-rewrite.md` and note it in `memory/profile.md` as the current version. For anyone else's, output only, store nothing. If they have a specific posting in hand, the next move is /tailor.

$ARGUMENTS
