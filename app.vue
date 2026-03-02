<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center gap-2">
            <Icon name="lucide:message-square" class="w-6 h-6" />
            <span class="font-semibold text-lg">BubblaV</span>
          </NuxtLink>

          <nav class="hidden md:flex items-center gap-8">
            <NuxtLink
              to="https://www.bubblav.com/features"
              class="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Features
            </NuxtLink>
            <NuxtLink
              to="https://www.bubblav.com/integrations"
              class="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Integrations
            </NuxtLink>
            <NuxtLink
              to="https://docs.bubblav.com"
              class="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Docs
            </NuxtLink>
            <NuxtLink
              to="https://www.bubblav.com/pricing"
              class="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Pricing
            </NuxtLink>
          </nav>

          <div class="flex items-center gap-4">
            <ThemeToggle />
            <AskAiButton />
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-blue-50/50 dark:from-blue-950/20 to-transparent pointer-events-none"
      />

      <!-- Animated orbs -->
      <div
        class="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-float"
      />
      <div
        class="absolute top-40 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-float"
        style="animation-delay: 1s"
      />

      <div class="relative max-w-5xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm mb-8"
        >
          <Icon name="lucide:sparkles" class="w-4 h-4 text-blue-500" />
          <span>Powered by Google Gemini 2.5 Flash</span>
        </div>

        <h1
          class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          AI Chatbot for Your
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"
          >
            Website
          </span>
        </h1>

        <p
          class="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto"
        >
          The fastest, easiest way to add intelligent customer support to your
          website. Deploy in 5 minutes with no coding required.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <AskAiButton />
          <a
            href="https://github.com/bubblav-org/nuxt-template"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            <Icon name="lucide:code-2" class="w-4 h-4" />
            View on GitHub
          </a>
        </div>

        <!-- Deploy Button -->
        <a
          href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbubblav-org%2Fnuxt-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://vercel.com/button"
            alt="Deploy with Vercel"
            class="h-10 mx-auto hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </section>

    <!-- Features Section -->
    <section
      class="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950/50"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need
          </h2>
          <p class="text-lg text-zinc-600 dark:text-zinc-400">
            Powerful features to delight your customers
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4"
            >
              <Icon :name="feature.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-zinc-600 dark:text-zinc-400">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Integrations Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            Integrates With Your Tools
          </h2>
          <p class="text-lg text-zinc-600 dark:text-zinc-400">
            Connect with your favorite platforms
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <div
            v-for="integration in integrations"
            :key="integration.name"
            class="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:scale-105"
          >
            <Icon
              :name="integration.icon"
              class="w-8 h-8 mx-auto mb-3 text-zinc-700 dark:text-zinc-300"
            />
            <p class="text-sm font-medium text-center">{{ integration.name }}</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="https://www.bubblav.com/integrations"
            class="inline-flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:underline"
          >
            View all integrations
            <Icon name="lucide:chevron-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Join thousands of businesses using BubblaV to provide better customer
          support.
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AskAiButton />
          <NuxtLink
            to="https://www.bubblav.com"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            Learn More
            <Icon name="lucide:chevron-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer
      class="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div class="max-w-7xl mx-auto">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div class="flex items-center gap-2">
            <Icon name="lucide:message-square" class="w-5 h-5" />
            <span class="font-semibold">BubblaV</span>
          </div>

          <div
            class="flex items-center gap-8 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <NuxtLink to="https://www.bubblav.com">Website</NuxtLink>
            <NuxtLink to="https://docs.bubblav.com">Documentation</NuxtLink>
            <NuxtLink to="https://www.bubblav.com/privacy">Privacy</NuxtLink>
            <NuxtLink to="https://www.bubblav.com/terms">Terms</NuxtLink>
          </div>

          <p class="text-sm text-zinc-500">
            © 2026 BubblaV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    <!-- Chatbot -->
    <ClientOnly>
      <BubblaVChatbot />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'lucide:zap',
    title: 'Deploy in 5 Minutes',
    description:
      'No coding required. Just copy-paste our snippet and you are ready to go.',
  },
  {
    icon: 'lucide:cpu',
    title: 'Powered by Gemini 2.5 Flash',
    description: 'The latest AI technology for intelligent, contextual conversations.',
  },
  {
    icon: 'lucide:headphones',
    title: 'Human Handoff',
    description:
      'Seamlessly transfer to your support team when AI cannot help.',
  },
  {
    icon: 'lucide:globe',
    title: 'Multi-Language',
    description: 'Support customers in 50+ languages automatically.',
  },
  {
    icon: 'lucide:shopping-cart',
    title: 'E-commerce Ready',
    description: 'Native integrations with Shopify, WooCommerce, and more.',
  },
  {
    icon: 'lucide:shield',
    title: 'Enterprise Security',
    description:
      'GDPR compliant, SOC 2 certified, and EU data hosting available.',
  },
]

const integrations = [
  { name: 'Shopify', icon: 'lucide:shopping-cart' },
  { name: 'Zendesk', icon: 'lucide:headphones' },
  { name: 'WordPress', icon: 'lucide:code-2' },
  { name: 'Webflow', icon: 'lucide:globe' },
  { name: 'Zapier', icon: 'lucide:zap' },
  { name: 'Custom', icon: 'lucide:code-2' },
]
</script>
