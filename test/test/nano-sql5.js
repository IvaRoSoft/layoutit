load1();
load3();

async function load1() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("代码1执行完毕");
      resolve();
    }, 5000);
  });
}

(function load2() {
  console.log("代码2执行完毕");
})();

let resolved = new Promise((resolve, reject) => {
  (resolve, reject) => resolve("foo");
});
resolved.then(str => console.log(str));

async function load3() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("代码3执行完毕");
      resolve();
    }, 5000);
  })
    .then(state => {
      resolved = true;
      console.log(state, "这里可以改变状态");
    })
    .catch(error => {
      console.log(error, "这里捕获Promise错误");
    });
}
