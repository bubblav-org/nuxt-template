<template>
  <header class="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
    <div class="container flex h-14 max-w-screen-2xl items-center justify-between">
      <a href="https://www.bubblav.com" target="_blank" rel="noopener" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img :src="bubblavLogo" alt="BubblaV" class="h-6 w-6" />
        <span class="font-semibold text-sm">BubblaV</span>
      </a>
      <nav class="flex items-center gap-6 text-sm">
        <a href="https://www.bubblav.com/integrations" target="_blank" rel="noopener" class="transition-colors hover:text-foreground text-foreground/70">
          Integrations
        </a>
        <a href="https://docs.bubblav.com" target="_blank" rel="noopener" class="transition-colors hover:text-foreground text-foreground/70">
          Docs
        </a>
        <a href="https://github.com/bubblav-org/nuxt-template" target="_blank" rel="noopener" class="transition-colors hover:text-foreground text-foreground/70">
          GitHub
        </a>
        <button
          @click="openChat"
          class="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background shadow transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        >
          Ask AI
        </button>
        <ThemeToggle />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useBubblaVWidget } from '@bubblav/ai-chatbot-vue'

const widget = useBubblaVWidget()

const openChat = () => {
  widget.value?.open()
}

// Logo paths
const bubblavLogo = '/logos/bubblav.png'
</script>
