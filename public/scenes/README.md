# Scene artwork — how to swap images yourself

Every scroll scene keeps its artwork in its own folder here. The animation code
never depends on what's inside the image, only on the file name — so replacing
a scene's art is drag-and-drop:

1. Make or generate your image (recommended: 1536×864 or larger, 16:9, JPG).
2. Name it `bg.jpg` and drop it into the scene's folder, replacing the old one.
3. Refresh the page. Done — no code changes.

| Scene | Folder | What the image should contain |
|---|---|---|
| Yankari (F7) | `scenes/yankari/` | Empty dusk landscape, low flat horizon in the bottom third, open sky. No sun, animals or vehicles — those are animated layers drawn on top. |

Tips for good plates:
- Keep the horizon in the **bottom third** — the sun element travels through the sky.
- Leave the **sky empty** — big type and the sun live there.
- Avoid baked-in animals/vehicles so they don't clash with the animated ones.
