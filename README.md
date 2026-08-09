# Hari Haran — Portfolio

Full-stack freelance developer portfolio. React + Vite + Tailwind CSS + React Router + Framer Motion.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

```
src/
├── components/     Navbar, Footer, buttons, tech pills, the architecture-stack visual
├── sections/       Hero, Stats, Projects, Services, Process, About, Architecture, Client, Contact
├── pages/          Home.jsx, CaseStudy.jsx (route: /projects/:id)
├── data/           Editable content — projects, services, process, skills, nav, stats
├── App.jsx         Routes + layout shell
└── main.jsx        Entry point
```

## Before you publish

All of this lives in `src/data/` or inline in the relevant section/page — search and replace:

- `src/sections/ContactSection.jsx` — email, GitHub, LinkedIn placeholders; the form currently only
  shows a local "sent" state. Wire `submit()` to a real endpoint or a service like Formspree /
  Resend to make it live.
- `src/data/projects.js` — each project's `github` and `demo` fields are `"#"` or `null` placeholders.
- `src/components/Navbar.jsx` and `Footer.jsx` — no placeholders here, just check labels match your data.

## Notes

- Color tokens, fonts and the accent color live in `tailwind.config.js`.
- The animated layered-architecture visualization (`ArchitectureStack.jsx`) is the signature visual —
  it's reused in the hero and in the "How I Build Software" section.
- Case studies are data-driven from `src/data/projects.js` — add a new project object and a
  `/projects/:id` page is generated automatically, no new route code needed.
