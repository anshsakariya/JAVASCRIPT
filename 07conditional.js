let a = prompt("Hey whats you age")
a=Number.parseInt(a) //converting the string to a number
//if statements

// if(a>0){
//     alert("this is a valid age")
// }

//if else statements

// if(a>0){
//     alert("this is a valid age")
// }
// else{
//     alert("this is an invalid age")
// }

//if elseif else statements

if(a<0){
    alert("this is an invalid age")
}
else if(a<9){
    alert("you are a kid and you cannot even think of driving")
}
else if(a<18 && a>=9){
    alert("you are a kid and you can  think of driving after 18")
}
else{
    alert("you can now drive as you are above 18")
}
console.log("Done")
console.log("you can", (a<18? "not Drive":"Drive"))