\# 30-second scene table



| # | Time (s) | Frames | Scene | On-screen action | Narration (bottom caption) | SFX (frame) |

|---|----------|--------|-------|------------------|----------------------------|-------------|

| 1 | 0.0–5.0 | 0–149 | Rooftop at night | Skyline silhouette, moon. Two heroes drop onto a rooftop from opposite sides. Title fades in above skyline. | "Two heroes. One city. No nights off." | whoosh (f20) |

| 2 | 5.0–11.0 | 150–329 | Meet | Cat hero lands; spider hero swings in and lands opposite. They face each other. Cat blushes. | "A cat with a bow. A spider with a plan. They meet in the middle." | pop (f170), whoosh (f230) |

| 3 | 11.0–18.0 | 330–539 | Trouble | A dark hooded criminal sneaks across the rooftop, drops a sack with a "$". Heroes turn to look. | "Then trouble shows up, and drops the bag." | thud (f380) |

| 4 | 18.0–25.0 | 540–749 | Teamwork | Both heroes dash from two sides. Criminal freezes. Sack returns to center. Heroes stand side by side. | "Two against one. The night never stood a chance." | whoosh (f560), ding (f700) |

| 5 | 25.0–30.0 | 750–899 | Closing | Heroes look at each other, blush circles reappear. Hands meet in the middle and hold. Moon behind them. Tagline fades in at bottom. | "Crime never sleeps. Neither do they." | ding (f800), pop (f860) |



\## Timing rules

\- Each scene's `from` = first frame listed; `durationInFrames` = last − first + 1.

\- Sum of all scenes = 900 frames = exactly 30.0s.

\- Transitions between scenes: 10-frame crossfade (no black frames).



\## Caption rules

\- Caption bar: dark rounded rect, 60% black, 40px padding, 60px from bottom edge.

\- Text: white, >= 44px, sentence case, centered.

\- Each caption stays visible for its scene duration minus 10 frames (10-frame fade in/out).

\- No overlap between captions; one caption per scene.

\- No character names in narration if that would imply copyrighted branding — use "a cat" / "a spider" in body copy; the title card may say "HELLO KITTY \& SPIDER-MAN" as a fan-parody reference.



\## Visual rules

\- Character shapes as described in `../video-brief.md`. Draw with `<div>` + `border-radius`, and `<svg>` for webs and the skyline.

\- Keep 60px margin from screen edges for all text.

\- The hand-hold in scene 5: two small rounded-rect hands meeting in the middle with a 4px gap, held for >= 2s, with blush circles visible above them.

