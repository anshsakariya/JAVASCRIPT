let arr = [45,23,21]
//array map methods
console.log(arr)
console.log("---------")
arr.map((value)=>{
    console.log(value)   //map : new array
})

console.log("---------")
let a=arr.map((value)=>{
    console.log(value)
    return value
})  
console.log(a)


console.log("---------")
let b=arr.map((value)=>{
    console.log(value)
    return value + 1
})  
console.log(b)


console.log("---------")
let c=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + 1
})  
console.log(c)


console.log("---------")
let d=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + index
})  
console.log(d)



console.log("***********************")
//array filter method
let arr1=[45,23,21,0,3,5]
let a1=arr1.filter((a)=>{
    return a<10                      //filter: new array and 10 to niche new array make
})
console.log(a1,arr1)



//array reduce methods
console.log("+++++++++++++++++++++")
let arr2=[1,2,3,5,2,1]
let newarr3 = arr2.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr3)



console.log("+++++++++++++++++++++")
let arr3=[1,2,3,5,2,1]
const abc = (h1,h2)=>{
    return h1+h2
}
let newarr4 = arr3.reduce(abc)
console.log(newarr4)