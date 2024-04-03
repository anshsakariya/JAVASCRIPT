// let a=1;
// let b=2;
// let c=3;

// console.log("average of a and b is ", (a+b)/2)
// console.log("average of a and b is ", (b+c)/2)
// console.log("average of a and b is ", (c+a)/2)



// console.log("one plus average of a and b is ", 1+(a+b)/2)
// console.log("one plus average of a and b is ", 1+(b+c)/2)
// console.log("one plus average of a and b is ", 1+(c+a)/2)



function a(b,c){
    console.log("Done")
    return 1+(b+c)/2
}
let d=1;
let e=2;
let f=3;
console.log("average of d and e is ",a(d,e))
console.log("average of e and f is ",a(e,f))
console.log("average of f and d is ",a(f,d))





function g(h,i){
    console.log("Done")
    return Math.round(1+(h+i)/2)
}

let j=1;
let k=2;
let l=3;

console.log("average of j and k is ",g(j,k))
console.log("average of k and l is ",g(k,l))
console.log("average of l and j is ",g(l,j))


const sum = (p,q)=>{
    return p+q
}
console.log(sum(9,9))


const hello = ()=>{
    console.log("hey how are you . i am toh fine yaar")
}
// function call
hello();



const hello1 = ()=>{
    console.log("i am toh fine yaar")
    return "hi"
}
// function call
let v=  hello1();
console.log(v)