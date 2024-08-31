<script setup lang="ts">
import type { IconProps } from './types'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'
import { omit } from 'lodash-es'

defineOptions({
  name: "EmIcon",
  inheritAttrs: false
})

const props = defineProps<IconProps>();
const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => ({ color: props.color ?? void 0 }))

</script>

<template>
    <i
        class="em-icon"
        :class="[`em-icon-${props.type}`]"
        :style="customStyles"
        v-bind="$attrs"
    >
    <FontAwesomeIcon v-bind="filterProps" />
    </i>
</template>

<style scoped>
@import './style.css'
</style>