# Nexcent Landing Page — SDE-1 Assessment Implementation

A pixel-accurate, fully responsive, server-rendered implementation of the Nexcent landing page built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, strictly following the provided Figma design specs and design system tokens.

---

##  Key Architectural Highlights

- **100% Data-Driven Content:** Zero hardcoded copy in presentation components. All text, images, CTA links, section items, stats, testimonials, and navigation links flow from a centralized, typed JSON data store (`src/data/landing-page.json`).
- **Server-First Component Model:** All section layouts are React Server Components by default. Client components (`MobileMenu.tsx`) are strictly limited to interactive browser-side features.
- **Pixel-Accurate Figma Alignment:** Custom design tokens mapped in `app/globals.css` (`--color-brand-primary`, `--font-size-h1`, `--radius-card`, etc.) matching the design specification (`design.md`).
- **Fully Responsive Layout:** Verified smooth adaptability across all standard breakpoints down to 360px mobile viewports without horizontal scrolling or content clipping.
- **Accessible & Semantic HTML:** Built with HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), keyboard navigation, ARIA attributes, and optimized self-hosted Google Fonts (`Inter`).

---

##  Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript (Strict Type Checking)
- **Styling:** Tailwind CSS v4 & CSS Variables (`globals.css`)
- **Typography:** `next/font/google` (Inter font family)
- **Media Optimization:** `next/image` with SVG/PNG asset optimization

---

##  Project Structure

```text
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Custom CSS tokens & Tailwind directives
│   ├── layout.tsx          # Root layout with Inter font injection & Metadata
│   └── page.tsx            # Root Server Component assembling JSON-driven sections
├── src/
│   ├── components/
│   │   ├── layout/         # Navigation & Footer components
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── sections/       # Modular section components
│   │   │   ├── BlogSection.tsx
│   │   │   ├── ClientShowcase.tsx
│   │   │   ├── CommunitySection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── FeatureSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   └── TestimonialSection.tsx
│   │   └── ui/             # Atomic reusable primitives
│   │       ├── Button.tsx
│   │       └── SectionHeader.tsx
│   ├── data/
│   │   └── landing-page.json # Single source of truth for landing page content
│   ├── lib/
│   │   └── utils.ts        # Tailwind class merge helper
│   └── types/
│       └── landing-page.ts # TypeScript interfaces for content schema
├── public/
│   └── images/             # Standardized visual assets exported from Figma
│       ├── articles/
│       ├── features/
│       ├── hero/
│       ├── icons/
│       ├── logos/
│       └── testimonial/
├── design.md               # Visual design tokens & layout specifications
├── README.md               # Assessment documentation
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS configuration
└── package.json
```

---

## Local Development Setup

### 1. Prerequisites
Ensure Node.js `v18.x` or higher and `npm` are installed on your machine.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/eshwarrao123/simplilearn-assignment
cd simplilearn-assignment
npm install
```

### 3. Development Server
Run the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Verification & Build Commands

- **Code Formatting & Linting:**
  ```bash
  npm run lint
  ```
- **TypeScript Type Checking:**
  ```bash
  npx tsc --noEmit
  ```
- **Production Build:**
  ```bash
  npm run build
  ```

---

## Figma Source & Reference
- **Figma Design File:** [Minimal Landing Page Design | Community](https://www.figma.com/design/NX5vl6kszVZ0OFVLAKJtSn/Minimal-Landing-Page-Design-%7C-Website-Home-Page-Design-%7C-Agency-Website-UI-Design--Community-?node-id=213-948)
- **Node Identifier:** `213-948`
