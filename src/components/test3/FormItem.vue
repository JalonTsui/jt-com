<script setup lang="ts">
defineProps<{
  label: string;
  placeHolder?: string;
}>();
</script>
<template>
  <div class="container">
    <div class="label">{{ label }}</div>
    <div class="input">
      <slot name="default">
        <input type="text" :placeholder="placeHolder" />
      </slot>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
