const loadscript =async(src)=>{
    return new Promise((resolve,reject)=>{
        let script =document.createElement("script")
        script.src=src
        script.onload = ()=>{
            resolve(src+" DONE SUCCESS")
        }
        document.head.append(script)
    })
}

// //problem no 1
// let b=  loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// b.then((value)=>{
//     console.log(value)
// })

// //problem no 2
// const main1 = async ()=>{
//     console.log(new Date().getSeconds())
// let a= await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// console.log(a)
// console.log(new Date().getSeconds())
// }
// main1()

//problem no 3

// let x = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error("please this is not acceptable"))
//         },3000)
//     })
// }

// let y=async()=>{
//     try{
//         let c=await x()
//         console.log(x)
//     }
//     catch(err){
//         console.log("this error has been handled")
//     }
// }
// y()


//problem no 4
let j=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10)
        },2000)
    })
}
let k=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },1000)
    })
}
let l=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30)
        },3000)
    })
}


const run =async()=>{
 
    console.time("run")
    // let a1=await j()
    // let a2=await k()
    // let a3=await l()

    let a1= j()
    let a2= k()
    let a3= l()
    let a1a2a3=await Promise.all([a1,a2,a3])
    console.log(a1a2a3)
    // console.log(a1,a2,a3)
    console.timeEnd("run")
}
run()