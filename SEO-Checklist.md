# SEO Architecture & Knowledge Graph Checklist

**Project:** DuskyMoon Productions
**Target:** Flawless indexing and linking to `kxrn.is-a.dev`

## 1. Global Meta Tags (Inside `src/app/layout.tsx` Metadata API)
The agent MUST implement these exact values using Next.js Metadata API:

*   **Title Template:** `%s | DuskyMoon Productions`
*   **Default Title:** `DuskyMoon Productions - The Future of Sound`
*   **Description:** `Independent record label founded by Kxrn. Shaping the sound of tomorrow.`
*   **Keywords:** `DuskyMoon Productions, Kxrn, Chitresh Gupta, Karan Gupta, Record Label, Music Producer, Delhi, Independent Music, Ankit`
*   **Author:** `Kxrn (Chitresh Gupta)`

## 2. Open Graph (OG) & Twitter Cards (Social Sharing)
When links are shared on Instagram, Twitter, or Discord, this metadata must trigger.

*   **og:title:** `DuskyMoon Productions`
*   **og:description:** `The official record label founded by Kxrn.`
*   **og:url:** `https://[YOUR_DOMAIN].com`
*   **og:site_name:** `DuskyMoon Productions`
*   **og:image:** `/assets/og-image-duskymoon.jpg` (Must be 1200x630px, dark theme, high contrast).
*   **twitter:card:** `summary_large_image`
*   **twitter:creator:** `@kxrn_gupta`

## 3. Crawler Control (Public Folder)
The agent must generate or ensure these files exist in `/public`:

- [ ] **`robots.txt`**: 
  ```text
  User-agent: *
  Allow: /
  Sitemap: https://[YOUR_DOMAIN].com/sitemap.xml