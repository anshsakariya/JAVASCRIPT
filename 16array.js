let a=[91,71,95,92,null,false,"NOT PRESENT"]
console.log(a)
a[7]=999 //adding a new value to the array
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])
console.log(a[8])   // will be undefined because index 8 does not exists
console.log("the length of a ",a.length)
a[0]=99 // changing the value of an array
console.log(a)
console.log(typeof a)