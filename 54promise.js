let promise = new Promise(function(resolve,reject){
    alert("hello")
    resolve(56)
})

console.log("hello one")
setTimeout(function(){
    console.log("hello Two in 2 seconds")
},2000)
console.log("my name is "+"hello three")
console.log(promise)

