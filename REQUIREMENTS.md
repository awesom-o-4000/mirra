# Requirements - Mirra

## 1. Product Definition
**Name:** Mirra (Mirra.ai)
**Tagline:** Your feed.

**Concept:**
A TikTok-style infinite scroll application where the user is the model. It leverages Generative AI (Google Gemini Nano/Flash) to create a hyper-personalized feed of the user wearing promoted fashion and lifestyle content.

### Core Experience
1.  **Onboarding ("The Casting Call")**
    *   User signs up (Google/Apple).
    *   **Biometrics**: User uploads 4 specific photos:
        *   Front Face
        *   Left Profile
        *   Right Profile
        *   Full Body
    *   **Preferences**: User selects 3 brands from a visual grid.
2.  **The Feed ("The Infinite Mirror")**
    *   Full-screen vertical scrolling feed (TikTok style).
    *   **Content**: High-definition images of the *User* wearing products.
    *   **Interactions**:
        *   **Like**: Refines the algorithm.
        *   **Shopping Tag**: Reveals the "Inner Page".
        *   **Share**: Generates watermarked content for social media.
3.  **Commerce Loop**
    *   **In-Stock**: "Inner Product Page" shows details and "Buy" button (Affiliate link -> External Browser).
    *   **Concept (Lab Edition)**: "Inner Product Page" shows "Vote" or "Add to Wishlist" (Pre-order interest).
4.  **B2B Engine ("Virtual Focus Group")**
    *   Brands upload "Virtual Collections" to test demand.
    *   Mirra sells aggregated intelligence (Dwell Time, Likes, Shares).

## 2. Technical Stack
- **Frontend**: Web Application (Mobile-First Design).
    *   Framework: React / Next.js (likely needed for complex state/pwa features) OR Vanilla if strictly requested (User asked for "web app" previously). *Decision: Use Next.js given the complexity.*
- **Styling**: Vanilla CSS (with "SF-Pro display" font).
- **Assets**: User provided "sag icons" reference (Need to locate these).
- **AI Integration**:
    *   Google Gemini Nano/Flash for image generation (Mocked for MVP? Or connected to API?).

## 3. Design System
- **Font**: SF-Pro Display.
- **Icons**: "sag icons" (User's assets).
- **Layout**: Mobile-first, full-screen vertical scroll.
- **Aesthetics**: Premium, clean, fashion-focused.

## 4. MVP Scope (Phase 1)
- [ ] **Onboarding Flow**: UI for uploading 4 photos and selecting brands.
- [ ] **Feed Interface**: Vertical scroll container.
- [ ] **Mocked Generation**: Since we might not have real-time GenAI initially, use placeholders or pre-generated images of "Ron" (the user).
- [ ] **Inner Product Page**: Overlay/Sheet with details and "Buy" button.
