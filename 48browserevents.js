let x= function(e){
    console.log(e.target)
    console.log(e)
    console.log(e.type,e.clientX,e.clientY)
    alert("hello world!")
}
btn.addEventListener('click',x)


let y= function(e){
    console.log(e.target)
    console.log(e)
    console.log(e.type,e.clientX,e.clientY)
    alert("hello world!1")
}
btn.addEventListener('click',y)

let a = prompt("what is your favourite number?");
if(a=="2"){
    btn.removeEventListener('click',x)
} 