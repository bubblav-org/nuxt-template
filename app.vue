<template>
  <div class="min-h-screen bg-background">
    <Header />

    <!-- Hero Section - Vercel-inspired clean hero -->
    <section class="relative overflow-hidden">
      <!-- Subtle background gradient -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 opacity-20 blur-3xl dark:bg-primary/10" />
      </div>

      <div class="container flex max-w-screen-2xl flex-col items-center gap-6 py-24 md:py-32">
        <div class="mx-auto flex max-w-[42rem] flex-col items-center text-center">
          <div class="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-xs text-muted-foreground mb-8">
            <span class="flex h-1.5 w-1.5 rounded-full bg-foreground mr-2 animate-pulse"></span>
            Nuxt 3 Starter Template
          </div>
          <h1 class="text-4xl font-bold tracking-tight sm:text-7xl text-foreground">
            Build AI Chatbots
            <span class="block text-foreground/60">in Minutes</span>
          </h1>
          <p class="mt-6 max-w-[42rem] leading-7 text-muted-foreground sm:text-lg">
            A fast, intelligent AI chatbot for your website. Deploy in 5 minutes with no coding required.
          </p>
          <div class="mt-10 flex flex-col gap-3 sm:flex-row items-center">
            <a
              href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbubblav-org%2Fnuxt-template&env=NUXT_PUBLIC_BUBBLAV_WEBSITE_ID&envDescription=Website%20ID%20from%20BubblaV%20dashboard"
              target="_blank"
              rel="noopener noreferrer"
              data-slot="button"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 shadow-sm"
            >
              <svg
                class="h-4 w-4"
                viewBox="0 0 76 65"
                fill="currentColor"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              <div class="w-px h-4 bg-primary-foreground/20 mx-1"></div>
              Deploy to Vercel
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section - Vercel-inspired clean cards -->
    <section class="container py-24 max-w-screen-2xl">
      <div class="mx-auto max-w-[42rem] text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
          Everything you need
        </h2>
        <p class="mt-4 text-lg text-muted-foreground">
          Powerful features to automate customer support while keeping the human touch.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <!-- Feature 1 -->
        <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
          <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
            <Icon name="lucide:sparkles" class="h-4 w-4" />
          </div>
          <h3 class="font-semibold mb-2">AI-Powered Intelligence</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Powered by AI for fast, accurate responses that understand context and intent.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
          <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
            <Icon name="lucide:globe" class="h-4 w-4" />
          </div>
          <h3 class="font-semibold mb-2">Omni-Channel Support</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Engage customers across Messenger, Discord, Slack, WhatsApp, and Instagram from one dashboard.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
          <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
            <Icon name="lucide:users" class="h-4 w-4" />
          </div>
          <h3 class="font-semibold mb-2">Human Handoff</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Seamlessly transfer complex conversations to your team with live support and context preservation.
          </p>
        </div>

        <!-- Feature 4 -->
        <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
          <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
            <Icon name="lucide:zap" class="h-4 w-4" />
          </div>
          <h3 class="font-semibold mb-2">Powerful Integrations</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Native integrations with Shopify, Zendesk, Zapier, Notion, and 5000+ apps. Works with your existing stack.
          </p>
        </div>

        <!-- Feature 5 -->
        <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
          <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
            <Icon name="lucide:database" class="h-4 w-4" />
          </div>
          <h3 class="font-semibold mb-2">Knowledge Base</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Train on your website content, Notion, Zendesk, and more. RAG-powered accuracy for domain-specific queries.
          </p>
        </div>

        <!-- Feature 6 -->
        <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
          <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
            <Icon name="lucide:bar-chart" class="h-4 w-4" />
          </div>
          <h3 class="font-semibold mb-2">Analytics Dashboard</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Track conversations, resolution rates, and customer satisfaction. Data-driven insights to improve support.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section - Vercel-inspired minimal CTA -->
    <section class="container py-24 max-w-screen-2xl">
      <div class="relative overflow-hidden rounded-2xl border border-border/50 bg-muted/30 p-12 text-center md:p-16">
        <!-- Subtle decorative elements -->
        <div class="absolute inset-0 -z-10">
          <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
        <div class="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-foreground/5 blur-3xl dark:bg-foreground/10" />
        <div class="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-foreground/5 blur-3xl dark:bg-foreground/10" />

        <div class="relative z-10">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses using BubblaV to provide instant, intelligent support 24/7.
          </p>
          <div class="mt-10 flex flex-col gap-3 sm:flex-row justify-center">
            <a href="https://www.bubblav.com/dashboard" target="_blank" rel="noopener" class="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2">
              Get Started
            </a>
            <a href="https://docs.bubblav.com" target="_blank" rel="noopener" class="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium shadow-sm transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2">
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer - Vercel-inspired clean footer -->
    <footer class="border-t border-border/50 bg-muted/20 py-12">
      <div class="container max-w-screen-2xl">
        <div class="grid gap-8 md:grid-cols-4">
          <!-- Brand -->
          <div class="space-y-3">
            <a href="https://www.bubblav.com" target="_blank" rel="noopener" class="flex items-center gap-2">
              <img :src="bubblavLogo" alt="BubblaV" class="h-5 w-5" />
              <span class="font-semibold text-sm">BubblaV</span>
            </a>
            <p class="text-sm text-muted-foreground">
              AI-powered customer support for modern businesses.
            </p>
          </div>

          <!-- Product -->
          <div>
            <h3 class="font-semibold text-sm mb-3">Product</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="https://www.bubblav.com" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="https://www.bubblav.com/pricing" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="https://www.bubblav.com/integrations" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h3 class="font-semibold text-sm mb-3">Resources</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="https://docs.bubblav.com" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="https://github.com/bubblav-org/nuxt-template" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div class="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
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
</script>
