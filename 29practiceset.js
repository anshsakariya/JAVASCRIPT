let runagain = true;
const candrive =(age)=>{
    return age>=18?true:false
    }

while (runagain) {
let age= prompt("enter the age")
age=Number.parseInt(age)
if(age<0){
    console.error("please enter a valid age");
    break;
}
if(candrive(age)){
    alert("you can  drive")
}
else{
    alert("you can not drive")
}
runagain = confirm("Do you want to play again")
}




let number=prompt("enter your number")
number=parseInt(number)

if(number>4){
    location.href="https://google.com"
}



let color=prompt("enter the page background color ")
document.body.style.background = color