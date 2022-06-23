let student = [
  {
    name: "Ro",
    category: "gen",
    dob : 1997,
    age : 26
  },
  {
    name: "Sunny",
    category: "st",
    dob : 1996,
    age : 27
  },
  {
    name: "rohit",
    category: "obc",
    dob : 1995,
    age : 30
  },
  {
    name: "pankaj",
    category: "sc",
    dob : 1994,
    age : 30
  },
  {
    name: "suresh",
    category: "gen",
    dob : 1997,
    age : 26
  },
  {
    name: "syam",
    category: "gen",
    dob : 1997,
    age : 29
  },
]




let strData = student.map(function(data,index){
  if(data.dob == 1997){
  return data.dob
}
}
)
console.log(strData)



let strAge = student.map(function(strAge){
  if(strAge.category === "gen"){
    return strAge.category
  }
})


console.log(strAge)
