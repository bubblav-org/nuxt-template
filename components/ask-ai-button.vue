<template>
  <button
    @click="handleClick"
    class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition-opacity"
  >
    <Icon name="lucide:message-square" class="w-4 h-4" />
    Ask AI
  </button>
</template>

<script setup lang="ts">
interface Props {
  className?: string;
}

withDefaults(defineProps<Props>(), {
  className: '',
})

declare global {
  interface Window {
    BubblaV?: {
      open: () => void;
    };
  }
}

const handleClick = () => {
  if (typeof window !== 'undefined' && window.BubblaV?.open) {
    window.BubblaV.open()
  }
};
</script>
