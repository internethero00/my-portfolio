# Egor Grushin — Portfolio

Personal one-page portfolio built with React 19, TypeScript, Vite 7, and Tailwind CSS 4.

## Features

- Responsive, mobile-first layout with sticky header and burger menu
- Dark / light theme toggle (system default + localStorage)
- RU / EN language toggle (browser detection + localStorage)
- Skills grouped by category with SVG icons
- Project cards with tag filter and search
- Experience timeline
- Contact links with icons
- Smooth scroll, subtle animations, accessible focus states

## Tech stack

| Layer      | Tech                                        |
|------------|---------------------------------------------|
| Framework  | React 19 + TypeScript                       |
| Build      | Vite 7 + `@vitejs/plugin-react`             |
| Styling    | Tailwind CSS 4 (`@tailwindcss/vite` plugin) |
| Icons      | lucide-react                                |
| i18n       | Custom lightweight dictionary + hook        |

## Prerequisites

- **Node.js** >= 18
- **npm** >= 9

## Getting started

```bash
# Install dependencies
npm install

# Start dev server with HMR
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command             | Description                                  |
|---------------------|----------------------------------------------|
| `npm run dev`       | Start Vite dev server with hot reload        |
| `npm run build`     | TypeScript type-check (`tsc -b`) + Vite build |
| `npm run preview`   | Serve the production build locally           |
| `npm run lint`      | Run ESLint on all TS/TSX files               |

## Project structure

```
src/
  components/    UI components (Header, Footer, cards, toggles)
  sections/      Page sections (About, Skills, Projects, Experience, Contact)
  data/          Typed data models (skills, projects, experience, profile)
  i18n/          Translation dictionaries (en.ts, ru.ts) + useTranslation hook
  lib/           Utility hooks (useTheme)
public/
  icons/         Skill SVG icons organized by category
```

## Build for production

```bash
npm run build
```

Output is written to `dist/`. This is a static SPA — no server required.

## Deploy

### Netlify

**Option A — Git integration (recommended):**

1. Push your repo to GitHub / GitLab / Bitbucket
2. Go to [app.netlify.com](https://app.netlify.com) and click **"Add new site" > "Import an existing project"**
3. Connect your repo and configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy**

**Option B — CLI:**

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Vercel

**Option A — Git integration (recommended):**

1. Push your repo to GitHub / GitLab / Bitbucket
2. Go to [vercel.com/new](https://vercel.com/new) and import your repo
3. Vercel auto-detects Vite — defaults are correct:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**

**Option B — CLI:**

```bash
npm install -g vercel
npm run build
vercel --prod
```

### Other static hosts

Any static hosting works. Just run `npm run build` and serve the `dist/` folder. Set up a redirect rule so all routes serve `index.html` (SPA fallback):

- **`dist/_redirects`** (Netlify): `/* /index.html 200`
- **`vercel.json`** (Vercel): `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`

## License

Private project.
