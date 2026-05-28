# Liberty of Hope Developer Documentation

Last updated: 2026-05-28

## Project Overview

Liberty of Hope is a public website for a community-based organization in Thika, Kenya that supports elderly citizens through healthcare, nutrition, advocacy, social connection, personal care, donations, volunteering, and partnerships.

The site is built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. It is currently a mostly static marketing and information site, with one client-side contact form integration through EmailJS and an optional Google Maps embed.

The main developer responsibilities are likely to be:

- Updating page content, projects, team members, partner logos, contact information, and donation details.
- Maintaining the frontend experience across desktop and mobile.
- Keeping environment variables configured for the contact form and map embed.
- Deploying the site, most naturally to Vercel or another Node-compatible host.
- Keeping reusable content in the focused `lib/` domain data modules, or moving to a CMS if the organization needs frequent non-developer updates.

## Tech Stack

- Framework: `next` 16.1.6 using the App Router.
- UI: `react` 19.2.3 and `react-dom` 19.2.3.
- Language: TypeScript.
- Styling: Tailwind CSS 4 through `@tailwindcss/postcss`.
- Animation: `framer-motion`.
- Icons: `lucide-react`.
- Utility packages: `clsx`, `tailwind-merge`, `tailwindcss-animate`.
- Linting: ESLint 9 with `eslint-config-next`.

## Local Setup

### Prerequisites

Use a recent Node.js version that supports Next.js 16 and React 19. Node 20 or newer is recommended.

### Install Dependencies

```bash
npm install
```

### Run The Development Server

```bash
npm run dev
```

Open `http://localhost:3000`.

### Build For Production

```bash
npm run build
```

### Run The Production Server Locally

```bash
npm run start
```

Run `npm run build` before `npm run start`.

### Lint

```bash
npm run lint
```

## Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

The project currently supports these public environment variables:

| Variable                                | Required                                       | Used In                | Purpose                                                          |
| --------------------------------------- | ---------------------------------------------- | ---------------------- | ---------------------------------------------------------------- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`        | Optional, but needed for live form submissions | `app/contact/page.tsx` | EmailJS service id for sending contact form messages.            |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`       | Optional, but needed for live form submissions | `app/contact/page.tsx` | EmailJS template id.                                             |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`        | Optional, but needed for live form submissions | `app/contact/page.tsx` | EmailJS public key.                                              |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` | Optional                                       | `app/contact/page.tsx` | Google Maps Embed API key.                                       |
| `NEXT_PUBLIC_GOOGLE_MAPS_QUERY`         | Optional                                       | `app/contact/page.tsx` | Place or address query for the embedded map and map search link. |

If the EmailJS variables are missing, the contact form validates input but shows a fallback message asking users to email `info@libertyofhope.org` directly.

If the Google Maps API key is missing, the contact page shows a styled fallback map panel and still provides an "Open Map" Google Maps search link.

Because all variables are prefixed with `NEXT_PUBLIC_`, they are exposed to the browser. Do not put private secrets in these variables.

## High-Level Architecture

This is a frontend-first Next.js application.

- `app/layout.tsx` defines global metadata, fonts, the shared navbar, the main page wrapper, and the shared footer.
- `app/page.tsx` composes the homepage from section components in `components/`.
- `app/*/page.tsx` files define top-level pages for About, Programs, Projects, Donate, and Contact.
- `app/projects/[id]/page.tsx` defines a dynamic project-detail route and reads project records from `lib/projects.ts`.
- `components/` contains shared and homepage section components.
- `components/Modals/DonationModal.tsx` contains the reusable donation modal opened from the navbar, footer, recent projects, and project detail page.
- `lib/` contains domain data modules and shared Framer Motion variants.
- `public/images/` contains all image assets, logos, and profile images.
- `app/globals.css` defines Tailwind import, CSS variables, theme tokens, fonts, global styles, and partner logo marquee animation.

There is no API route, database, authentication, CMS, or server-side data fetching in the current version.

## Application Routes

| Route            | File                         | Purpose                                                                                                                |
| ---------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `/`              | `app/page.tsx`               | Homepage composed from hero, intro, values, stats, impact highlights, testimonials, recent projects, and CTA sections. |
| `/about`         | `app/about/page.tsx`         | Organization story, values, and team.                                                                                  |
| `/programs`      | `app/programs/page.tsx`      | Program pillars and contact CTA.                                                                                       |
| `/projects`      | `app/projects/page.tsx`      | Project listing with status badges, links to project detail pages, and donation CTA for active/upcoming work.          |
| `/projects/[id]` | `app/projects/[id]/page.tsx` | Project detail page using the `id` from the URL and `getProjectById()` from `lib/projects.ts`.                        |
| `/donate`        | `app/donate/page.tsx`        | Full donation page with M-Pesa, bank transfer, trust indicators, and FAQs.                                             |
| `/contact`       | `app/contact/page.tsx`       | Contact information, optional Google map, and EmailJS-powered contact form.                                            |

## File And Folder Guide

```text
app/
  about/page.tsx           About page content, values, and team list.
  contact/page.tsx         Contact page UI, EmailJS form, map embed/fallback.
  donate/page.tsx          Donation page UI using shared donation data.
  globals.css              Global CSS, Tailwind theme tokens, marquee animation.
  layout.tsx               Root layout, metadata, fonts, navbar, footer.
  page.tsx                 Homepage composition.
  programs/page.tsx        Program pillar UI and program CTA.
  projects/page.tsx        Project listing page using shared project data.
  projects/[id]/page.tsx   Dynamic project detail page using shared project data.

components/
  CoreValues.tsx           Homepage care pillar renderer.
  Footer.tsx               Site footer, quick links, social links, contact display.
  Hero.tsx                 Homepage hero.
  ImpactHighlights.tsx     Homepage focus areas with alternating image sections.
  Intro.tsx                Homepage introduction.
  Modals/DonationModal.tsx Reusable donation modal.
  Navbar.tsx               Fixed navbar, mobile menu, donation modal trigger.
  RecentProjects.tsx       Homepage recent project card renderer.
  Stats.tsx                Animated impact counter renderer.
  Testimonials.tsx         Testimonials and partner logo marquee renderer.
  VisionBanner.tsx         Homepage action CTA section renderer.

lib/
  animations.ts            Shared Framer Motion variants.
  community.ts             Testimonials and partner logo data.
  contact.ts               Shared contact details for contact page and footer.
  donation.ts              Shared donation payment details and FAQs.
  home.ts                  Homepage stats, highlights, and CTA actions.
  programs.ts              Shared program/pillar data.
  projects.ts              Shared project data for listing, detail, and homepage cards.
  site.ts                  Shared logo, nav links, and social links.

public/images/
  Main site images, organization logo, partner logos, and profile images.
```

## Shared Layout And Metadata

The global layout is in `app/layout.tsx`.

It imports the Inter and Poppins Google fonts, applies global classes to the `<body>`, renders `<Navbar />` above every route, wraps page content in `<main className="grow pt-20">`, and renders `<Footer />` below every route.

The global metadata is also defined here:

- Title: `Liberty of Hope — Restoring Dignity to Every Senior Life`
- Description: community-based organization in Thika, Kenya
- Keywords: elderly care, senior citizens, Thika, donation, volunteering, and related terms

Update `metadata` in `app/layout.tsx` when the brand positioning, SEO title, or site description changes.

## Styling System

Tailwind CSS is configured through `app/globals.css`, `postcss.config.mjs`, and the Tailwind 4 `@theme inline` syntax.

Important theme tokens in `app/globals.css`:

- `--color-primary`: deep teal, used for trust/calm CTAs and headings.
- `--color-primary-light`: lighter teal.
- `--color-secondary`: slate, used for dark sections and text.
- `--color-accent`: amber.
- `--color-accent-rose`: rose, used for donate CTAs.
- `--color-warm`: soft cream.
- `--color-sage`: soft green background.
- `--font-inter`: body font.
- `--font-poppins`: heading font.

Most components use Tailwind utility classes directly. When adding new UI, prefer the existing color tokens and layout rhythm:

- Section padding is usually `py-24` or `py-24 md:py-32`.
- Page width is usually `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Cards commonly use white backgrounds, light borders, subtle shadows, and `rounded-2xl` or `rounded-3xl`.
- Donate CTAs use `bg-accent-rose`.
- Primary CTAs and emphasis use `text-primary` or `bg-primary`.

## Animation System

Shared animation variants live in `lib/animations.ts`.

Available variants:

- `fadeInUp`
- `fadeInDown`
- `fadeInLeft`
- `fadeInRight`
- `scaleIn`
- `stagger`
- `staggerFast`

Components import these variants and pass them into Framer Motion elements such as `motion.div`, `motion.h1`, and `motion.p`.

When adding animated sections, reuse the shared variants unless the animation has a page-specific reason to be different. Most sections use `viewport={{ once: true }}` so animations run once when scrolled into view.

## Navigation

The primary navigation is rendered by `components/Navbar.tsx`.

The `navLinks` array in `lib/site.ts` controls desktop and mobile navigation:

```ts
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
```

The navbar:

- Is fixed at the top of the viewport.
- Changes background/shadow after the user scrolls more than 20 pixels.
- Highlights the active route using `usePathname()`.
- Has a mobile menu powered by local React state and `AnimatePresence`.
- Opens `DonationModal` through local state.

If you add a new top-level page, update `navLinks` in `lib/site.ts`. The footer uses the same navigation data.

## Donation Experience

Donation information appears in two places:

- `components/Modals/DonationModal.tsx` for the modal.
- `app/donate/page.tsx` for the full donation page.

Current donation details live in `lib/donation.ts` and are used by both the modal and full donate page:

- M-Pesa Paybill Number: `542542`
- M-Pesa Account Number: `32419`
- Bank: `Equity Bank`
- Account Name: `Liberty of Hope`
- Account Number: `01234567890`

When donation details change, update `lib/donation.ts` and test:

- The navbar Donate button.
- The footer Donate button.
- The homepage Recent Projects support buttons.
- The project detail "Support This Cause" button.
- The `/donate` page.

## Contact Form

The contact form is implemented entirely in `app/contact/page.tsx`.

Key pieces:

- `ContactFormData` defines the form fields.
- `subjectOptions` defines the subject dropdown.
- `validateContactForm()` validates name, email, subject, and message length.
- `sendEmailJsMessage()` posts to `https://api.emailjs.com/api/v1.0/email/send`.
- `emailJsConfig` reads the three EmailJS public environment variables.
- `isEmailJsConfigured` determines whether to submit to EmailJS or show a fallback message.

EmailJS template parameters sent by the form:

- `from_name`
- `from_email`
- `reply_to`
- `phone`
- `subject`
- `message`
- `submitted_at`

The form does not use a backend route, so spam protection, rate limiting, and server-side validation are not currently present. If the contact form becomes business-critical, consider adding a server-side route, CAPTCHA or Turnstile, and structured logging.

## Google Maps

The contact page optionally embeds a Google Map.

Map configuration lives in `app/contact/page.tsx`, with the default query coming from `lib/contact.ts`:

- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY`
- `NEXT_PUBLIC_GOOGLE_MAPS_QUERY`
- `defaultMapQuery`

If the API key is present, the page renders a Google Maps Embed API iframe. If it is missing, the page renders a custom fallback panel with the configured address.

The "Open Map" link always points to Google Maps search using the configured query.

## Content Editing Guide

Reusable public content lives in focused domain files under `lib/`. Page-only copy can remain in the relevant route or component until it needs reuse elsewhere.

### Homepage

Homepage composition is in `app/page.tsx`. The sections are rendered in this order:

1. `Hero`
2. `Intro`
3. `CoreValues`
4. `Stats`
5. `ImpactHighlights`
6. `Testimonials`
7. `RecentProjects`
8. `VisionBanner`

Edit `lib/home.ts`, `lib/programs.ts`, `lib/community.ts`, and `lib/projects.ts` for reused homepage section data. Edit individual files in `components/` for layout, motion, or one-off section copy.

### About Page

Edit `app/about/page.tsx` for:

- Organization story text.
- Core values on the About page.
- Team member names, roles, and images.

The team data is in the `team` array. Team images currently reuse `public/images/profiles/pasport.webp`.

### Programs Page

Edit `lib/programs.ts` for the shared program/pillar data used by both the homepage and Programs page:

- Program titles.
- Program descriptions.
- Program icons.
- Program gradients.

Edit `app/programs/page.tsx` for:

- Bottom CTA text.

The Programs page and `components/CoreValues.tsx` both import `carePillars` from `lib/programs.ts`.

### Projects Page

Project data lives in `lib/projects.ts` and is used by:

- `components/RecentProjects.tsx` for the homepage project cards.
- `app/projects/page.tsx` for the project listing page.
- `app/projects/[id]/page.tsx` for project detail pages.

Use `getProjectById()` for detail pages and `getFeaturedProjects()` for homepage cards.

Project data is centralized in `lib/projects.ts`. When adding or changing a project, update that file and check that:

- The `id` in the listing matches the detail route.
- The image file exists in `public/images/`.
- Status values are consistent.
- Completed projects link to a meaningful story.
- Ongoing/upcoming projects open the donation modal when appropriate.

### Testimonials And Partners

Edit `lib/community.ts` for:

- Beneficiary or volunteer testimonials.
- Partner logo list.

Edit `components/Testimonials.tsx` or `app/globals.css` for partner logo marquee behavior.

Partner logo files live in `public/images/logos/`.

The marquee animation is defined in `app/globals.css` with:

- `@keyframes logo-marquee`
- `.logo-marquee`
- `.logo-marquee-track`
- `.logo-marquee-track--reverse`
- `.logo-marquee-group`
- `.logo-marquee-duplicate`

Reduced-motion users get a non-animated wrapped logo layout.

### Statistics

Stats data lives in `lib/home.ts`; `components/Stats.tsx` handles the animated counter UI.

The animated counter uses Framer Motion's `useMotionValue`, `useSpring`, and `useInView`. Each stat has:

- `label`
- `value`
- `suffix`
- `icon`
- `color`

### Footer

Edit `components/Footer.tsx` for:

- Footer donate CTA.

Edit `lib/site.ts` for the logo path, navigation links, and social links.
Edit `lib/contact.ts` for contact address, phone, email, and office hours used by both the contact page and footer.

Social links in `lib/site.ts` currently use `#` placeholders. Replace them with real URLs before launch.

## Images And Assets

All public assets are served from `public/` and referenced with root-relative paths such as `/images/hero-community.png`.

Important asset folders:

- `public/images/logo/` for the Liberty of Hope logo.
- `public/images/logos/` for partner logos.
- `public/images/profiles/` for team/profile photos.
- `public/images/` for general content imagery.

When adding an image:

1. Place it under the appropriate folder in `public/images/`.
2. Reference it with a root-relative URL, for example `/images/new-photo.jpg`.
3. Use descriptive `alt` text for meaningful images.
4. Use empty `alt=""` only for decorative images.
5. Check the image on mobile and desktop because many components use `object-cover`.

## Deployment

The easiest deployment target is Vercel because this is a standard Next.js application.

Typical Vercel deployment flow:

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project into Vercel.
3. Set the framework preset to Next.js if it is not auto-detected.
4. Use the default install command: `npm install`.
5. Use the default build command: `npm run build`.
6. Add environment variables from `.env.example` in the Vercel project settings.
7. Deploy.

For other Node hosts:

```bash
npm install
npm run build
npm run start
```

Make sure the host provides the same environment variables used locally.

## Quality Assurance Checklist

Before handing a change over, run:

```bash
npm run lint
npm run build
```

Then manually check:

- Homepage loads without console errors.
- Navbar links work on desktop and mobile.
- Mobile menu opens, closes, and does not trap the page behind it.
- Donate modal opens from the navbar, footer, project cards, and project detail page.
- `/donate` displays the correct M-Pesa and bank details.
- `/contact` validates required fields and shows a useful fallback if EmailJS is not configured.
- `/contact` sends a real EmailJS email when environment variables are configured.
- `/contact` map renders when a Google Maps API key is configured.
- `/projects` links open valid `/projects/[id]` pages.
- Partner logos render and animate unless reduced-motion is enabled.
- Images are not broken, overly cropped, or missing alt text.
- The site works at common mobile widths, especially 360px to 430px.

## Known Issues And Maintenance Notes

These are current codebase observations a future maintainer should know about:

- Social links in `lib/site.ts` currently point to `#` placeholders.
- The contact form is client-only. For stronger abuse protection and observability, add a server-side endpoint and anti-spam protection.

## Suggested Future Improvements

These are not required to run the project, but they would make long-term maintenance easier:

- Move remaining page-only content such as About page values/team into a shared module if it needs reuse elsewhere.
- Replace placeholder social links with real organization profiles.
- Add Open Graph metadata and social preview images for better link sharing.
- Use Next.js `Image` for optimized images if remote/image behavior is finalized.
- Add automated tests for contact form validation and route rendering.
- Add a CMS or structured content source if non-developers need to update projects, partners, and team members.
- Add accessibility passes for focus states, dialog semantics, keyboard navigation, and reduced-motion behavior.

## New Developer Onboarding Path

A new developer can get productive quickly by following this sequence:

1. Run `npm install` and `npm run dev`.
2. Open `http://localhost:3000`.
3. Read `app/layout.tsx` to understand global structure.
4. Read `app/page.tsx` to understand the homepage composition.
5. Open each component in `components/` while viewing the homepage sections.
6. Read `app/contact/page.tsx` carefully because it contains the most behavior: validation, EmailJS submission, environment variable handling, and map fallback.
7. Read `lib/projects.ts`, `app/projects/page.tsx`, and `app/projects/[id]/page.tsx` together to understand project routing and shared project data.
8. Review `app/globals.css` to understand colors, fonts, and logo marquee behavior.
9. Run `npm run lint` and `npm run build` before making a release.

## Ownership Notes

The project is small and approachable, with reusable public content moving into focused `lib/` domain modules. Keep new shared data in the relevant domain file unless it is truly page-only.

For urgent production fixes, start with the relevant route file in `app/` or section component in `components/`, then verify the navbar, footer, donation modal, and mobile layout before deploying.
