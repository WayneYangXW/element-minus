<!--
 * @Descripttion: 
 * @Author: Yxw
 * @Date: 2024-09-01 20:58:07
 * @LastEditTime: 2024-09-01 21:16:36
-->
<script setup lang="ts">
import type { ButtonGroupProps } from './types'
import { provide, reactive, toRef } from 'vue'
import { BUTTON_GROUP_CTX_KEY } from './constants'

defineOptions({
  name: 'EmButtonGroup',
})

const props = defineProps<ButtonGroupProps>()

provide(BUTTON_GROUP_CTX_KEY,
  reactive({
  size: toRef(props, 'size'),
  type: toRef(props, 'type'),
  disabled: toRef(props, 'disabled'),
}))
</script>

<template>
    <div class="em-button-group">
        <slot></slot>
    </div>
</template>

<style scoped>
@import './style.css'
</style>