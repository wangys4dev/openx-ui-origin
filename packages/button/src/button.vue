<script setup lang="ts">
import { hello } from '@openx-ui/shared'

const props = withDefaults(
  defineProps<{
    text?: string
  }>(),
  {
    text: 'world',
  },
)

function clickHandler() {
  hello(props.text)
}
</script>

<template>
  <button class="openx-button" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss"></style>
