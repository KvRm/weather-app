<script setup lang="ts">
const owService = useOwService()

const search = useRouteQuery('search', '')
const isOpen = ref(false)

const { data } = await owService.useCitySearch(search, { disabled: () => search.value.length < 3 })
</script>

<template>
  <UiMenu :model-value="isOpen" disable-toggle-on-control-click>
    <template #control>
      <label block h-14 rounded-0.5>
        <UiInput v-model="search" :debounce="500" />
      </label>
    </template>

    <ul overflow-hidden rounded-b-1.5 bg-slate-300>
      <li v-for="c in data" :key="c.lon + c.lat">
        <NuxtLink
          :to="`/city?lon=${c.lon}&lat=${c.lat}&search=${search}`"
          h-15 flex-v-center hover:bg-slate-200 px-5
        >
          {{ c.local_names?.ru ? c.local_names.ru : c.name }}
        </NuxtLink>
      </li>
    </ul>
  </UiMenu>
</template>
