# PowerVet - Feline Veterinary Medicine Landing Page

PowerVet is a modern, high-performance landing page for a feline-focused veterinary clinic. It emphasizes a refined, calm, and professional aesthetic tailored for cat owners.

## Project Overview

- **Core Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4.
- **UI Components:** [HeroUI](https://heroui.com/) (formerly NextUI) for accessible, styled components.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for advanced scroll-driven and entry animations.
- **Icons:** [Phosphor Icons](https://phosphoricons.com/) (React).
- **Tooling:** [Biome](https://biomejs.dev/) for fast linting and formatting.

## Architecture

- `src/app/`: Next.js App Router structure. `layout.tsx` handles global configuration (fonts, metadata) and `page.tsx` is the entry point.
- `src/components/sections/`: Modular components representing each vertical slice of the landing page (Hero, Services, Testimonials, etc.).
- `src/hooks/`: Custom React hooks (e.g., `useScrollSpy` for navigation state).
- `src/lib/`: Library configurations and shared animation utilities (e.g., `motion.ts`).
- `src/utils/`: General-purpose helper functions.
- `public/content/`: Organized assets including logos, background images, and videos.

## Development Workflow

### Key Commands

- `pnpm dev`: Start the development server with Hot Module Replacement.
- `pnpm build`: Create an optimized production build.
- `pnpm start`: Run the production server.
- `pnpm lint`: Execute Biome linting and static analysis.
- `pnpm format`: Automatically format code using Biome.

### Coding Conventions

1.  **Code Organization:** Use `//#region` and `//#endregion` comments to group related code (Imports, Types, Animations, Hooks, etc.).
2.  **Client-Side Logic:** Use `"use client"` at the top of components that require interactivity (Framer Motion, hooks).
3.  **Styling:** Leverage Tailwind CSS 4 utility classes directly in JSX. Follow the existing spacing and typography patterns (Manrope for sans-serif, Libre Baskerville for serif).
4.  **Animations:** Prefer Framer Motion's declarative API. Use `variants` for complex stagger effects.
5. **Quality Standards:** All code must pass `pnpm lint` and `pnpm format` before being committed. Biome is configured to use 2-space indentation.
6. **Assets:** Reference images and videos from the `public/content/` directory using absolute paths.
7. **UI Style:** Do not use technical or clinical reference IDs (e.g., REF-DOC, ID: CLIN-PHIL) in the user interface. Keep the design professional and medical without artificial numbering or code-like labels.


## Design System

- **Typography:**
  - Sans-serif: `Manrope` (Variable)
  - Serif: `Libre Baskerville` (Italic usage for emphasis)
- **Colors:** Managed via Tailwind's theme (likely using CSS variables in `src/app/globals.css`).
- **Layout:** Optimized for high-resolution displays with a max-width container (`max-w-400` equivalent to 1600px).
