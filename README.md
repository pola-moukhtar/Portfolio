# Pola Mokhtar — Portfolio

Personal portfolio built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion + React Icons**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── assets/
│   ├── images/          ← Add your photos here
│   ├── gifs/            ← Add your GIF files here
│   └── certificates/    ← Add certificate images here
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── SectionTitle.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Button.tsx
│   └── project/
│       ├── ProjectCard.tsx
│       ├── ProjectTabs.tsx
│       └── ProjectModal.tsx
│
├── sections/
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Services.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── About.tsx
│
├── data/
│   ├── projects.ts      ← Add/edit projects here
│   ├── skills.ts        ← Add/edit skills here
│   ├── experience.ts    ← Add/edit experience, services, about chapters
│   └── certificates.ts  ← Add/edit certificates here
│
├── hooks/
│   └── useTheme.ts
│
├── types/
│   └── project.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## How to Update Content

### Add a new project
Edit `src/data/projects.ts` — add a new object to the `projects` array.

### Add a new skill category
Edit `src/data/skills.ts` — add a new object to the `skillCategories` array.

### Add a certificate
Edit `src/data/certificates.ts` — add a new object to the `certificates` array.

### Replace GIFs
- **Hero GIF**: `src/sections/Hero.tsx` — change the `src` on the `<img>` tag
- **Skills GIF**: `src/sections/Skills.tsx`
- **Projects GIF**: `src/sections/Projects.tsx`
- **Experience GIF**: `src/sections/Experience.tsx`
- **Services GIF**: `src/sections/Services.tsx`
- **About chapter GIFs**: `src/sections/About.tsx` → `CHAPTER_GIFS` object at the top

Or drop your GIFs into `src/assets/gifs/` and import them:
```tsx
import myGif from '../assets/gifs/my-animation.gif'
// Then use: <img src={myGif} ... />
```

### Change accent color
Edit `tailwind.config.js` → `theme.extend.colors.accent.DEFAULT`
And update `src/index.css` → `--accent` CSS variable.

---

## Theme
- Light mode is the default
- Dark mode toggled via the moon/sun button in the navbar
- Preference is persisted to `localStorage`
- Respects OS `prefers-color-scheme` on first visit

---

## Tech Stack
| Tool | Version |
|------|---------|
| React | 18 |
| TypeScript | 5 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Framer Motion | 11 |
| React Icons | 5 |
