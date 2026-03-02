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

## Tech Stack

- **Nuxt 3** with Vue 3 and TypeScript
- **Tailwind CSS** for styling with CSS variables for theming
- **shadcn-vue** (new-york style) - component library configured via `components.json`
- **@nuxt/icon** - Icon module
- **@nuxtjs/color-mode** - Dark/light theme management with `dark` class
- **@bubblav/ai-chatbot-vue** - Chatbot SDK integration

## Architecture

### Configuration
- `nuxt.config.ts` - Main Nuxt configuration including runtime config for `NUXT_PUBLIC_BUBBLAV_WEBSITE_ID`
- `tailwind.config.js` - Tailwind with shadcn-vue design tokens (HSL CSS variables)
- `components.json` - shadcn-vue configuration (aliases: `~/components`, `~/lib/utils`)

### Theming System
Colors use HSL CSS variables defined in `assets/css/main.css`:
- `:root` - Light mode values
- `.dark` - Dark mode values
- Tokens: `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--card`, `--popover`

Theme mode is controlled by `@nuxtjs/color-mode` with:
- `classSuffix: ''` (no suffix on dark class)
- `fallback: 'system'`
- `storageKey: 'nuxt-color-mode'`

### Project Structure
- `app.vue` - Root component (currently minimal template wrapper)
- `assets/css/main.css` - Global styles and CSS variables
- `components/` - Vue components (auto-imported by Nuxt)
- `lib/` - Utility functions (e.g., `cn()` for class merging via `tailwind-merge` + `clsx`)
- `pages/` - File-based routing (when added)

## BubblaV Integration

The chatbot uses `@bubblav/ai-chatbot-vue` package. To customize:

1. Get a Website ID from [bubblav.com](https://www.bubblav.com)
2. Set `NUXT_PUBLIC_BUBBLAV_WEBSITE_ID` environment variable
3. Use `<BubblaVChatbot website-id="..." />` component
4. Access via ref: `chatbotRef.value?.openChat()` for programmatic control

## Design Patterns

- Use `hsl(var(--token))` format for all colors to support theme switching
- Components auto-imported from `~/components` (Nuxt convention)
- Utility functions in `~/lib/utils` (e.g., class name merging)
- Follow shadcn-vue "new-york" style conventions
- Tailwind classes with CSS variable tokens for consistency
