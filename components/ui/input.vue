<script setup lang="ts">
const {
  modelValue,
  debounce = 0,
} = defineProps<{
  modelValue?: string
  debounce?: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v?: string): void
}>()

const handleUpdateModelValue = useDebounceFn(v => emit('update:modelValue', v), () => debounce)
const model = computed({
  get() {
    return modelValue
  },
  set(value) {
    handleUpdateModelValue(value)
  },
})
</script>

<template>
  <input
    v-model="model"
    h-full w-full rounded-0.5 bg-slate-400 px-5 placeholder:text-slate-100 text-white
    placeholder="Укажите город"
  >
</template>
