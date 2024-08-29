<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types";
defineOptions({
  name: "EmButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
});

const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();
</script>

<template>
  <component
    ref="_ref"
    :is="props.tag"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    class="em-button"
    :class="{
      [`em-button--${type}`]: type,
      [`em-button--${size}`]: size,
      'is-loading': loading,
      'is-disabled': disabled,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
    }"
    :style="{
      ...(loading ? { 'pointer-events': 'none', cursor: 'not-allowed' } : {}),
    }"
  >
    <slot></slot>
  </component>
</template>
