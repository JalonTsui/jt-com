<script setup lang="ts">
import { request } from "@/utils/axios/request";
interface IMsg {
    name: string,
    age: number
}
async function getMsg() {
    const result = await request.get<IMsg>("http://127.0.0.1:8080/test");
    console.log("this is result");
    console.log(result);
}
</script>
<template>
    <div>
        <button @click="getMsg">click me</button>
    </div>
</template>
<style scoped lang="scss"></style>