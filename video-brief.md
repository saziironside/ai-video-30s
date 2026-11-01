# Video brief (read this first)

**Length:** 30 seconds exactly (900 frames at 30fps).
**Format:** 1920x1080, 30 fps, MP4 (H.264).
**Audience:** classmates at E403 and general viewers.
**Tone:** playful, nighttime, comic-book energy, a warm romantic beat at the end.
**Framing:** fan parody. Hello Kitty and Spider-Man are referenced by name in narration
and on-screen text, but **all visuals are original vector shapes drawn in code**.
No Sanrio artwork, no Marvel stills, no logos, no movie music.

## Content rules
- Characters are drawn as simple vector shapes:
  - **Cat hero:** white circle head, two triangle ears, a small bow (two triangles + circle), simple body, black dot eyes, small mouth.
  - **Spider hero:** red rounded-rectangle head, two large white almond eyes, red body, blue segments, black web lines (thin strokes).
  - **Criminal:** dark grey hooded silhouette, no face details, a sack with a "$" symbol.
- **Narration is on-screen text only.** No recorded voice, no TTS.
  - Narration appears as a caption bar at the bottom of the frame:
    - A dark translucent rounded rectangle (#000 at 60% opacity), 40px padding.
    - White text, >= 44px, sentence case.
    - A caption is on screen for at least 1.4s so it can be read.
    - Keep 60px margin from left/right/bottom edges.
- Nothing should reference real crimes, real places, or real people.
- Romance is conveyed by: a shared glance, a small blush (two pink circles on cheeks), and holding hands in the final scene. Keep it gentle.

## Sound design
- Use `@remotion/sfx` only. No external audio files.
- Cues (frame numbers relative to whole video):
  - Scene 1: `whoosh` at frame 20 (heroes land).
  - Scene 2: `pop` at frame 170 (cat lands), `whoosh` at frame 230 (spider swings in).
  - Scene 3: `thud` at frame 380 (sack drops).
  - Scene 4: `whoosh` at frame 560 (dash), `ding` at frame 700 (sack recovered).
  - Scene 5: `ding` at frame 800 (blush), `pop` at frame 860 (tagline appears).
- Every scene must have at least one sfx cue wired to a frame.

## Technical constraints (Remotion)
- Use `useCurrentFrame()` and `interpolate()` for all animation. No CSS keyframes.
- Use `<Sequence>` for scenes; one component per scene in `src/scenes/`.
- Prefer `spring()` for entrances (characters, sack, caption bar).
- Composition id: **`Main`**, duration **900 frames**, fps **30**, 1920x1080.
- Register `Main` in `src/Root.tsx`.
- No external network requests at render time.

## Deliverable
- Render to `../final/video.mp4`.
- Confirm the file plays end to end and is 30.0s.