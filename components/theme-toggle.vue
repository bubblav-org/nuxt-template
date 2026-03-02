<template>
  <button
    v-if="!isMounted"
    class="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center"
    aria-label="Toggle theme"
  >
    <div class="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-800" />
  </button>

  <button
    v-else
    @click="toggleTheme"
    class="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
    aria-label="Toggle theme"
  >
    <Icon
      :name="isDark ? 'lucide:sun' : 'lucide:moon'"
      class="w-4 h-4"
    />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isMounted = ref(false)

const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

onMounted(() => {
  isMounted.value = true
})
</script>
