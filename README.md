# buzzvel_test_frontend_2026

Buzzvel frontend developer tech challenge.

A Next.js 15 app (App Router) built with React 19, TypeScript, and Tailwind CSS.

## Production URL

- [lumaLearning](https://buzzveltestfrontend2026.vercel.app/)

## Requirements

| Tool | Version |
| --- | --- |
| Node.js | `^18.18.0`, `^19.8.0`, or `>= 20.0.0`. Node.js 22 LTS is recommended. |
| npm | 10 or later (ships with Node.js 20+). The repo includes `package-lock.json`; use npm, not another package manager. |

No environment variables are required.

## Run the project

Install dependencies:

```bash
npm install
```

Start the development server at [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

Production build and server:

```bash
npm run build
npm start
```

## Other scripts

| Command | What it does |
| --- | --- |
| `npm run lint` | Runs the Next.js ESLint check. |
| `npm test` | Runs the Vitest suite once. |
| `npm run test:watch` | Runs Vitest in watch mode. |

## Technical decisions

- This is a single landing page, so the UI follows Atomic Design. Atoms and molecules are reusable pieces; each page section is an organism built from them. Future changes to layout, color, or patterns stay in those shared pieces instead of one-off markup for every section, which keeps the page easier to restyle and maintain.
- Complete component styles — typography, buttons, badges, form controls, and cards — are defined once in `src/app/globals.css` with Tailwind `@apply`. Brand tokens such as color live in `tailwind.config.ts`. A visual change is made in one place and applies everywhere that component is used.
- The page is built for accessibility and performance. Structure and controls follow WCAG practices: semantic regions, associated labels, visible keyboard focus, and text alternatives for images, so people can use the page with a keyboard or assistive technology. Images declare their size, and the layout is responsive, so content stays usable without layout shifts blocking interaction.
- Search visibility is a requirement. The app sets page metadata, Open Graph and Twitter cards, a canonical URL, `robots.txt`, and a sitemap. JSON-LD describes the organization, website, page, and featured course. That structured data also supports generative engine optimization (GEO): AI answer engines can read what the page offers and cite it in related queries.
- Component tests cover atoms, molecules, and organisms with Vitest and Testing Library, including contact-form validation. There is no end-to-end suite. This is one landing page, so the useful checks are that each section renders and the form validates. Flow tests would be worth the time if the product gained multi-step journeys, real navigation between pages, or more complex form handling.

## Know gaps

- The design reference includes desktop and mobile frames only. Tablet layout is an interpolation of those two: sections stack like the mobile frame and open into the desktop arrangement at Tailwind’s `lg` breakpoint, with spacing adjusted in between where a wider screen needed it.

## AI use

- I built this project in Cursor with Grok 4.7 (medium). I stand by that choice because it matches how I work now. Directing an agent well, and reviewing what it produces, removes a large share of the mechanical work. On this project it cut the time spent on scaffolding and the first implementation by half or more.
- Cursor set up the project, read the Figma file, and produced the Tailwind tokens and a base layout. The file was not open in Dev Mode, so some measurements and styles were unreliable. Once that base existed, I reviewed the page element by element and adjusted it to match the design as closely as possible.
- AI use on this project could have gone further. Rules that include the design tokens would let an agent add new sections and components without drifting from the system. I could also add skills that create tests and components, and a skill that runs a full visual review in Cursor’s built-in browser.
