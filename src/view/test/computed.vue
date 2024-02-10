<script setup lang="ts">
import Child1 from "@/components/child.vue";
import { ref, reactive, onMounted } from "vue";
const num = ref<number>(0);
const child1Dom = ref();
const data = reactive({});
data;

onMounted(() => {

})

function updateNum(val: number) {
    num.value = val;
}

function sayHello() {
    child1Dom.value && child1Dom.value.sayHello();
}
</script>
<template>
    <div>
        <Child1 ref="child1Dom" :num="num" @update-num="updateNum"></Child1>
        <ElButton @click="num++">F click++</ElButton>
        <br>
        <ElButton @click="sayHello">say hello</ElButton>
    </div>
</template>
<style scoped lang="scss"></style>