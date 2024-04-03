//problem no 1
let arr = [1,2,3,4,5,6,7,83]
let a = prompt("enter a number")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)

//problem no 2
let arr1 = [1,2,3,4,5,6,7,83]
let b;
do{
 b = prompt("enter b number")
b=Number.parseInt(b)
arr1.push(b)
console.log(arr1)
}while(b!=0);
console.log(arr1)


//problem no 3
let arr2=[1,2,3,4,30,5,6,50,7,83,670]
let n= arr2.filter((x)=>{
    return x%10==0
})
console.log(n)

//problem no 4
let arr3=[1,2,3,4,5,6]
let c= arr3.map((x)=>{
    return x*x
})
console.log(c)


//problem no 5
let arr4=[1,2,3,4,5]
let d= arr4.reduce((x1,x2)=>{
    return x1*x2
})
console.log(d)