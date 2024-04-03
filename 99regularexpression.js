const regex = ""
const text = "Harry is a very very nice awesome nice very boy"
console.log(text.replace("very","VERY"))

const regex1 = /very/g
const text1 = "Harry is a very very nice awesome nice very boy"
console.log(text1.replace(regex1,"VERY"))


const regex2 = /(Harry){2}/gi
const text2 = "Harryharry is a very very nice awesome nice very boy"
console.log(text2.replace(regex2,"VERY"))