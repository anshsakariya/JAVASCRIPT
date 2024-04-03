//syncronous programming
let a=prompt("whta is your name")
let b=prompt("what is your age")
let c=prompt("what is your favourite color")
console.log(a+" is "+ b +" years  old and has "+ c +" favouritecolor. ");


//asynchronous programming
console.log("start")
setTimeout(function(){
    console.log("hey i am good");
},3000)
console.log("end")


//call backs
function loadscript(src,callback){
    var script = document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log("loadded script with src: "+src)
        callback(null,src);
    }
    script.onerror = function(){
        console.log("Error loading script with src: "+src);
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("Hello World"+src);
}

function goodmorning(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("good morning"+src);
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",goodmorning )



