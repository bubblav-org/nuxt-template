<script setup lang="ts">
const WIDGET_SRC = 'https://www.bubblav.com/widget.js'
const SCRIPT_ATTR = 'data-bubblav-widget'

const websiteId = useRuntimeConfig().public.bubblavWebsiteId || ''

onMounted(() => {
  if (typeof document === 'undefined') return

  if (!websiteId) {
    console.warn('BubblaV: No website ID provided. Set bubblavWebsiteId runtime config.')
    return
  }

  // Avoid injecting the script twice
  if (document.querySelector(`script[${SCRIPT_ATTR}]`)) return

  const script = document.createElement('script')
  script.src = WIDGET_SRC
  script.async = true
  script.setAttribute('data-site-id', websiteId)
  script.setAttribute(SCRIPT_ATTR, 'true')
  document.body.appendChild(script)
})
</script>

<template>
  <!-- Component has no template, it just loads the script -->
</template>
