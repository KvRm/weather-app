<script setup lang="ts">
import { format } from 'date-fns'
import { capitalize } from 'vue'

const { data } = defineProps<{
  data: OwApiGetCityResponse
}>()
</script>

<template>
  <div mt-12 text-center>
    <h2 class="text-[24px]" text-white font-500>
      {{ data.name }}
    </h2>
    <div mt-3.5 text-sm text-white>
      {{ capitalize(data.weather[0].description) }}
    </div>
    <div block sm:flex sm:justify-center>
      <div class="city-detail-t text-[120px]" mt-4 font-600 line-height-normal>
        {{ Math.floor(data.main.temp) }}°
      </div>
      <div flex-center class="-mt-8.5" sm:mt-0>
        <OwWeatherIcon :name="data.weather[0].main" h-40 w-45 />
      </div>
    </div>
    <div mt-4 flex-v-center items-end justify-center gap-2>
      <SpriteIcon name="barometr" h-6 w-6 />
      <span text-sm text-white>{{ data.main.grnd_level }} мм рт. ст.</span>
    </div>
    <div mt-10>
      Закат в {{ format((data.sys.sunset + data.timezone) * 1000, 'HH:mm') }}
    </div>
  </div>
</template>

<style>
.city-detail-t {
  background: linear-gradient(180deg, #ffffff 11.65%, rgba(255, 255, 255, 0) 139.47%);
  color: transparent;
  background-clip: text;
}
</style>
