# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Nuxt 3 starter template** showcasing the BubblaV AI Chatbot integration. It serves as a minimal, beautiful starting point for developers who want to add intelligent customer support to their Nuxt applications.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (port 3000)
npm run dev

# Production build
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview

# Add shadcn-vue components
npm run add <component-name>
```

## Environment Setup

The following environment variable is required for the chatbot to work:

```bash
# .env.local (for local development)
NUXT_PUBLIC_BUBBLAV_WEBSITE_ID=your-website-id-here
```

Get your Website ID from the [BubblaV dashboard](https://www.bubblav.com/dashboard).

## Tech Stack

- **Nuxt 3** with Vue 3 and TypeScript
- **Tailwind CSS** for styling with CSS variables for theming
- **shadcn-vue** (new-york style) - component library configured via `components.json`
- **@nuxt/icon** - Icon module
- **@nuxtjs/color-mode** - Dark/light theme management with `dark` class
- **@bubblav/ai-chatbot-vue** - Chatbot SDK integration

## Architecture

### Configuration Files
- `nuxt.config.ts` - Main Nuxt configuration with modules, runtime config, and metadata
- `tailwind.config.js` - Tailwind with shadcn-vue design tokens (HSL CSS variables)
- `components.json` - shadcn-vue configuration (style: new-york, aliases: `~/components`, `~/lib/utils`)

### Theming System
The project uses CSS custom properties (variables) for a flexible theming system:

- **CSS Variables Location**: `assets/css/main.css`
- **Light Mode**: `:root` selector defines default HSL values
- **Dark Mode**: `.dark` class selector overrides values
- **Color Tokens**: `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--card`, `--popover`, plus foreground variants
- **Border Radius**: `--radius` variable for consistent corner rounding

The `@nuxtjs/color-mode` module automatically:
- Manages light/dark mode switching via `$colorMode.preference`
- Applies the `dark` class to the `<html>` element when needed
- Persists user preference to `nuxt-color-mode` localStorage key
- Falls back to system preference if no user setting exists

### Project Structure
```
components/          # Vue components (auto-imported)
├── Header.vue       # Main navigation with theme toggle and "Ask AI" button
└── ThemeToggle.vue  # Dark/light mode switcher

lib/
└── utils.ts         # cn() utility for class name merging (clsx + tailwind-merge)

assets/css/
└── main.css         # CSS variables, global styles, and theme definitions

app.vue              # Root component wrapping Header, hero, features, and CTA sections

nuxt.config.ts       # Nuxt configuration with modules and metadata
tailwind.config.js   # Tailwind CSS configuration with theme tokens
components.json      # shadcn-vue configuration
```

### Component Architecture
- **Auto-import**: All components in `~/components` are auto-imported by Nuxt
- **Layout**: `app.vue` is the root wrapper component
- **Header**: Global header with theme toggle and AI button integration
- **Theming**: `ThemeToggle.vue` controls color mode and persists preference

## BubblaV Integration

The chatbot widget is integrated through the `@bubblav/ai-chatbot-vue` package:

**In app.vue:**
```vue
<ClientOnly>
  <BubblaVWidget
    v-if="websiteId"
    :website-id="websiteId"
  />
</ClientOnly>

<script setup lang="ts">
import { BubblaVWidget } from '@bubblav/ai-chatbot-vue'
const config = useRuntimeConfig()
const websiteId = config.public.bubblavWebsiteId as string
</script>
```

**Key Details:**
- The widget is wrapped in `<ClientOnly>` to prevent SSR issues
- Website ID comes from the `NUXT_PUBLIC_BUBBLAV_WEBSITE_ID` environment variable via `useRuntimeConfig()`
- The widget renders automatically when a Website ID is configured

## Adding shadcn-vue Components

shadcn-vue components are pre-configured for this project. To add new components:

```bash
npm run add button
npm run add dialog
npm run add dropdown-menu
```

This command:
- Downloads the component source code
- Saves it to `components/ui/` (due to shadcn alias configuration)
- Uses the "new-york" style and HSL CSS variables automatically
- Makes the component available for use immediately (Nuxt auto-import)

## Design Patterns & Standards

### Color System
- Always use `hsl(var(--token))` format in Tailwind classes, never hardcoded hex values
- This ensures colors automatically respond to theme changes (light/dark mode)
- Example: `bg-primary text-primary-foreground` not `bg-blue-500 text-white`

### Components
- All Vue components in `~/components` are auto-imported by Nuxt
- Use `~/components` alias for relative imports if needed
- Follow shadcn-vue "new-york" style conventions
- Keep individual component files under 200 lines for optimal context management

### Utility Functions
- Place reusable utilities in `~/lib/utils.ts`
- The `cn()` function merges Tailwind classes safely (handles conflicts via `tailwind-merge`)
- Example: `cn('px-2 py-1', conditionalClass && 'px-4')` prevents Tailwind conflicts

### Class Names
- Use `cn()` for dynamic/conditional class merging instead of string concatenation
- Prevents Tailwind CSS specificity issues and conflicting utilities

## Deployment

### Deploy to Vercel (Recommended)
1. Push code to a Git repository (GitHub)
2. Go to [vercel.com](https://vercel.com)
3. Import the project and set `NUXT_PUBLIC_BUBBLAV_WEBSITE_ID` in Environment Variables
4. Vercel auto-detects Nuxt and deploys automatically

**One-Click Deploy Button**: The app.vue includes a Vercel deployment button for quick cloning and deployment.

### Local Preview
```bash
npm run build
npm run preview
```

## Common Tasks

### Updating the Landing Page
Edit `app.vue` to modify the hero section, features, and CTA sections. All styling uses Tailwind classes with CSS variable tokens.

### Adding Navigation Routes
Create files in a `pages/` directory (create the directory if it doesn't exist). Nuxt automatically handles file-based routing:
```
pages/
├── index.vue        # / route (auto-replaces app.vue display)
├── about.vue        # /about route
└── dashboard.vue    # /dashboard route
```

### Customizing Theme Colors
Edit `assets/css/main.css` to change HSL color values. Both `:root` (light mode) and `.dark` (dark mode) selectors can be customized.

## Troubleshooting

- **Chatbot not appearing?** Check that `NUXT_PUBLIC_BUBBLAV_WEBSITE_ID` is set in environment variables
- **Theme toggle not working?** Ensure `@nuxtjs/color-mode` module is enabled in `nuxt.config.ts`
- **Components not showing?** Verify they're in the `~/components` directory (auto-import requires correct location)
- **Tailwind classes not applying?** Use `cn()` for dynamic classes and verify colors use `hsl(var(--token))` format
