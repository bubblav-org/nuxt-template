# BubblaV Nuxt Starter Template

A fast, beautiful Nuxt starter template showcasing the [BubblaV AI Chatbot](https://www.bubblav.com). This template demonstrates how to integrate intelligent customer support into your Nuxt application.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbubblav-org%2Fnuxt-template&env=NUXT_PUBLIC_BUBBLAV_WEBSITE_ID&envDescription=Website%20ID%20from%20BubblaV%20dashboard)

## Live Demo

- **Nuxt**: https://bubblav-nuxt-template.vercel.app

## Features

- ⚡️ **Nuxt 3** with Vue 3 and TypeScript
- 🎨 **Tailwind CSS** with CSS variable theming for light/dark modes
- 🌙 **Dark/Light Theme** - Automatic switching with persistence via @nuxtjs/color-mode
- 🤖 **BubblaV AI Chatbot** - No-code integration with the @bubblav/ai-chatbot-vue SDK
- 🧩 **shadcn-vue Components** - Production-ready, accessible components with HSL colors
- 🎭 **Smooth animations** - Vercel-inspired micro-interactions
- 📱 **Responsive design** - Mobile-first approach for all screen sizes
- ♿ **Accessible** - Built on Radix Vue primitives with WCAG compliance
- 🎨 **Modern UI** - Clean, minimal aesthetic inspired by Vercel

## Quick Start

### Deploy to Vercel

Click the button above to deploy this template to Vercel in one click.

### Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Setting Up BubblaV Chatbot

### Environment Variable

1. Sign up at [bubblav.com](https://www.bubblav.com)
2. Create a website and get your **Website ID** from the dashboard
3. Set the environment variable (for local development, create `.env.local`):

```bash
NUXT_PUBLIC_BUBBLAV_WEBSITE_ID=your-website-id-here
```

For Vercel deployment, add this as an environment variable in your project settings.

### How It Works

The chatbot widget is automatically embedded in the page via the `@bubblav/ai-chatbot-vue` component in `app.vue`. Once you set the Website ID, the widget will appear in the bottom-right corner of your site.

### Customizing Widget Behavior

To programmatically control the chatbot (e.g., open it on a button click), you can access the widget via a template ref:

```vue
<script setup lang="ts">
const chatbotRef = ref<{ openChat: () => void } | null>(null)

const handleOpenChat = () => {
  chatbotRef.value?.openChat()
}
</script>

<template>
  <button @click="handleOpenChat">Ask AI</button>
  <BubblaVWidget ref="chatbotRef" :website-id="websiteId" />
</template>
```

The Header component in this template includes a theme toggle—feel free to add an "Ask AI" button or other controls as needed.

## Documentation

- [BubblaV Documentation](https://docs.bubblav.com)
- [Installation Guide](https://docs.bubblav.com/user-guide/installation)
- [SDK Reference](https://docs.bubblav.com/developer-guide/sdk-reference)
- [Integrations](https://www.bubblav.com/integrations)

## Customization

### Theme Colors

This template uses CSS custom properties (variables) with HSL values for flexible theming. Edit `assets/css/main.css` to customize the color scheme:

```css
:root {
  /* Light mode colors (HSL format) */
  --background: 0 0% 100%;
  --foreground: 0 0% 9%;
  --primary: 221 83% 53%;
  --primary-foreground: 210 40% 98%;
  /* ... more color tokens ... */
}

.dark {
  /* Dark mode colors - override values here */
  --background: 222 84% 5%;
  --foreground: 210 40% 98%;
  --primary: 217 91% 60%;
  /* ... */
}
```

All colors use HSL (`hue saturation% lightness%`) for better theme switching. Use these variables in Tailwind classes like `bg-primary text-foreground`.

### Adding Components

Add [shadcn-vue](https://shadcn-vue.com) components with:

```bash
npm run add button
npm run add card
npm run add dialog
```

Components are installed to `components/ui/` and automatically configured with the HSL theming system.

### Styling

The template follows these design principles:
- **Clean, minimal aesthetic** - Vercel-inspired design language
- **Responsive breakpoints** - Mobile-first approach (sm, md, lg, 2xl)
- **Dark/light mode support** - Automatic theme switching via CSS variables
- **Smooth animations** - Subtle transitions and micro-interactions
- **Accessible components** - Built on Radix Vue primitives via shadcn-vue

## Tech Stack

### Frontend
- [**Nuxt 3**](https://nuxt.com/) - Vue 3 meta-framework with auto-import and file-based routing
- [**Vue 3**](https://vue.dev/) - Reactive UI library with Composition API
- [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework with CSS variables
- [**shadcn-vue**](https://shadcn-vue.com/) - High-quality, accessible component library

### Theming & UX
- [**@nuxtjs/color-mode**](https://color-mode.nuxtjs.org/) - Automatic light/dark mode switching with localStorage persistence
- [**@nuxt/icon**](https://nuxt.com/modules/icon) - Icon module with hundreds of icons via Iconify
- [**Class Variance Authority**](https://cva.style/) - Type-safe CSS class composition (used by shadcn-vue)

### AI & Chat
- [**@bubblav/ai-chatbot-vue**](https://www.npmjs.com/package/@bubblav/ai-chatbot-vue) - Chatbot SDK with no-code integration

## Project Structure Reference

For developers working on this template, see [CLAUDE.md](./CLAUDE.md) for:
- Development commands and workflows
- Architecture and component organization
- Design patterns and theming
- Deployment instructions
- Troubleshooting guide

## License

MIT

## Support & Resources

### For Users
- [BubblaV Website](https://www.bubblav.com) - Product information
- [BubblaV Documentation](https://docs.bubblav.com) - Setup and API docs
- [GitHub Issues](https://github.com/bubblav-org/nuxt-template/issues) - Report bugs or suggest features
- [Contact BubblaV](https://www.bubblav.com/contact) - Sales and support inquiry

### For Developers
- [CLAUDE.md](./CLAUDE.md) - Development guide and architecture
- [Nuxt Documentation](https://nuxt.com/docs/) - Framework docs
- [Tailwind CSS Docs](https://tailwindcss.com/docs/) - Styling reference
- [shadcn-vue Docs](https://shadcn-vue.com/) - Component library docs

---

Made with ❤️ by [BubblaV](https://www.bubblav.com)
