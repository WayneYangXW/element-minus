<script setup lang="ts">
import { ref, computed, inject } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
import EmIcon from "../Icon/Icon.vue"
import { BUTTON_GROUP_CTX_KEY } from './constants'

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

const iconStyle = computed(() => ({marginRight: slots.default ? "6px" : '0px'}))

const _ref = ref<HTMLButtonElement>();

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);
const size = computed(() => ctx?.size ?? props.size ?? "");
const type = computed(() => ctx?.type ?? props.type ?? "");
const disabled = computed(() => ctx?.disabled || props.disabled || false);

defineExpose<ButtonInstance>({
  ref: _ref,
});

const emits = defineEmits<ButtonEmits>();

const handleBtnClick = (e: MouseEvent) => emits("click", e);

const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, {trailing: false});
</script>

<template>
  <component
    ref="_ref"
    :is="tag"
    :autofocus="autofocus"
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
    <template v-if="loading">
      <slot name="loading">
        <EmIcon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          spin
          >
        </EmIcon>
      </slot>
    </template>
    <EmIcon 
      v-if="icon && !loading"
      :icon="icon"
      :style="iconStyle"
      size="1x"
      >
    </EmIcon>
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
