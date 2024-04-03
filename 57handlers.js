let p = new Promise((resolve,reject)=>{
    alert("Hey i am not resolved")
    setTimeout(()=>{
     resolve(1)        
    },2000)
})

p.then(()=>{
    console.log("Harry")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (4)
        },3000)
    })
}).then((value)=>{console.log(value)})

p.then(()=>{
    console.log("congrasulations this promise is now resolved ")
})