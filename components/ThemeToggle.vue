<template>
  <button
    :class="cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      'hover:bg-accent hover:text-accent-foreground',
      'h-9 w-9'
    )"
    @click="toggleTheme"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} theme`"
  >
    <ClientOnly>
      <Icon v-if="isDark" name="lucide:sun" class="h-4 w-4" />
      <Icon v-else name="lucide:moon" class="h-4 w-4" />
      <template #fallback>
        <Icon name="lucide:sun" class="h-4 w-4" />
      </template>
    </ClientOnly>
    <span class="sr-only">Toggle theme</span>
  </button>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>
