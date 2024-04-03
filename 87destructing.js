let arr=[3,5,8,9,12,14]
//no need to do this
//let a= arr[0]
//let b=arr[1]
let [a,b,c,d]=arr
console.log(a,b,c,d)

let [e,f,g,h,... rest]=arr
console.log(e,f,g,h, rest)

let [i, , ,  ... rest1]=arr
console.log(i, rest1)

let [j, ,k ,  ... rest2]=arr
console.log(j,k, rest2)


let {l,m}={l:1,m:5}
console.log(l,m)

//spread operactor
let arr1=[3,5,8]
let obj1={...arr1}
console.log(obj1)

function sum(o,p,q){
    return o+p+q
}
console.log(sum(...arr1))

let obj2={
    name:"Harry",
    company:"company XYZ",
    adress:"xyz"
}
console.log({...obj2,name:"john",company:"ABC"})
console.log({name:"john",company:"ABC",...obj2})