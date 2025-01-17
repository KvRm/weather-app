<script setup lang="ts">
import { useStorage } from '@vueuse/core'

const { lat, lon } = defineProps<{
  lon: string
  lat: string
}>()

const storage = useStorage<[string, string][]>('bookmarked', [])
const isBookmarked = computed(() =>
  storage.value.some(e => JSON.stringify(e) === JSON.stringify([lat, lon])),
)

function handleClick() {
  if (isBookmarked.value) {
    storage.value = storage.value.filter(e => JSON.stringify(e) !== JSON.stringify([lat, lon]))
  }
  else {
    storage.value.push([lat, lon])
  }
}
</script>

<template>
  <ClientOnly>
    <button @click="handleClick">
      <SpriteIcon :name="isBookmarked ? 'bookmark-filled' : 'bookmark'" h-6 w-6 />
    </button>
  </ClientOnly>
</template>
