document.write("hello")
setTimeout(function(){
    alert("i am inside of settimeout")
},2000)


document.write("hello")
let a=setTimeout(function(){
    alert("i am inside of settimeout")
},5000)
console.log(a)


document.write("hello")
let b=setTimeout(function(){
    alert("i am inside of settimeout")
},2000)
clearTimeout(b)
console.log(b)


document.write("hello")
 let c=setTimeout(function(){
     alert("i am inside of settimeout")
 },2000)
 let d=prompt("Do you want to run the settimeout")
 if("n" == d){
 clearTimeout(c)
 }
 console.log(c)


document.write("hello")
const sum=(e,f,g)=>{
    console.log("yes i am running "+(e+f+g))
    e+f+g
}
setTimeout(sum,1000,1,2,7)
setInterval(function(){
    alert("setinterval")
},3000)