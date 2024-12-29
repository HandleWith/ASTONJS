Promise.resolve("A")

  .then(function (a) {
    console.log(2, a); //2 А

    return "B";
  })

  .then(function (a) {
    Promise.resolve("C")

      .then(function (a) {
        console.log(7, a); //7 C
      })

      .then(function (a) {
        console.log(8, a); //8 undefined
      });

    console.log(3, a); //3 B

    return a;
  })

  .then(function (a) {
    Promise.resolve("D")

      .then(function (a) {
        console.log(9, a);  //9 D
      })

      .then(function (a) {
        console.log(10, a); //10 undefined
      });

    console.log(4, a); //4 B
  })

  .then(function (a) {
    console.log(5, a); //5 undefined
  });

console.log(1); // 1

setTimeout(function () {
  console.log(6); //6
}, 0); 

//1 2 A 3 B 7 C 8 undefined 4 B 9 D 10 undefined 5 undefined 6
