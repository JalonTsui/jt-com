<script setup lang="ts">
// 1.进入界面后2秒钟后开始旋转，5秒钟后停止旋转；
// 2.并且3秒后进入一个表单界面（如下图2所示）；
// 3.界面要求适配现主流的手机屏幕及手机浏览器；
// 4.要求界面切换连贯，动画流畅。
// 5.请保证视觉效果的还原度以及代码整洁度。
import { ref, onMounted } from "vue";
import FormItem from "@/components/test3/FormItem.vue";

const isRotate = ref(false);
const isShowRoutate = ref(true);

onMounted(() => {
  actionAnimation(2000);
  stopAnimation(5000, () => {
    isShowRoutate.value = false;
  });
});

function actionAnimation(time: number) {
  setTimeout(() => {
    isRotate.value = true;
  }, time);
}

function stopAnimation(time: number, next?: Function) {
  setTimeout(() => {
    isRotate.value = false;
    next && next();
  }, time);
}
</script>
<template>
  <div class="layout">
    <div class="a_container" v-if="isShowRoutate">
      <img
        :class="{ a_rotate: isRotate }"
        src="@/assets/test3/loto-p.png"
        alt="test3"
      />
      <img class="a_pointer" src="@/assets/test3/loto-z.png" alt="test3" />
    </div>
    <div class="form_container" v-if="!isShowRoutate">
      <FormItem place-holder="收货人姓名" label="收货人姓名"></FormItem>
      <FormItem place-holder="请输入您的手机号码" label="手机号码"></FormItem>
      <FormItem label="手机验证码" place-holder="">
        <input type="text" placeholder="手机验证码" />
        <button class="btn_normal">获取验证码</button>
      </FormItem>
      <FormItem label="选择地区" place-holder=""> </FormItem>
      <FormItem label="详细地址" place-holder="例如XX街道XX号"> </FormItem>
      <button class="btn_normal">提交订单</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.btn_normal {
  background-color: $fm_btn;
  color: white;
  border: $fm_border;
}
.layout {
  display: flex;
  justify-content: center;
}
img {
  display: block;
}
.a_container {
  position: relative;
  width: 532px;
}
.a_pointer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
// 旋转动画
.a_rotate {
  -webkit-animation: spin 3s linear 1s 5 alternate;
  animation: spin 3s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
