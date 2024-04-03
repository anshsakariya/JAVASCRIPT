console.log("log")
console.info("info")
console.warn("warm")
console.error("err")
console.assert("err" !=false)
console.assert("err" ==false)

console.time()
console.time("a")
console.timeEnd("a")
console.time("p1")
console.timeEnd("p1")


console.time("forloop")
for(let i=0;i<5;i++){
    console.log(233)
}
console.timeEnd("forloop")


console.time("while loop")
let i=0;
while(i<5){
    console.log(233)
    i++;
}
console.timeEnd("while loop")