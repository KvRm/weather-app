<script setup lang="ts">
const owService = useOwService()

const route = useRoute()

const { data } = await owService.useCityDetail(
  route.query.lat as string,
  route.query.lon as string,
  { disabled: !route.query.lat || !route.query.lon },
)
</script>

<template>
  <div class="city-view-wrapper h-screen w-screen overflow-y-scroll p-5 -m-5 sm:h-auto">
    <div flex-v-center justify-between>
      <NuxtLink flex-v-center gap-3 sm:text-slate-100 :to="`/?search=${$route.query.search || ''}`">
        <div i-material-symbols:arrow-back-ios-new-rounded h-6 w-6 />
        <span>Назад</span>
      </NuxtLink>
      <OwCityBookmarkButton :lon="String($route.query.lon)" :lat="String($route.query.lat)" />
    </div>

    <OwCityDetail v-if="data" :data="data" />
  </div>
</template>

<style>
.city-view-wrapper {
  background: linear-gradient(180deg, #5a607c 0%, #161b30 49.93%);
}
</style>
