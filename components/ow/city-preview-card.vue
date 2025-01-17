<script setup lang="ts">
const { lon, lat } = defineProps<{
  lon: string
  lat: string
}>()

const owService = useOwService()

const { data, status } = await owService.useCityDetail(
  lat as string,
  lon as string,
)
</script>

<template>
  <NuxtLink
    v-if="data"
    h-58 flex="~ v-center col" rounded-1.5 bg-slate-500 bg-opacity-50 pb-4 pt-6
    :class="{ 'skeleton-loading-bg': status === 'pending' }"
    :to="`/city?lat=${lat}&lon=${lon}`"
  >
    <div text-sm text-white>
      {{ data.name }}
    </div>
    <div mt-3 h-11 flex-v-center text-white class="text-[40px]">
      {{ Math.floor(data.main.temp) }}°
    </div>
    <OwWeatherIcon :name="data.weather[0].main" h-26 w-30 />
  </NuxtLink>
</template>
