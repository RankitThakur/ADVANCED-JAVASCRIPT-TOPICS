// let a = +prompt("enter the number 1st")
// let b = +prompt("enter the number 2st")
// let sum = (a,b) =>  a+b;

// console.log(sum(a,b))

window.name = "rankit"

let obj = {
 name: "rankit",
 id: 24,
  "sum":()=> {
    console.log(this.name)
  }
}

obj.sum()
