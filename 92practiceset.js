const a = async(text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text)
        },6000)
    })
}

(
async () =>{
    let text= await a("HELLO")
    console.log(text)
    text = await a("ANSH")
    console.log(text)
}
)()

 const B = async(text1,n=2)=>{
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve(text1)
         },1000*n)
     })
 }
 (
     async () =>{
         let text1= await B("hello")
         console.log(text1)
         text1 = await B("world")
         console.log(text1)
     }
     )()
     function sum(a,b,c){
        return a+b+c
    }
    let A=[5,2,6]
    console.log(sum(...A));
 (
 async () =>{
     let text1= await B("I am resolving after  1 second",1)
     console.log(text1)
     text1 = await B("I am resolving after  4 second",4)
     console.log(text1)
 }
 )()


 function  simpleinterest(p,r,t){
    return(p*r*t)/100;
 }
 console.log(simpleinterest(2000,5,2))