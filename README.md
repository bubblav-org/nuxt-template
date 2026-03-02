# BubblaV Nuxt Starter Template

A fast, beautiful Nuxt starter template showcasing the [BubblaV AI Chatbot](https://www.bubblav.com). This template demonstrates how to integrate intelligent customer support into your Nuxt application.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbubblav-org%2Fnuxt-template)

## Live Demo

- **Nuxt**: https://bubblav-nuxt-template.vercel.app

## Features

- ⚡️ **Nuxt 3** with Vue 3
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark/Light Theme** support with @nuxtjs/color-mode
- 🤖 **BubblaV AI Chatbot** integration
- 🎭 **Smooth animations**
- 📱 **Responsive** design for mobile, tablet, and desktop
- ♿ **Accessible** components
- 🎨 **Vercel-inspired** design system

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

## Integrating BubblaV Chatbot

This template includes the BubblaV chatbot widget. To customize:

1. Sign up at [bubblav.com](https://www.bubblav.com)
2. Create a website and get your Website ID
3. Update the `websiteId` in `components/bubblav-chatbot.vue`:

```vue
<BubblaVChatbot website-id="your-website-id" />
```

### Ask AI Button

The template includes an "Ask AI" button in the header that opens the chat widget:

```vue
<script setup lang="ts">
const chatbotRef = ref<{ openChat: () => void } | null>(null)

const handleAskAi = () => {
  chatbotRef.value?.openChat()
}
</script>

<template>
  <AskAiButton @click="handleAskAi" />
  <BubblaVChatbot ref="chatbotRef" />
</template>
```

## Documentation

- [BubblaV Documentation](https://docs.bubblav.com)
- [Installation Guide](https://docs.bubblav.com/user-guide/installation)
- [SDK Reference](https://docs.bubblav.com/developer-guide/sdk-reference)
- [Integrations](https://www.bubblav.com/integrations)

## Customization

### Theme Colors

Edit `assets/css/main.css` to customize the color scheme:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --vercel-blue: #0070f3;
  /* ... */
}
```

### Styling

The template follows Vercel's design guidelines:
- Clean, minimal aesthetic
- Smooth animations
- Responsive breakpoints
- Dark/light mode support

## Skills Used

This template follows best practices from these Claude Code skills:

- [web-design-guidelines](https://github.com/vercel-labs/agent-skills)
- [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

## Tech Stack

- [Nuxt](https://nuxt.com/) - Vue framework
- [Vue 3](https://vue.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [@nuxt/icon](https://nuxt.com/modules/icon) - Icons module
- [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/) - Theme management
- [@bubblav/ai-chatbot-vue](https://www.npmjs.com/package/@bubblav/ai-chatbot-vue) - Chatbot SDK

## License

MIT

## Support

- [Documentation](https://docs.bubblav.com)
- [GitHub Issues](https://github.com/bubblav-org/nuxt-template/issues)
- [Contact](https://www.bubblav.com/contact)

---

Made with ❤️ by [BubblaV](https://www.bubblav.com)
