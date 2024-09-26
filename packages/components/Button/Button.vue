<script setup lang="ts">
import type { ButtonProps } from "./type";
import { createName } from "@zz-element/utils";
import { useTemplateRef } from "vue";
defineOptions({
  name: "zzButton",
});
const {
  size = "default",
  type = "primary",
  tag = "button",
  nativeType = "button",
} = defineProps<ButtonProps>();
const slots = defineSlots();
const buttonEl = useTemplateRef<HTMLButtonElement>("button");
const bem = createName("button");
</script>
<template>
  <component
    :is="tag"
    :type="tag === 'buttton' ? nativeType : ''"
    :disabled
    :class="{
      [bem.b()]: true,
      [bem.m(type)]: type,
      [bem.m(size)]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
  >
    <slot></slot
  ></component>
</template>

<style scoped>
@import url("../../theme-chalk/src/Button.scss");
</style>
