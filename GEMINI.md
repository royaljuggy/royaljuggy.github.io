# Personal Portfolio Maintenance Guide

This document tracks the structure and update instructions for your personal portfolio. **After each prompt or change to this repository, this file should be updated to reflect the current state.**

## Project Overview
- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS v4 (CSS-based configuration)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Actions (to GitHub Pages)

## Site Structure
The website is a Single Page Application (SPA) with the following tabs:
1.  **Home (`/`):** Personal intro, professional summary (Geotab/Tokyo), academic achievements (Dean's Honours, Japanese Certificate), and a comprehensive, categorized Skills & Expertise section.
2.  **Experience (`/experience`):** Detailed career timeline (Geotab FT, Japan Internship, Waterloo internships, TA roles).
3.  **Projects (`/projects`):** Featured media/travel blogs and Waterloo coursework with real Unsplash imagery.
4.  **Hobbies (`/hobbies`):** Interactive Bento Grid with modals for Anime & Shows, K-pop (NMIXX), Gaming (CS:GO), Sports (Curling), and Awards. Includes a Spotify "Tokyo" playlist preview.

## Recent Updates (Feb 8, 2026)
- **Portfolio Project Addition:** Added "Personal Portfolio 2026" to the Projects page, featuring the site's own tech stack and repository links.
- **Favicon Update:** Changed the website favicon from the default Vite logo to a custom blue heart SVG.
- **Home Page Overhaul:** Added Dean's Honours List, Certificate in Japanese Language II (UWaterloo), and a categorized skills section (AI tools, Root-Cause Troubleshooting).
- **Full Career Sync:** Integrated 8+ roles from Resume and LinkedIn into the Experience timeline.
- **Projects Revamp:** Featured "Anime & Media Blog" and "Japan Internship Blog" (8 months) with correct links and royalty-free imagery.
- **Interactive Hobbies:** Built a modern Bento Grid with `framer-motion` modals and Spotify embeds.
- **Performance:** Optimized rendering to remove double-renders and UI "blinking" during transitions.
- **Tone & Style:** Reworded all content to a natural, simple typing style using semi-colons (;) instead of em-dashes.

## How to Update Content

### Home Page (`src/pages/Home.tsx`)
- Update the bio text in the `<p>` tags within the first `section`.
- Modify the Skills & Expertise lists in the dedicated skills `section`.

### Experience (`src/pages/Experience.tsx`)
- Modify the `experiences` array at the top of the file.
- Add/Remove roles as needed; the UI handles the timeline rendering automatically.

### Projects (`src/pages/Projects.tsx`)
- Modify the `projects` array.
- Use Unsplash URLs for high-quality, royalty-free imagery.

### Hobbies (`src/pages/Hobbies.tsx`)
- Edit the `hobbies` array. 
- Each object supports `details` (array for modal), `tags`, `stat`, and `badge`.

## Deployment
Any push to the `main` branch will trigger the GitHub Actions workflow defined in `.github/workflows/deploy.yml`. The site will be built and deployed to the `gh-pages` branch automatically.

---
*Last Updated: February 8, 2026 (Added Portfolio project to Projects page)*
