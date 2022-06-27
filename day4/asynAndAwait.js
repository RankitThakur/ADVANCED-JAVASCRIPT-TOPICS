
async function fetchData(){
  console.log("number:1")
 try {
 let respones = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let student =  await respones.json();
   console.log(student)
}
catch(){
console.log("error")
}
}

fetchData();
