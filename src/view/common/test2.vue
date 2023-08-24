<script setup lang="ts">
import CreateTaskQueue from "@/utils/taskQueue/index.js";
type ITaskList = (() => Promise<any>)[];

const task = (number: number): (() => Promise<any>) => {
  return () => {
    const time = Math.random() * 5000;
    return new Promise((r) => {
      setTimeout(() => {
        r(number);
      }, time);
    });
  };
};

const randomList = (): ITaskList => {
  const taskList: ITaskList = [];
  for (let i = 0; i < 50; i++) {
    taskList.push(task(i));
  }
  return taskList;
};

const runTaskQueue = (max: number, taskList: ITaskList) => {
  const taskQueue = new CreateTaskQueue(max);
  taskQueue.addTask(taskList);
};

function handleRunTaskQueue() {
  runTaskQueue(10, randomList());
}
</script>
<template>
  <div>
    <h1>任务队列</h1>
    <button @click="handleRunTaskQueue">click</button>
  </div>
</template>
<style scoped lang="scss"></style>
