/**
 * @author JalonTsui
 */

type listType = () => Promise<any>;

class CreateTask {
  max: number;
  list: listType[];
  // 用于检测当前请求队列的长度
  listLength = 0;

  constructor(max = 10) {
    this.max = max;
    this.list = [];
    // 在调用后直接执行，因为是异步任务，所以可以确保在任务全部添加后执行
    setTimeout(() => {
      this.run();
    });
  }

  addTask(task: listType[]) {
    this.list.push(...task);
  }

  run() {
    if (this.list.length <= 0) return;
    const min = Math.min(this.max, this.list.length);
    for (let i = 0; i < min; i++) {
      const task = this.list.shift();
      if (!task) return;
      // 占用一个队列空间
      this.listLength++;
      this.max--;
      task()
        .then((res: any) => {
          // TODO: 可以传入一个函数获取执行结果
          console.log(res);
        })
        .catch((error: any) => {
          // TODO: 可以传入一个函数处理错误结果
          console.log(error);
        })
        .finally(() => {
          // TODO: 可以传入一个函数在调用完成后调用，不管成功还是失败
          // 释放一个队列空间
          this.listLength--;
          this.max++;
          console.log("当前队列数量===>>>", this.listLength);
          this.run();
        });
    }
  }
}

export default CreateTask;
