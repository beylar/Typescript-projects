// let firstname = "Dylan"
// firstname = 33
// console.log(firstname)

let firstName : any = "Dylan"
firstName = 33
//the any data type disables the infer assignemt of the values to a specific datatype
console.log(firstName)  

//Typescript performs infer data type where you can not assign another value to the variable
const myTupple : [number, boolean] = [10, true]
const [x,y] = myTupple
console.log(x)
console.log(y)