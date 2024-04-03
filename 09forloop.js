// for(let i=0;i<=10;i++){
//     console.log(i)
// }


// let sum=0
// let n=prompt("enter the value of n ")
// n=Number.parseInt(n)
// for(let i=0;i<n;i++){
//     sum+=(i+1)
//     console.log((i+1),"+")
// }
// console.log("sum of first "+ n +" natural numebr is " + sum)




let obj = {
    harry:90,
    shubh:45,
    shivika:56,
    ritika:55,
    shiv:69
}
//for in loop
for(let a in obj){
    console.log( "marks of"+ a + " are "+obj[a])
}


//for of loop
for (let b of "harry"){
    console.log(b)
}