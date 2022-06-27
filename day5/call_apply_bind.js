/////////////call///////////////////////

// let user1 = {
//   name : "rankit",
//   id : 24,
//   sub : "maths",
//   age : 21,

// }
//  function printData(hello) {
//     console.log(` ${hello}   ${this.name},id: ${this.id},sub:  ${this.sub},age: ${this.age}`)}


// let user2 = {
//   name : "Ankit",
//   id : 27,
//   sub : "hindi",
//   age : 18,
// }
// printData.call(user2,"hi....");
// printData.call(user1,"hello..")




/////////////apply///////////////////////


// let user1 = {
//   name : "rankit",
//   id : 24,
//   sub : "maths",
//   age : 21,

// }
//  function printData(hello) {
//     console.log(` ${hello}   ${this.name},id: ${this.id},sub:  ${this.sub},age: ${this.age}`)}


// let user2 = {
//   name : "Ankit",
//   id : 27,
//   sub : "hindi",
//   age : 18,
// }


// printData.apply(user2,["hello"])


/////////////bind///////////////////////////////////////
let user1 = {
  name : "rankit",
  id : 24,
  sub : "maths",
  age : 21,

}
 function printData(hello) {
    console.log(` ${hello}   ${this.name},id: ${this.id},sub:  ${this.sub},age: ${this.age}`)}


let user2 = {
  name : "Ankit",
  id : 27,
  sub : "hindi",
  age : 18,
}


let myPrint = printData.bind(user2,"hello","indore")
myPrint()
