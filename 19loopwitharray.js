let num = [3,5,1,2,3]

for(let i=0;i<num.length;i++){
    console.log(num[i])
}

//foreach loop
console.log("foreach loop")
num.forEach((element)=>{
console.log(element*element)
})


//array.from
let name1 = "harry"
let arr = Array.from(name1)
console.log(arr)

//for...of
for(let item of num){
console.log(item)
}

console.log("for ... in loop")
//for...in
for(let i in num){
    console.log(num[i])
    }