<script setup lang="ts">
import { computed, defineProps } from "vue";
const props = withDefaults(defineProps<{
    num?: number
}>(), {
    num: 0
});

const emit = defineEmits<{
    (e: "updateNum", num: number): void
}>();

defineExpose({
    sayHello
});

function sayHello() {
    console.log("hello");
}

const num = computed<number>({
    get() {
        return props.num;
    },
    set(val) {
        emit("updateNum", val);
    }
})
</script>
<template>
    <div>
        <div>num: {{ num }}</div>
        <br>
        <ElButton @click="num++">click++</ElButton>
    </div>
</template>
<style scoped lang="scss"></style>