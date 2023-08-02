<script setup lang="ts">
import FactoryRoutes from "@/router/routes/factoryRoute";
import { getRandomRGB } from "@/utils/common";
import { CSSProperties } from "vue";
const colorList = FactoryRoutes.map(() => {
  return getRandomRGB(0.7);
});

function getItemStyle(index: number): CSSProperties {
  return {
    backgroundColor: colorList[index],
  };
}
</script>
<template>
  <div class="layout_container">
    <div
      class="item"
      :style="getItemStyle(index)"
      v-for="(item, index) in FactoryRoutes"
      :key="item.path"
      @click="$router.push({ name: item.name })"
    >
      {{ item.name }}
    </div>
  </div>
</template>
<style scoped lang="scss">
.layout_container {
  padding: 10px;
  .item {
    @include between-two-parts;
    border-radius: 12px;
    height: 25px;
    width: 80%;
    margin: 0px auto 10px;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
}
</style>
