//problem no 1
let str="Har\""
console.log(str.length)

//problem no2
const sentance= 'The quick brown fox jumps over the lazy dog';
const word = 'fox';
console.log(sentance.includes(word))
console.log(`The word "${word}" ${sentance.includes(word) ?  'is' : 'is not'} in the sentence`);

//problem no 3
console.log(word.toLowerCase())
console.log(word.toUpperCase())

//problem no 4
let str1="please give rs 1000"
let amount = str1.slice("please give rs ".length)
console.log(amount)
let amount1 = Number.parseInt(str1.slice(15))
console.log(typeof amount1)


//problem no 5
let friend= "Deepika"
friend[3]="R"
console.log(friend) //friend is not change, because string is immutable 