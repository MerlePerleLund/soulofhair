# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 website for "Soul of Hair," a hair salon located in Waterfront, Hellerup, Denmark. The site is written in Danish and serves as a marketing and information platform for the salon.

## Development Commands

```bash
# Start development server (uses Webpack)
npm run dev

# Build for production (uses Webpack)
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

Note: Both dev and build commands explicitly use `--webpack` flag instead of the default Turbopack.

## Tech Stack

- **Framework**: Next.js 16.0.0 (App Router)
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4 (using @tailwindcss/postcss)
- **Icons**: lucide-react
- **Language**: JavaScript (JSX), no TypeScript
- **Build Tool**: Webpack (explicitly configured)

## Project Structure

```
src/
├── app/
│   ├── page.js              # Homepage with hero, services, team preview, about, contact
│   ├── layout.js            # Root layout with Geist fonts and metadata
│   ├── globals.css          # Global styles with custom color theme
│   ├── behandlinger/        # Treatments/services page
│   │   └── page.js
│   └── team/                # Team member profiles page
│       └── page.js
public/
├── logo/
│   └── _SOH_green.png      # Main logo
├── gallery/                 # Team member photos
├── intro2024.mp4           # Hero video background
└── [service images]        # klip.jpg, farve.jpg, styling.jpg, vask.jpg
```

## Architecture & Design Patterns

### Page Structure
All pages follow a consistent layout pattern:
1. Fixed header navigation with logo, nav links, and CTA button
2. Content sections with consistent styling
3. Footer with copyright

### Custom Color System
The site uses a custom color palette defined in `globals.css`:
- `primary`: #507D62 (sage green - main brand color)
- `primary-shade`: #40644e (darker green for hover states)
- `primary-light`: #85a491 (lighter green)
- `primary-tint`: #dce5e0 (very light green for backgrounds)
- `accent`: #F5B7BA (pink accent - currently unused)
- `grey`: #555
- `grey-dark`: #333

These colors are available as Tailwind classes (e.g., `bg-primary`, `text-grey-dark`).

### Component Patterns
- No separate component directory - components are inline within pages
- Consistent hover effects: `hover:scale-105` for images, `hover:shadow-xl` for cards
- All navigation uses Next.js `<Link>` component
- Images use Next.js `<Image>` component with fill or explicit dimensions

### Navigation
- Internal links to homepage sections use hash fragments (e.g., `/#hjem`, `/#services`)
- Dedicated pages use route-based navigation (`/behandlinger`, `/team`)
- All links styled consistently with `transition-colors` and hover states

## Key Features

1. **Video Hero**: Homepage uses autoplay background video (`intro2024.mp4`)
2. **Services Grid**: 4-card grid showcasing main services with images and descriptions
3. **Team Preview**: Gallery of 6 team photos on homepage, full profiles on `/team`
4. **Treatments**: Comprehensive pricing page organized by category (Klipning, Farve, Styling, etc.)
5. **Contact Form**: Non-functional form (no backend) with name, email, and message fields
6. **Responsive**: Mobile-first design with hamburger menu button (not yet functional)

## Common Tasks

### Adding a New Page
1. Create new directory in `src/app/[page-name]/`
2. Add `page.js` with default export component
3. Copy header/footer structure from existing pages
4. Add navigation link to all page headers

### Updating Team Members
Edit the `team` array in `src/app/team/page.js`. Each member needs:
- `name`, `role`, `image` (path to `/gallery/`), `description`

### Updating Treatments/Prices
Edit the `treatments` array in `src/app/behandlinger/page.js`. Structure includes category, icon (SVG), and items array with name/price.

### Adding Images
- Place in appropriate `/public` subdirectory
- Reference without `/public` prefix (e.g., `/logo/image.png`)
- Use Next.js `<Image>` component with proper width/height or fill prop

## Path Aliases

`@/*` maps to `./src/*` (configured in `jsconfig.json`)

## Known Issues

- Mobile menu button exists but has no functionality
- Contact form has no backend integration
- Dark mode CSS exists but is not used (site is light-only)
