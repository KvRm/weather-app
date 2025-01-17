<script setup lang="ts">
import type { SpritIconName } from '~/types/sprite-icon'

defineProps<{
  name: SpritIconName
}>()
</script>

<template>
  <svg><use :xlink:href="`#${name}`" /></svg>
</template>
