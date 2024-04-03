//following two lines will run sucessfully due to javascript hoisting
console.log(a)
greet()
function greet(){
 console.log("good morning")
}
var a=9;  //declaration hoisted to the top but initialization is not
console.log(a)

console.log("=====================================")
//following two lines will run sucessfully due to javascript hoisting
let b
console.log(b)
greet()
function greet(){
 console.log("good morning")
}
console.log(b)

console.log("=====================================")
// let a;
// Following two lines will run successfully due to JavaScript hoisting
console.log(a)
greet()
var greet = function() {
  console.log("Good morning")
}

var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a)