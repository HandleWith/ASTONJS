//1)
console.log('1');
setTimeout(() => console.log('2'), 1);
let promiseNew = new Promise((resolve) => {
  console.log('3');
  resolve();
});
promiseNew.then(() => console.log('4'));
setTimeout(() => console.log('5'));
console.log('6'); // 1 3 6 4 2 5
//2)
let promiseTree = new Promise((resolve, reject) => {
  resolve("a");
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
  console.log("3"); // 1 3 2
});
//3)
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});
promiseTwo
.then((res) => {
  return res + "b";
})
.then((res) => {
  return res + "с";
})
.finally((res) => {
  return res + "!!!!!!!";
})
.catch((res) => {
  return res + "d";
})
.then((res) => {
  console.log(res); // abc
});
//4)
function doSmth() {
return Promise.resolve("123");
}
doSmth()
.then(function (a) {
  console.log("1", a); 
return a; 
})
.then(function (b) {
  console.log("2", b); 
  return Promise.reject("321");
})
.catch(function (err) {
  console.log("3", err); 
})
.then(function (c) {
  console.log("4", c); // 1 123 2 123 3 321 4 undefined 
return c; 
});
//5)
console.log("1");
setTimeout(function () {
  console.log("2");
}, 0);
Promise.resolve().then(() => console.log("3"));
console.log("4"); // 1 4 3 2
