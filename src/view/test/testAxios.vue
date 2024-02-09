<script setup lang="ts">
import { request } from "@/utils/axios/request";
async function getMsg() {
    try {
        const result = await request.get("/getMsg");
        console.log("success");
        console.log(result);
    } catch (e) {
        console.log("fail");
        console.log(e);
    }
}
</script>
<template>
    <div>
        <button @click="getMsg">click me</button>
    </div>
</template>
<style scoped lang="scss"></style>