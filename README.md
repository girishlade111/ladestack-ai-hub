# LadeStack AI Hub

A modern landing page for **LadeStack** — a hub of AI-powered development tools and free web utilities. Built with Vite, React, TypeScript, shadcn/ui, and Tailwind CSS.

## What it does

LadeStack AI Hub presents the LadeStack ecosystem: AI-powered tools for developers such as API testing, website building, file management, and more. The page includes:

- **Hero section** with product positioning and CTAs
- **Features section** showcasing the AI tool lineup
- **Demo section** giving a preview of the tools in action
- **Projects section** highlighting LadeStack projects
- **News section** with latest updates
- **Testimonials section**
- **Newsletter signup section**
- **About section** and full footer
- **Clerk authentication** for sign-in/sign-up
- **Dark/light theme toggle** (next-themes)

## Tech stack

- Vite 5 + React 18 + TypeScript
- shadcn/ui (Radix primitives) + Tailwind CSS + tailwindcss-animate
- React Router v6, TanStack Query, React Hook Form + Zod
- Clerk (@clerk/clerk-react) for authentication
- Recharts, lucide-react icons, sonner toasts

## Quick start

```sh
# install dependencies
npm install

# start the dev server
npm run dev

# production build
npm run build

# preview the production build locally
npm run preview
```

Requires Node.js 18+.

## Environment variables

| Variable | Description |
|---|---|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for authentication (get one free at [clerk.com](https://clerk.com)). The site builds and displays fine without it; sign-in buttons just won't function. |

Copy `.env.example` → `.env` (create one if missing) and fill in the values.

## Project structure

```
├── index.html          # HTML entry, meta/OG tags
├── src/
│   ├── main.tsx        # app bootstrap (Clerk provider, theme, router)
│   ├── App.tsx         # routes
│   ├── pages/          # Index (landing), NotFound
│   ├── components/     # Hero, Features, Demo, Projects, News,
│   │                   # Testimonials, Newsletter, About, Footer, Navbar…
│   │   └── ui/         # shadcn/ui primitives
│   ├── hooks/ lib/     # shared hooks & utilities
│   └── assets/         # images
├── public/             # static assets
├── supabase/           # supabase functions (optional backend)
└── vite.config.ts      # Vite config
```

## Deployment

Static output from `npm run build` lands in `dist/` and can be hosted on any static host (GitHub Pages, Cloudflare Pages, Netlify, Vercel). Example for GitHub Pages under the `/ladestack-ai-hub/` subpath — set the Vite base accordingly:

```ts
// vite.config.ts
export default defineConfig({
  base: '/ladestack-ai-hub/',
  // ...
})
```

then build and publish `dist/`.

Originally generated with [Lovable](https://lovable.dev).

---

Built by Girish Lade · [ladestack.in](https://ladestack.in)
