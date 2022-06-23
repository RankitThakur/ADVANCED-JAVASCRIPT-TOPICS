// function sum(name,...rest){
//   let sum = 0
//   for(let i in rest){
//     sum+=rest[i]
//   }
//   console.log(`${sum},${name}`)
// }

// sum("rankit",1,2,3,4,5,6,)


function sum2(...rest){
  for(let i of rest){
    sum = i
      console.log(`${sum}`)

  }
}



let ary = ["rankit","thakur","sunny"]
sum2(...ary)
