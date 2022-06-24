///////getter methods

let object1 = {
  name: "Rankit",
  set getname(name){
    return name.toUpperCase();
  }
}

console.log(object1)

/////setter method

let object2 = {
  name: "set",
  set setName(name){
    this.name = name.toUpperCase();
  }
}

object2.setName = "ram";

console.log(object2)
