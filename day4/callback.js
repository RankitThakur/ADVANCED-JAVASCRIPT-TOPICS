///callback.js////


function printName(name) {
  console.log(`${name}`)
}

function enterName(printName){
  let name = prompt("Enter your name")
  printName(name)
}

// enterName(printName)


// function printTable(table){
//   for(let i = 1 ; i<=10 ; i++){
//   console.log(i*table)
//  }
// }


function enterTable(printTable){
  let name = prompt("enter your table")
  printTable(name)
}

  enterTable(printName)
