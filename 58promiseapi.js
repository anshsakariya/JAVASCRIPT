let a =new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("value 1")        
    }, 5000);
});

let b =new Promise((resolve,reject)=>{
    setTimeout(() => {
    //resolve("value 2")        
    reject(new Error("Error"))
    }, 2000);
});

let c =new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("value 3")        
    }, 3000);
});

 a.then((value)=>{
     console.log(value)
})

b.then((value)=>{
    console.log(value)
})

c.then((value)=>{
    console.log(value)
})


let promise=Promise.all([a,b,c])
promise.then((value)=>{
    console.log(value)
})

 let promise_all=Promise.allSettled([a,b,c])
 promise_all.then((value)=>{
     console.log(value)
 })

 let promise_al=Promise.race([a,b,c])
 promise_al.then((value)=>{
     console.log(value)
 })

let promise_a=Promise.any([a,b,c])
 promise_a.then((value)=>{
     console.log(value)
 })

let promi=Promise.resolve(6)
 promi.then((value)=>{
     console.log(value)
 })

let promis=Promise.reject(new Error("Hey"))
 promis.then((value)=>{
     console.log(value)
 })