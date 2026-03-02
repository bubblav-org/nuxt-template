<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <header class="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="https://www.bubblav.com" target="_blank" rel="noopener" class="flex items-center gap-2">
          <img :src="bubblavLogo" alt="BubblaV" class="h-8 w-8" />
          <span class="font-bold text-lg">BubblaV</span>
        </a>
        <nav class="flex items-center gap-6 text-sm">
          <a href="https://www.bubblav.com/integrations" target="_blank" rel="noopener" class="transition-colors hover:text-foreground/80 text-foreground/60">
            Integrations
          </a>
          <a href="https://docs.bubblav.com" target="_blank" rel="noopener" class="transition-colors hover:text-foreground/80 text-foreground/60">
            Docs
          </a>
          <a href="https://github.com/bubblav-org/nuxt-template" target="_blank" rel="noopener" class="transition-colors hover:text-foreground/80 text-foreground/60">
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="container flex max-w-screen-2xl flex-col items-center gap-4 py-24 md:py-32">
      <div class="mx-auto flex max-w-[42rem] flex-col items-center text-center">
        <div class="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground mb-6">
          <span class="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          Nuxt 3 Starter Template
        </div>
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Build AI Chatbots in Minutes
        </h1>
        <p class="mt-6 max-w-[42rem] leading-7 text-muted-foreground sm:text-xl">
          A fast, intelligent AI chatbot for your website. Deploy in 5 minutes with no coding required.
        </p>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="https://www.bubblav.com" target="_blank" rel="noopener" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            Get Started Free
          </a>
          <a href="https://docs.bubblav.com" target="_blank" rel="noopener" class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            Read the Docs
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container py-24 max-w-screen-2xl">
      <div class="mx-auto max-w-[42rem] text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to delight customers
        </h2>
        <p class="mt-4 text-lg text-muted-foreground">
          Powerful features to automate customer support while keeping the human touch.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Feature 1 -->
        <div class="group relative rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
            <Icon name="lucide:sparkles" class="h-5 w-5" />
          </div>
          <h3 class="font-semibold text-lg mb-2">AI-Powered Intelligence</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Powered by AI for fast, accurate responses that understand context and intent.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="group relative rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
            <Icon name="lucide:globe" class="h-5 w-5" />
          </div>
          <h3 class="font-semibold text-lg mb-2">Omni-Channel Support</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Engage customers across Messenger, Discord, Slack, WhatsApp, and Instagram from one dashboard.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="group relative rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
            <Icon name="lucide:users" class="h-5 w-5" />
          </div>
          <h3 class="font-semibold text-lg mb-2">Human Handoff</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Seamlessly transfer complex conversations to your team with live support and context preservation.
          </p>
        </div>

        <!-- Feature 4 -->
        <div class="group relative rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
            <Icon name="lucide:zap" class="h-5 w-5" />
          </div>
          <h3 class="font-semibold text-lg mb-2">Powerful Integrations</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Native integrations with Shopify, Zendesk, Zapier, Notion, and 5000+ apps. Works with your existing stack.
          </p>
        </div>

        <!-- Feature 5 -->
        <div class="group relative rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
            <Icon name="lucide:database" class="h-5 w-5" />
          </div>
          <h3 class="font-semibold text-lg mb-2">Knowledge Base</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Train on your website content, Notion, Zendesk, and more. RAG-powered accuracy for domain-specific queries.
          </p>
        </div>

        <!-- Feature 6 -->
        <div class="group relative rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
            <Icon name="lucide:bar-chart" class="h-5 w-5" />
          </div>
          <h3 class="font-semibold text-lg mb-2">Analytics Dashboard</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Track conversations, resolution rates, and customer satisfaction. Data-driven insights to improve support.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="container py-24 max-w-screen-2xl">
      <div class="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 text-center">
        <div class="relative z-10">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to transform your customer support?
          </h2>
          <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses using BubblaV to provide instant, intelligent support 24/7.
          </p>
          <div class="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <a href="https://www.bubblav.com" target="_blank" rel="noopener" class="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Start Free Trial
            </a>
            <a href="https://docs.bubblav.com" target="_blank" rel="noopener" class="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              View Documentation
            </a>
          </div>
        </div>
        <!-- Decorative elements -->
        <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-border bg-muted/30 py-12">
      <div class="container max-w-screen-2xl">
        <div class="grid gap-8 md:grid-cols-4">
          <!-- Brand -->
          <div class="space-y-3">
            <a href="https://www.bubblav.com" target="_blank" rel="noopener" class="flex items-center gap-2">
              <img :src="bubblavLogo" alt="BubblaV" class="h-6 w-6" />
              <span class="font-bold">BubblaV</span>
            </a>
            <p class="text-sm text-muted-foreground">
              AI-powered customer support for modern businesses.
            </p>
          </div>

          <!-- Product -->
          <div>
            <h3 class="font-semibold mb-3">Product</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="https://www.bubblav.com" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="https://www.bubblav.com/pricing" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="https://www.bubblav.com/integrations" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h3 class="font-semibold mb-3">Resources</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="https://docs.bubblav.com" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="https://github.com/bubblav-org/nuxt-template" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="https://www.bubblav.com/blog" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="font-semibold mb-3">Legal</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="https://www.bubblav.com/privacy" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="https://www.bubblav.com/terms" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div class="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {{ new Date().getFullYear() }} BubblaV. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- BubblaV Chatbot Component -->
    <ClientOnly>
      <BubblaVWidget
        v-if="websiteId"
        :website-id="websiteId"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { BubblaVWidget } from '@bubblav/ai-chatbot-vue'

const config = useRuntimeConfig()
const websiteId = config.public.bubblavWebsiteId as string

// Logo paths - using strings to prevent Vite import analysis
const bubblavLogo = '/logos/bubblav.png'
</script>
