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
1.  **Home (`/`):** Introduction, profile picture, social links, and recruiter-focused summary.
2.  **Experience (`/experience`):** Professional timeline with tenure, location, tech stack, and duties.
3.  **Projects (`/projects`):** Grid display of personal works with links and tags.
4.  **Hobbies (`/hobbies`):** A narrative section with photos and personal stories.

## How to Update Content

### Home Page (`src/pages/Home.tsx`)
- Update the name in the `h1` tag.
- Replace the bio text in the `<p>` tag.
- Replace the `src` of the profile image placeholder.
- Update social links in the `href` attributes of the icon buttons.

### Experience (`src/pages/Experience.tsx`)
- Modify the `experiences` array at the top of the file.
- Each object should have: `company`, `role`, `tenure`, `location`, `stack` (array), and `duties` (array).

### Projects (`src/pages/Projects.tsx`)
- Modify the `projects` array.
- Each object should have: `title`, `description`, `image`, `tags` (array), `github` link, and `demo` link.

### Hobbies (`src/pages/Hobbies.tsx`)
- Edit the sections within the `Hobbies` component.
- Each section follows a similar pattern with an icon, heading, and description.
- Replace placeholder image URLs (`https://via.placeholder.com/...`) with actual image paths or URLs.

## Deployment
Any push to the `main` branch will trigger the GitHub Actions workflow defined in `.github/workflows/deploy.yml`. The site will be built and deployed to the `gh-pages` branch automatically.

---
*Last Updated: February 3, 2026*
