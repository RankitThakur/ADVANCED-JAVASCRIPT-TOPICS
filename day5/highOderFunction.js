function add(a,b) {
 console.log(a+b)
}


function power(a,b){
  let ans = Math.pow(a,b)
  console.log(ans)
}

function mul(a,b){
  let ans = (a*b)
  console.log(ans)
}

function sub(a,b){
  let ans = (a-b)
  console.log(ans)
}


function opration(a,b,fun){
  fun(a,b)
}

opration(10,5,sub)
