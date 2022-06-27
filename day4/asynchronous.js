/////Asynchronous///////

let a = "hello"
console.log(a)

setTimeout(function (){
  console.log("hello i am ram")
},2000)


let c = "ram"
console.log(c)


setTimeout(function (){
  console.log("hello i am syam")
},1000)


setTimeout(function (){
  for(i=0;i<=100;i++){
    if(i%2){
    console.log(i)
  }
 }
},1000)
