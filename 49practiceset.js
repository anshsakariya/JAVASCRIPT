document.getElementById("google").addEventListener("click",function(){
    window.location = "https://www.google.com";
    win.focus();
})


const fetchcontent = async (url) =>{
    con  = await fetch(url);
    let a =await con.json()
    return a;
}

setInterval(async function(){
let url = "https://jsonplaceholder.typicode.com/todos/1"
console.log(await fetchcontent(url))
},3000)