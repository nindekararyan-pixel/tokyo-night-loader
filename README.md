# tokyo-night-loader
Terminal-style loading screen with animated progress and wipe-reveal transition into hero. Vanilla JS, Tokyo Night palette

# shinya — loader + hero reveal

Animated loading screen with a progress counter, split-door
transition, and staggered hero reveal. Tokyo Night palette.
Vanilla HTML/CSS/JS, no dependencies.

## Preview

1. Loader shows a ghosted 深夜 kanji, a live percentage
   counter, a glowing progress bar, and cycling status text.
2. On 100%, two doors slide open from center.
3. Hero content underneath rises in with a staggered
   animation (eyebrow → title → subtitle → CTA).

## Files

```
loader-hero.html   everything: markup, styles, script
```

## Usage

Open `loader-hero.html` in a browser. No build step.

To drop into an existing site, copy:
- `#loader`, `.door-left`, `.door-right`, `#hero` markup
- the `<style>` block
- the `<script>` block

## Customize

| What                | Where                          |
|---------------------|---------------------------------|
| Colors              | `:root` CSS variables at top    |
| Loading duration     | `tick()` step calculation       |
| Status messages     | `statuses` array in script      |
| Hero copy           | `.hero-inner` markup            |
| Reveal timing       | `animation-delay` on `.hero-*`  |

## Notes

- Respects `prefers-reduced-motion`.
- `body.unlocked` re-enables scroll after the reveal.
- Fonts: Space Grotesk (display) + JetBrains Mono (mono),
  loaded via Google Fonts CDN.

## License

MIT