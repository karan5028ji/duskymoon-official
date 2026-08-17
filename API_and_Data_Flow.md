# Data Flow & Local API Strategy

**Project:** DuskyMoon Productions
**Rule:** NO HARDCODING in UI components. All dynamic data must flow from local JSON stores.

## 1. Data Sources (Local Storage)
Since there is no external database, all content lives locally. The agent must create these files before building the UI pages:

*   **Location 1:** `/src/data/artists.json` (Stores Kxrn, Ankit, and future artists)
*   **Location 2:** `/src/data/releases.json` (Stores catalog like "Sapne")

## 2. Component Data Consumption Rules
When building Next.js Server Components, follow these data-fetching rules:

*   **Artist Page (`/app/roster/page.tsx`):** Must import `artists.json`. Map over the array to generate Artist Cards.
*   **Release Page (`/app/releases/page.tsx`):** Must import `releases.json`. Map over the array to generate the Discography Grid.
*   **Home Page (`/app/page.tsx`):** Must import `releases.json`, slice the array to get the top 3 most recent tracks, and display them in the "Recent Releases" section.

## 3. Type Definitions (TypeScript)
To ensure the AI agent writes clean, bug-free code, these interfaces MUST be defined in `/src/types/index.ts` and used across all components:

```typescript
// /src/types/index.ts

export interface SocialLinks {
  spotify?: string;
  instagram?: string;
  website?: string;
  appleMusic?: string;
  youtube?: string;
}

export interface Artist {
  id: string;
  name: string;
  realName?: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: SocialLinks;
}

export interface Release {
  id: string;
  title: string;
  type: 'Single' | 'EP' | 'Album';
  releaseDate: string; // ISO format YYYY-MM-DD
  coverArt: string;
  artists: string[]; // Array of artist names
  links: SocialLinks;
}