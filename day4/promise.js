// let promise = new Promise(function(resolve,reject){
//   let firstName = prompt("enter you 1st name");
//   let secName = prompt("enter you 2nd name")
//   if(firstName === secName){
//     resolve()
//   }
//   else {
//     reject()
//   }
// })


 promise.then(function(){
  console.log("same")})

promise.catch(function(){
  console.log("not same")})


let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            let  value = true;
            if (!value) {
                console.log('Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject("value not true");
            }
        }, 2000);
    })


promise.then(function(){
    console.log("Thanks for resolving")
}).catch(function(){
    console.log("not resolving" + value)
})


// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000); // (*)

// }).then(function(result) { // (**)

//   alert(result); // 1
//   return result * 2;

// }).then(function(result) { // (***)

//   alert(result); // 2
//   return result * 2;

// }).then(function(result) {

//   alert(result); // 4
//   return result * 2;

// });
