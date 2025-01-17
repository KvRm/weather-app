<script setup lang="ts">
import { useElementBounding } from '@vueuse/core'

const {
  disableToggleOnControlClick,
} = defineProps<{
  disableToggleOnControlClick?: boolean
}>()

const model = defineModel<boolean>('modelValue', { default: false })

const controlRef = ref<HTMLElement>()
const dropdownRef = ref<HTMLElement>()

const { bottom, left, width } = useElementBounding(controlRef)

const dropdownStyle = computed(() => `top: ${bottom.value}px; left: ${left.value}px; width: ${width.value}px`)

onClickOutside(controlRef, (ev) => {
  if (dropdownRef.value?.contains(ev.target as HTMLElement))
    return
  model.value = false
})

function handleControlClick() {
  if (disableToggleOnControlClick) {
    model.value = true
    return
  }
  model.value = !model.value
}
</script>

<template>
  <div ref="controlRef" @click="handleControlClick">
    <slot name="control" />
  </div>

  <Transition
    enter-from-class="translate-y-[-10%] opacity-0"
    leave-to-class="translate-y-[-10%] opacity-0"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300"
  >
    <Teleport v-if="model" to="body">
      <div ref="dropdownRef" :style="dropdownStyle" absolute>
        <slot />
      </div>
    </Teleport>
  </Transition>
</template>
