let p= new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("i am a promised and i am resolved ")
        resolve(true)
    },3000)
})



let a= new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("i am a promised and i am rejected ")
        reject(new Error("I am an error"))
    },4000)
})

//tp get the value
p.then((value)=>{
    console.log(value)
})

//to catch the errors
a.catch((error)=>{
    console.log("some error occured in a")
})


a.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})
