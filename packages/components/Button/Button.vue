<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
defineOptions({
  name: "EmButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
});

const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();

defineExpose<ButtonInstance>({
  ref: _ref,
});

const emits = defineEmits<ButtonEmits>();

const handleBtnClick = (e: MouseEvent) => emits("click", e);

const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);
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
    @click="
    (e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
