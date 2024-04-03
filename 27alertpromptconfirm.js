alert("enter the value of a")
let a = prompt("enter a here","578")
a=Number.parseInt(a)
alert("you entered a of type "+(typeof a))
let write=confirm("Do you want to write it to the page")
if(write){
document.write(a)
}
else{
    document.write("please allow me to write")
}