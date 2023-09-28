const p = new Promise((resolve, reject) => {
  // pending state
  //new keyword use so promise is constructor
  // async operation will be performed
  setTimeout(() => {
    // if async operation  is successful resolved(data)
    resolve("data");
    // if async operation  is not successful reject(err)
    // reject("err");
  }, 2000);
});

// settled state
p.then((data) => {
  console.log(`Resolved:${data}`); // here inside then there is a callback function we passed
});
// (data) => {
//   console.log(`Resolved:${data}`);// this is a callback function we passed to then()  and if we call resolve("data"); then altimately it call ()=>{
// console.log(`Resolved:${data}`);
// }
// }
p.catch((err) => {
  console.log(`Error:${err}`);
});

// ==========================================================================================

// const promise = new Promise((res) => res(2));

// promise
//   .then((v) => {
//     console.log(v); //2
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v); //4
//     return v * 2;
//   })
//   .finally((v) => {
//     console.log(v); //undefined   it will execute after complition of the promise
//     return 0;
//   })

//   .then((v) => {
//     console.log(v); //8
//   });
