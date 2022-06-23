let age = [24,25,26,55,15,36,25,34,254]


let strData = age.reduce(function (data,sumAge) {
  return data+Math.round(sumAge)
},0)



console.log(strData)
