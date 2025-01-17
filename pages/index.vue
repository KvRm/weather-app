<script setup lang="ts">
import { useStorage } from '@vueuse/core'

const [IZH_LAT, IZH_LON] = [56.86051745, 53.197730742455306]

const bookmarks = useStorage<[string, string][]>('bookmarked', [])
</script>

<template>
  <BaseHeader sm:hidden />

  <OwCitySelect />

  <div mt-8 grid="~ cols-2" sm="grid-cols-3" gap-5>
    <template v-if="isHydrated && bookmarks.length">
      <OwCityPreviewCard
        v-for="bookmark in bookmarks" :key="JSON.stringify(bookmark)"
        :lat="bookmark[0]"
        :lon="bookmark[1]"
      />
    </template>
    <template v-else>
      <div v-for="i in 3" :key="i" class="skeleton-loading-bg" h-58 rounded-1.5 />
    </template>
  </div>

  <template v-if="isHydrated && !bookmarks.length">
    <div mt-11 flex-h-center>
      <span relative max-w-45 text-center>
        <SpriteIcon name="arrow-top" absolute bottom-6 h-9.5 w-8 class="-left-10 -left-9" />
        Начните вводить город, например,
        <NuxtLink
          :to="`/city?lat=${IZH_LAT}&lon=${IZH_LON}`"
          border-b-1 border-b-white border-b-dotted
        >
          Ижевск
        </NuxtLink>
      </span>
    </div>

    <div mt-24 flex="center col" gap-5>
      <span max-w-72 text-center>
        Используйте значок «закладки»,
        чтобы закрепить город на главной
      </span>
      <SpriteIcon name="bookmark" h-10 w-10 />
    </div>
  </template>
</template>
