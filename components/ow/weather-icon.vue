<script setup lang="ts">
const { name } = defineProps<{
  name: string
}>()

const weatherNames: Record<string, string> = {
  Clear: 'Clear',
  Clouds: 'Clouds',
  Drizzle: 'Drizzle',
  Rain: 'Rain',
  Snow: 'Snow',
  Squall: 'Squall',
  Thunderstorm: 'Thunderstorm',
  Tornado: 'Tornado',
  Dust: 'Dust-Sand-Ash',
  Sand: 'Dust-Sand-Ash',
  Ash: 'Dust-Sand-Ash',
  Mist: 'Mist-Smoke-Haze-Fog',
  Smoke: 'Mist-Smoke-Haze-Fog',
  Haze: 'Mist-Smoke-Haze-Fog',
  Fog: 'Mist-Smoke-Haze-Fog',
}

const style = computed(() => `
    background: url('images/${weatherNames[name]}.png') repeat 0 0;
    background-size: cover;
`)
</script>

<template>
  <div flex-center :style>
    <slot />
  </div>
</template>
