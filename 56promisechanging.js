    let p= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("resolved after 2 seconds")
            resolve(56)
        },2000)
    })

    p.then((value)=>{
        console.log(value)
        let a= new Promise((resolve,reject)=>{
            setTimeout(()=>{
            resolve("promise 2")
            },2000)
        })
        return a
    }).then((value)=>{
        console.log("we are done")
        //return 2
    }).then((value)=>{
        console.log("Now we are pakka done")
    })




    const loadScript=(src)=>{
        return new Promise((resolve, reject) =>{
            let script=document.createElement("script")
            script.type="text/javascript"
            script.src=src
            document.body.appendChild(script)
            script.onload=()=>{
                resolve("script has been loaded sir")
            }
            script.onerror=()=>{
                reject(0)
            }
        })
    }
    
    
    let p1=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
    p1.then((value)=>{
        console.log(value)
        return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
    }).then((value)=>{
    console.log("second script ready")
    }).catch((error)=>{
        console.log("we are sorry but we are having loading this script")
    })