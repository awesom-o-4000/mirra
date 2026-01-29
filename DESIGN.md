# Design System - Mirra

## 1. Visual Identity
**Theme**: Premium, Dark, Immersive ("The Digital Mirror").
**Inspiration**: High-end fashion apps, TikTok, Instagram Reels.

### Color Palette
- **Background**: `#000000` (True Black for OLED/Immersive feel)
- **Surface**: `rgba(255, 255, 255, 0.1)` (Glassmorphism)
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#A1A1A1`
- **Accent**: `#FFFFFF` (Minimalist accent - let the photos shine)
- **System Red**: `#FF3B30` (Notifications/Alerts)
- **System Blue**: `#007AFF` (Links/Actions)

### Typography
- **Primary Font**: `SF Pro Display` (System Font Stack).
- **Weights**:
    - **Bold** (700) for Headlines/Prices.
    - **Regular** (400) for Body.
    - **Medium** (500) for UI Elements.

## 2. Components

### A. The Feed Card (Full Screen)
- **Container**: 100vh height.
- **Image**: Cover fit, centered.
- **Overlays**:
    - **Right Side**: Vertical action bar (Profile, Like, Shop, Share).
    - **Bottom**: Caption, Tags, Music ticker.

### B. Action Bar Icons
- **Size**: 44x44px touch target.
- **Icon Size**: 28px.
- **Style**: White stroke, optional fill on active state.
- **Assets**:
    - `icon-big-heart.svg`
    - `icon-big-tag.svg` (Shopping)
    - `icon-small-share.svg`

### C. Inner Product Page (Bottom Sheet)
- **Behavior**: Slides up from bottom (85% height).
- **Background**: Blurred Translucent Black (`backdrop-filter: blur(20px)`).
- **Content**:
    - Product Carousel.
    - Title & Price (Large, Bold).
    - "Buy Now" Button (Full Width, White Background, Black Text).
    - "Add to Wishlist" (Secondary Button).

## 3. Motion
- **Scroll**: Snap scrolling (mandatory).
- **Transitions**: Smooth eases (`cubic-bezier(0.33, 1, 0.68, 1)`).
- **Micro-interactions**: Heart pulse on like.
