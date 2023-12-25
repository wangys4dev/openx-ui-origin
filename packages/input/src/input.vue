<script setup lang="ts">
import { hello } from '@openx-ui/shared'

withDefaults(
  defineProps<{
    modelValue?: string
  }>(),
  {
    modelValue: '',
  },
)

const emit = defineEmits<{
  (event: 'update:modelValue', modelValue: string): void
}>()

function inputHandler(event: Event) {
  const value = (<HTMLInputElement>event.target).value
  emit('update:modelValue', value)
  hello(value)
}
</script>

<template>
  <input
    class="openx-input"
    type="text"
    :value="modelValue"
    @input="inputHandler"
  />
</template>

<style scoped lang="scss"></style>
