# Asset manifest

**This is the canonical media registry. Any skill that needs Jose's photos or
video pulls from here and nowhere else.**

Assets live in this folder, ship with the story site, and serve publicly from
`https://joseplatero.com/assets/...`. Pages built by `target-employer` and
similar skills **stream these URLs directly**. They do not copy the files: this
folder is 114MB, and a second copy is a second source of truth that goes stale.

Labels below are verbatim from the story site's `WATCH_ITEMS` registry and the
photo `alt` attributes in `index.html`. **Never invent a title or caption for a
piece of media.** If a clip is not listed here with a label, it does not have one
yet, and the fix is to add it here, not to write one at the point of use.

Verified live 2026-08-17.

## Talks (16:9 landscape)

| Label | URL | Poster | Size |
|---|---|---|---|
| Webby Honoree | `/assets/talks/product-led-alliance-summit.mp4` | `/assets/posters/webby.jpg` | 25MB |
| Student and Teacher | `/assets/talks/why-i-teach.mp4` | `/assets/posters/why-i-teach.jpg` | 9.8MB |
| Move at Retail Speed, Even as an Airline | `/assets/talks/move-at-retail-speed.mp4` | `/assets/posters/retail.jpg` | 11MB |

## Behind the scenes

| Label | URL | Poster | Size |
|---|---|---|---|
| Design System Workshop | `/assets/behind-the-scenes/bts-1.mp4` | `/assets/posters/workshop.jpg` | 25MB |
| Teaching Product Leadership | `/assets/behind-the-scenes/bts-2.mp4` | `/assets/posters/teaching.jpg` | 2.7MB |
| Pitching Ideas | `/assets/behind-the-scenes/bts-3.mp4` | `/assets/posters/pitching.jpg` | 33MB |

## Reels (9:16 portrait)

| Label | URL | Poster | Size |
|---|---|---|---|
| Behind the Work | `/assets/reels/behind-the-work.mp4` | `/assets/posters/behind-work.jpg` | 2.6MB |
| Talking product, mid-flight | `/assets/reels/mid-flight.mp4` | `/assets/posters/mid-flight.jpg` | 3.7MB |

## Photos

Alt text is verbatim and is the only approved description of each image.

| URL | Dimensions | Alt text |
|---|---|---|
| `/assets/photos/armchair.jpg` | 683×1024 (0.67, portrait) | Jose in conversation on stage, mic in hand |
| `/assets/photos/panel-mic.jpg` | 1024×683 (1.50, landscape) | Jose speaking on the Leaders in Design panel, co-panelists beside him |
| `/assets/photos/pipeline-talk.jpg` | 1024×683 (1.50, landscape) | Jose on stage teaching the Jira-to-executive-report pipeline, the full workflow illustrated on screen |
| `/assets/photos/studio.jpg` | 1600×1200 (1.33, landscape) | Jose's teaching rig: three screens running a live BrainStation AI certification lab |

## Posters

Portrait posters are 720×1280 (0.56): `behind-work`, `mid-flight`, `pitching`,
`retail`, `teaching`. Landscape posters are 16:9: `webby` and `workshop` at
1280×720, `why-i-teach` at 1920×1080.

Every `<video>` must carry its paired poster. A video with no poster leaves a
hole when the file is slow, blocked, or unsupported.

## No portrait headshot in this folder

There is a studio shot, stage shots, and a conversation shot, but no clean
head-and-shoulders portrait on a plain ground. Builds needing a hero portrait
should use `/assets/photos/armchair.jpg` (the only portrait-orientation image) or
ask for a real headshot. Do not crop a stage photo into a fake headshot.

## Registered but missing

These are in the story site's `WATCH_ITEMS` and return **404** live. The story
site probes each file and silently hides broken slots, so nothing is visibly
wrong there, but any page that embeds them blind will ship a broken element.

| Label | Expected URL | Status |
|---|---|---|
| AI for Builders and Executives · AIAI Toronto | `/assets/talks/aiai-toronto.mp4` | 404, never uploaded |
| Panel on AI systems for the digital customer experience · Elevate, Toronto | `/assets/talks/elevate.mp4` | 404, never uploaded |

## Mixed orientations

Talks are 16:9, reels are 9:16, photos are mixed. Never lay these out at natural
size next to each other. Put them in uniform fixed-aspect wells with
`object-fit: cover` and let the well decide the shape.

## Adding an asset

1. Drop the file in the right subfolder here.
2. Add a row to this manifest with its verbatim label.
3. If it should appear on the story site's filmstrip, add it to `WATCH_ITEMS` in
   `index.html` too.
4. Deploy the story site so the public URL resolves, then re-check the URL.

The subfolder `README.md` files are older than this manifest and name files that
no longer exist. **This manifest wins.**
