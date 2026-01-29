# QA Report - Mirra (Build 0.4 - Orchestrated)

## Status: 🔴 FAILED (Again)

### Findings
1.  **Icon Visibility**: The previous fix (`bg-black/20`) helps, BUT the issue might be deeper.
    *   **SVG Color**: The SVG files might have `fill="white"` hardcoded, but if they don't, they might be rendering black on black.
    *   **Next/Image**: `next/image` is tricky with SVGs. Sometimes it's better to use `img` tag for SVGs or inline them if they are simple icons.
2.  **Pathing**: The icons are in `public/assets/icons/`. The code references `/assets/icons/...`. This is correct for Next.js `public` folder.
3.  **Z-Index**: `z-50` is good, but is the container `relative`? Yes.

### Action Plan (Orchestrated)
1.  **Icon SVG Audit**: Open one SVG file and check if it has `fill="white"`. If not, or if it has `fill="currentColor"`, we need to force it.
2.  **Fallback**: Replace `next/image` with standard `<img>` tag for these icons to eliminate Next.js optimization weirdness with SVGs.
3.  **Explicit Dimensions**: Ensure width/height are explicitly set on the `img` tag.

### Loop Decision
FAIL -> Spawn Coder.
