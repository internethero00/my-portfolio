# Project: Egor Grushin — Portfolio (React)

## Goal
Build a clean, modern, minimalistic one-page portfolio website (business card) for Egor Grushin.
It must be responsive, fast, accessible, and easy to maintain.

## Tech stack
- React + TypeScript
- Vite
- Tailwind CSS
- No heavy UI frameworks unless strictly necessary
- Prefer small, reusable components and typed data models

## Layout / Navigation
Header navigation items (anchor scroll):
- About
- Skills
- Projects
- Experience
- Contact

Requirements:
- Sticky header
- Smooth scrolling to sections
- Active section highlight in header (optional but nice)
- Mobile: burger menu with the same navigation items

## Theme
- Dark / light theme toggle
- Default to system preference
- Persist selection in localStorage
- Use CSS variables or Tailwind dark mode (preferred: Tailwind `class` strategy)

## Language
- RU / EN toggle
- Persist selection in localStorage
- All visible text must be translated (navigation, headings, buttons, section texts)
- Use a simple i18n approach:
    - either `react-i18next` OR a lightweight custom dictionary object
- Prefer keeping translations in `src/i18n/` or `src/locales/`

## Data-driven content (typed)
Store content in typed files under `src/data/`:
- `src/data/skills.ts`
- `src/data/projects.ts`
- `src/data/experience.ts`
- optionally `src/data/profile.ts`

UI must render from these data files (no hardcoding in components).

### Skills
Skills must be grouped by categories and rendered by category sections.
Use this structure:
- name: string
- category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools'
- icon: string (path to svg in public/)
  Example skill items:
- React, Redux, NextJS, Tailwind, CSS, HTML
- NodeJS, NestJS, Express
- PostgreSQL, MongoDB, Redis, Prisma
- Docker, GitHub Actions
- TypeScript, JavaScript, RabbitMQ, Git, GitHub

Note: Ensure correct icon paths (e.g. `/front-end/react.svg`, `/back-end/node.svg`, etc.).
If an icon is missing, create a placeholder or gracefully fallback.

### Projects
Create 3 project cards (with tags + links):
- Shop24 — https://github.com/internethero00/shop24_project
- Auth Advanced — https://github.com/internethero00/auth-advanced
- Tooly.rent — https://github.com/internethero00/tooly_rent

Each project should include:
- title
- short description (RU/EN)
- tech tags (e.g. NestJS, Prisma, PostgreSQL, React, etc.)
- links (GitHub; optional demo if not available)
  Add optional filtering by tag and search by title.

### Experience
Create two experience items:

1) Back End Developer — Tooly.rent (Contract)
- Jun 2025 – Present
- Finland · Remote
- Description (RU/EN):
    - Designed and developed backend services using NestJS with a clean modular architecture
    - Applied SOLID, DRY, KISS
    - Implemented DB schema, relations, migrations with Prisma
    - Built REST APIs, integrated RabbitMQ for async communication
    - Implemented JWT authentication with RBAC
    - Collaborated with co-founder on architecture decisions

2) Back End Developer — Upwork (Freelance)
- Sep 2024 – Sep 2025
- Haifa District, Israel · Remote
- Description (RU/EN):
    - Built full-stack web applications using Node.js / NestJS / TypeScript / React / PostgreSQL / Docker
    - Worked on pet projects and explored modern backend architecture (microservices, message queues)

## About section (copy)
English:
"Hi, I'm Egor. I'm a Backend-Oriented Full-Stack TypeScript Developer focused on clean architecture, scalable backend systems, and microservices."

Russian:
"Привет, я Егор. Я backend-ориентированный full-stack разработчик на TypeScript. Фокусируюсь на чистой архитектуре, масштабируемых backend-системах и микросервисах."

## Contact
Render contact links with icons:
- Email: egormix1703@gmail.com
- GitHub: https://github.com/internethero00
- LinkedIn: https://www.linkedin.com/in/egor-grushin-4b2548255/
- Telegram: @egormix1703
- HeadHunter: https://hh.ru/resume/a7c3e296ff0ce704350039ed1f6c7737523933

Make links open in new tab where applicable.

## UI/UX expectations
- Minimalistic, modern, recruiter-friendly
- Strong typography and spacing
- Cards for Projects and Experience
- Subtle hover states
- Accessible: keyboard navigation, focus styles, good contrast
- Performance: no unnecessary libraries, optimized assets

## Project structure suggestion
Use:
- `src/components/` (ui components)
- `src/sections/` (About, Skills, Projects, Experience, Contact)
- `src/data/` (typed data)
- `src/i18n/` or `src/locales/` (translations)
- `src/lib/` (helpers: theme, storage, scroll)
- `public/` for svg icons

## Working process
1) First propose folder structure + UI layout (wireframe-level plan)
2) Then implement step-by-step with small focused changes
3) Briefly explain key decisions
4) Do not refactor unrelated code unless necessary
5) Keep code clean and typed
