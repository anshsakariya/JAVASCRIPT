let marks={
    harry:98,
    rohan:70,
    akash:7,
    monika:55
}

//problem no 1
for(let i=0;i<Object.keys(marks).length;i++){
console.log("the marks of "+Object.keys(marks)[i]+" are " + marks[Object.keys(marks)[i]])
}

console.log("-----------------------------------------------------------------------------")
//problem no 2
for(let key in marks){
    console.log("the marks of "+key+" are " + marks[key])
}

//problem no 3
let cn=43
let i
while(i!=43){
    console.log("try again")
    i=prompt("enter a number")
}
console.log("you have entered a correct number")

//problem no 4
const mean = (a,b,c,d) => {
    return (a+b+c+d) / 4 
}
console.log(mean(4,5,6,7))