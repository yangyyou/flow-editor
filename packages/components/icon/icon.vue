<template>
  <div :class="bem.b()" :style="style">
    this is icon component
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@flow-editor/utils/create';
import { iconProps } from './icon';
import { computed } from 'vue';

const bem = createNamespace('icon');
const props = defineProps(iconProps);

defineOptions({
  name: 'y-icon',
});

// 计算属性处理样式
const style = computed(() => {
  if (!props.size && !props.color) return {};
  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>

<style scoped></style>
