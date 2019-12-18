console.log(process.version);

console.log(process.pid);

console.log(process.argv);

console.log(process.execArgv);

console.log(process.cwd());
console.log("start");
process.nextTick(() => {
  console.log("nextTick cb");
});
console.log("end");

// process.on("exit", function(code) {
//   console.log("进程退出码是:%d", code); // 进程退出码是:886
// });

// process.exit(886);
