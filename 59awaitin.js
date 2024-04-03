async function Harry(){
let delhiweather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 deg")
    },2000)
})

let bangloreweather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("21 deg")
    },5000)
})

// delhiweather.then(alert)
// bangloreweather.then(alert)
console.log("fetching delhi weather please wait ....")
let delhiw = await delhiweather
console.log("fetched delhi weather: "+ delhiw)
console.log("fetching banglor weather please wait ....")
let bangloreW= await bangloreweather
console.log("fetched banglore weather: "+ bangloreW)
return [delhiw, bangloreW]
}

const main1 = async() =>{
const Cherry = async() =>{
   console.log("hey i am cherry and i am  waiting")
}
console.log("welcome to weather control room")
let a=await Harry()
let b=await Cherry()

}
main1()