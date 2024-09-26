<template>
  <div class="zz-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { CollapseProps, CollapseEmits, CollapseItemName } from "./type";
defineOptions({
  name: "ZzCollapse",
});
import { COLLAPSE_CTX_KEY } from "./constants.ts";
import { provide, ref, watch } from "vue";
const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
const activeNames = ref(props.modelValue);
if (props.accordion && activeNames.value.length > 1) {
  console.warn("accordin mode should only have one actiive item");
}
const handleItemClick = (item: CollapseItemName) => {
  //tode
  let _activeNames = [...activeNames.value];
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? "" : item];
  }
};
const updateActiveNames = (newActiveNames: CollapseItemName[]) => {
  activeNames.value = newActiveNames;
  emits("change", newActiveNames);
  emits("update:modelValue", newActiveNames);
};

provide(COLLAPSE_CTX_KEY, { activeNames, handleItemClick });
watch(
  () => props.modelValue,
  (newNames) => updateActiveNames(newNames)
);
</script>

<style scoped></style>
