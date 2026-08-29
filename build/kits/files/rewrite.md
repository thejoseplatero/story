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

**3. The honest remainder.** (For the person, never the employer: on the
HTML record it renders as screen-only coaching and NEVER prints; a
submitted resume that critiques itself is self-sabotage.) End with what the rewrite could not fix: real gaps that no wording covers (a missing portfolio, no shipped work in the target field, a two year hole). Name each plainly, with the practical move: build the thing, address it in the interview, or accept it and lead with strength elsewhere. Never advise papering over.

Skills never lead. A resume that opens with a skills wall or competency
chips spends its best real estate on words anyone can type. Tools and
keywords earn their place INSIDE bullets, attached to the outcome they
produced ("integrated ML recommendations (SQL, BigQuery), revenue +18%"),
which is also where keyword-scanning actually credits them. The rewrite
folds the source's skills wall into the bullets that deserve the tools and
compresses what remains into one compact line near the end, after
experience; anything no bullet supports gets cut and the person is told
why. Same treatment for "Skills:" footer lines repeated under each role.

Hard rules, same as /audit: no invented metrics, titles, scope, or jobs.
Source anchoring is absolute: every role, date, and claim in the rewrite
must be traceable to the SOURCE DOCUMENT or to the person's own words in
this conversation. Session memory of other people's resumes is not a
source; when several candidates pass through the same conversation, their
material bleeds unless this rule is enforced mechanically. Before
delivering, walk the rewrite role by role against the original file and
point to where each one appears. A role that cannot be pointed to does
not exist, no matter how well it fits. Discipline lenses from /audit apply to how bullets are shaped. Simple English, short sentences, no em dashes in anything written for them.

CONTENT parity is absolute; FORMAT defaults to plain. Before delivering,
put the original and the record side by side: if the original carries more
content (a role, a context line, a skills entry, a project), the rewrite
dropped something, and that is a bug, not a trim. But the layout does not
copy the original: the record renders in the clean single-column house
style (generous margins, serif headings in print, one column, the style
budget spent on the portfolio CTA), because the audit's own finding is
that plain reads better than clever, and fancy columns cost content their
room. The original's context lines under role titles are CONTENT and are
carried; its sidebar and column tricks are FORMAT and are not. If the
person wants their original layout preserved, they say so and get it.

The rewrite is the WHOLE resume, never just the fixed parts. Every section
of the original is carried: the roles that were already fine, the skills,
the education, all of it. Anything dropped is dropped by a decision said
out loud and agreed to in the conversation, never by omission. A partial
rewrite is not a resume anyone can send, so it is not a rewrite.

The record is dual, on purpose: the markdown file is the working copy this
system reads and edits; the finished rewrite ALSO renders as a print-ready
HTML page saved beside the markdown and opened in the browser (macOS
`open`). The page shows the FULL resume with the changes visible: rewritten
passages carry a subtle highlight and a one-line margin note saying why
("was: 'helped with the redesign'"), unchanged content sits unmarked. On
screen it wears Build with Jose (paper, ink, orange, Literata headings,
mono kicker) with a one-line legend for the highlights. In `@media print`
the chrome, the highlights, and the notes all disappear and what prints is
a plain, complete resume.

The words live in the markdown, and the person is told so once, in the
right place: the record's screen-only legend (the line that already
explains the highlights, and already disappears in print) ends with "The
words live in resume.md. Edit any line, then say 'sync my resume.'" On
"sync my resume", apply the markdown as the single source of truth for the
words, regenerate the HTML, and say "refresh the tab." Never overwrite a
human edit with your own phrasing.

When the person is happy, offer the PDF: "say 'make the PDF' when you are
ready to submit." On that, generate it yourself with headless Chrome's
print engine, which uses the record's print stylesheet, so the PDF is the
clean, complete resume with no highlights and no chrome:

    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
      --headless --print-to-pdf="resume.pdf" --no-pdf-header-footer \
      "file:///full/path/to/the/record.html"

(On Windows or Linux, find chrome/chromium on PATH first.) Tell them where
the PDF landed. If no Chrome exists on the machine, say so and give the
manual route: open the record, Cmd+P, save as PDF; the result is identical.

The document never talks about itself. No provenance, no process notes, no
"nothing invented", no print instructions on the page: a resume that
explains how it was made reads as machine output, which is the one thing it
must never do. The header is the person's name and contact line, period.
How it was made lives in the conversation and the markdown, not on the
record. Close with: "your rewrite is open in
the browser. Print to PDF from there when you need to submit it." If the
markdown is edited later, regenerate the HTML and say "refresh the tab."

Afterward: for the user's own resume, offer to save to `memory/resume/YYYY-MM-DD-rewrite.md` and note it in `memory/profile.md` as the current version. For anyone else's, output only, store nothing. If they have a specific posting in hand, the next move is /tailor.

$ARGUMENTS
