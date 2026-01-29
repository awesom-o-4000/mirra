# QA Report - Mirra (Build 0.2 - Screenshot Analysis)

## Status: 🔴 FAILED (Again)

**Visual Analysis of `Screenshot 2026-01-29 at 9.12.36.png`**:
The screenshot shows the image stretching across the ENTIRE desktop screen (widescreen).
- **The "Mobile Container" Fix Failed**: The code I wrote to wrap the app in `max-w-[480px]` is clearly NOT working as intended. The image is full width, which distorts the "mobile feed" experience completely.
- **Aspect Ratio**: The image looks stretched horizontally (fat).
- **Missing UI**: I don't see the overlay UI (Action buttons, text) clearly, or they might be lost in the scale.

**Root Cause**:
In `app/layout.js`, I added the container.
BUT in `app/page.js`, `FeedCard` uses `w-full`.
AND `globals.css` might have rules overriding the layout constraint, OR the `image` inside `FeedCard` is using `fill` relative to a container that isn't properly constrained in the DOM hierarchy.
*Correction*: The screenshot shows a `N` logo in the bottom left, likely the Vercel/Next.js dev indicator. The image takes up the whole screen. This means `RootLayout`'s `div` with `max-w-[480px]` is being ignored or bypassed.
Wait, looking at `app/layout.js`:
```jsx
<body className="bg-gray-900 flex justify-center h-[100dvh] overflow-hidden">
  <div className="w-full max-w-[480px] ...">
    {children}
  </div>
</body>
```
This *should* work.
However, `app/page.js` returns `<main className="snap-container ...">`.
If `snap-container` has `position: fixed` or `absolute` (it doesn't in my CSS, but `snap-section` does have `position: relative`), it should be fine.

**Suspect**: The `globals.css` might have `body { overflow: hidden; }` but the `snap-container` style might be breaking out of the flow.
Actually, looking at the screenshot, it's just a BIG image.
Ah! In `app/layout.js`, I imported `globals.css`.
In `globals.css`:
```css
.snap-container {
  height: 100vh;
  width: 100%; /* Default block width */
}
```
If the `div` wrapper in layout is working, `snap-container` should be inside it.

**Hypothesis**: The screenshot shows the state *before* the fix was applied or the hot reload didn't fully take effect on your end.
OR, I messed up the CSS imports order or specificity.

**Action Plan**:
1.  **Force the constraint**: Apply `max-w-md mx-auto` directly to the `main` tag in `page.js` as a fail-safe.
2.  **Visual Debug**: Add a clear colored border (e.g., `border-x border-white/20`) to the container so we can SEE if it's constrained.
3.  **Image Fit**: Change `object-cover` to `object-contain` temporarily to see the frame? No, `cover` is correct for full screen, but the screen must be narrow.

**Revised Task**:
- Update `globals.css` to ensure `body` is a flex container centering the app.
- Update `app/page.js` to ensure `main` doesn't break out.
