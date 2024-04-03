let num = [1,2,3,4,6]
let b = num.toString() //b is now string
console.log(b, typeof b)


let c = num.join(" and ")
console.log(c,typeof c)

console.log("--------------------------------------------")

let s = num.push(56) //push returns the new array length
console.log(num)
console.log(num,s)

console.log("--------------------------------------------")

let z = num.unshift(78)
console.log(z)
console.log(z,num) 


console.log("--------------------------------------------")

let r = num.pop() //pop returns the popped element
console.log(num)
console.log(num,r)

console.log("--------------------------------------------")
let a = num.shift()
console.log(a)
console.log(a,num)  //removes an elements from the start of the array





console.log("--------------------------------------------")


let num1 = [1,2,3,4,5,6,7,8,9]
console.log(num1.length)
console.log(num1)
delete num1[0]
console.log(num1) 
console.log(num1.length)

console.log("--------------------------------------------")

let num2=[1,2,3,4,5,6,7,8,9]
let num3=[11,12,13,14,15,16,17,18,19]
let newArray=num2.concat(num3)
console.log(newArray)


console.log("--------------------------------------------")

let num4=[1,2,3,4,5,6,7,8,9]
let num5=[11,12,13,14,15,16,17,18,19]
let num6=[111,112,113,114,115,116,117,118,119]
let newArray1=num4.concat(num5,num6)
console.log(newArray1)

console.log("--------------------------------------------")


//sort methods
let num7=[45,23,15,102,35,6,33]
num7.sort()
console.log(num7)

console.log("--------------------------------------------")

let compare = (a,b) =>{
  return a-b
}
let num8=[45,23,15,102,35,6,33]
num8.sort(compare)
console.log(num8)

console.log("--------------------------------------------")

let compar = (a,b) =>{
    return a-b
  }
  let num9=[45,23,15,102,35,6,33]
  num9.sort(compar)
  num9.reverse()
  console.log(num9)

console.log("--------------------------------------------")

//splice and slice
let num10=[45,23,15,102,35,6,33,66]
num10.splice(2,4,1021,1022,1023,1024,1025)
console.log(num10)

console.log("--------------------------------------------")

let num11=[45,23,15,102,35,6,33,66]
let deletevalues= num11.splice(2,4,1021,1022,1023,1024,1025)
console.log(num11)
console.log(deletevalues)
console.log(typeof deletevalues)

console.log("--------------------------------------------")

let num12=[45,23,15,102,35,6,33,66]
let newnum=num12.slice(3)
console.log(newnum)
let newnu=num12.slice(3,5)
console.log(newnu)