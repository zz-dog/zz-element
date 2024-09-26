<template>
  <div class="zz-collapse-item"></div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { COLLAPSE_CTX_KEY } from "./constants";
import type { CollapseItemProps } from "./type";
defineOptions({
  name: "ZzCollapseItem",
});
const props = defineProps<CollapseItemProps>();

const ctx = inject(COLLAPSE_CTX_KEY);
const isActive = computed(() => {
  return ctx?.activeNames.value.includes(props.name);
});
const handleClick = () => {
  if (props.disabled) return;
  ctx?.handleItemClick(props.name);
};
</script>

<style scoped></style>
