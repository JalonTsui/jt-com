<script setup lang="ts">
// 1.进入界面后2秒钟后开始旋转，5秒钟后停止旋转；
// 2.并且3秒后进入一个表单界面（如下图2所示）；
// 3.界面要求适配现主流的手机屏幕及手机浏览器；
// 4.要求界面切换连贯，动画流畅。
// 5.请保证视觉效果的还原度以及代码整洁度。
import { ref, onMounted } from "vue";

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
    <div class="a_container c_width" v-if="isShowRoutate">
      <img
        style="width: 100%"
        :class="{ a_rotate: isRotate }"
        src="@/assets/test3/loto-p.png"
        alt="test3"
      />
      <img class="a_pointer" src="@/assets/test3/loto-z.png" alt="test3" />
    </div>
    <div class="form_container c_width" v-if="!isShowRoutate">
      <ElForm label-position="top">
        <el-form-item label="收货人姓名">
          <el-input placeholder="收货人姓名" class="d_input"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input placeholder="请输入您的手机号码" class="d_input"></el-input>
        </el-form-item>
        <el-form-item label="手机验证码">
          <div style="display: flex; width: 100%">
            <el-input
              style="margin-right: 10px"
              placeholder="手机验证码"
              class="d_input"
            ></el-input>
            <el-button class="d_input b_width b_btn">获取验证码</el-button>
          </div>
        </el-form-item>
        <el-form-item label="选择地区">
          <el-input class="d_input"></el-input>
          <div style="height: 5px; width: 100%"></div>
          <el-input class="d_input"></el-input>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input placeholder="例如XX街道XX号" class="d_input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="d_input b_width b_btn">提交订单</el-button>
        </el-form-item>
      </ElForm>
    </div>
  </div>
</template>
<style scoped lang="scss">
@media only screen and (max-width: 1200px) {
  .c_width {
    width: 432px !important;
  }
  .a_pointer {
    width: 300px !important;
  }
}
@media only screen and (max-width: 768px) {
  .c_width {
    width: 332px !important;
  }
  .a_pointer {
    width: 200px !important;
  }
}
.layout {
  display: flex;
  justify-content: center;
  .a_container {
    position: relative;
    overflow: hidden;
  }
  .form_container {
    .d_input {
      height: 40px;
    }
    .b_width {
      width: 100%;
    }
    :deep(.el-form-item__label) {
      margin-bottom: 2px;
    }
    :deep(.el-form-item) {
      margin-bottom: 2px !important;
    }
    .b_btn {
      background-color: $fm_btn;
      color: white;
      font-size: 16px;
      font-weight: 600;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
.c_width {
  width: 532px;
}
.a_pointer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 400px;
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
