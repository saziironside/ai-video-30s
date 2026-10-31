# Video brief (read this first)

**Length:** 30 seconds.
**Format:** 1920x1080, 30 fps, MP4 (H.264).
**Audience:** classmates at E403 and general viewers.
**Tone:** playful, nighttime, comic-book energy.
**Content rules:**
- Fan parody. Do NOT use copyrighted images, logos, movie stills, or music.
- Draw characters as simple vector shapes (circles, rounded rectangles, lines).
- No text smaller than 40px at 1080p. No text touching screen edges (keep 60px margins).
- Every fact/narration line must be traceable to `script/script.md`.

## Technical constraints (Remotion)
- Use `useCurrentFrame()` and `interpolate()` for animation. No CSS keyframes.
- Use `Sequence` for scenes; keep each scene in its own component file.
- Use `staticFile()` for anything in `public/`.
- Prefer `spring()` for entrances.
- All audio in `public/audio/`; keep total audio under 30s.

## Deliverable
- Composition id: `Main`
- Duration: 900 frames (30s at 30fps)
- Render to `../final/video.mp4`
