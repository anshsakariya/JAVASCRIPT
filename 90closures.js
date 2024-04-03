message = "Good global"
function hello(){
    let message="good morning"
    {
        let message="good afternoon"
        console.log("Hello 1: "+ message)
    }
    console.log(message)

let c= function hello1(){
    console.log("I am c "+message)
}
return c
}
c=hello()
c()

console.log("=================================================")
function init(){
    var name='Mozila';//name is a local variable created by init
    function displayname(){
        //displayname() is the inner function a closure
        console.log(name);//use variable declared in the parent location
    }
    return displayname;
}
let d=init();
d()

console.log("=================================================")
function returnFunc(){
const x=()=>{
    let a=1
    console.log(a)
const y=()=>{
        let a=2
        console.log(a)
const z=()=>{
        let a=3
        console.log(a)
}
z()
}
y()
}
return x
}
let a=returnFunc()
a()

console.log("=================================================")
function returnF(){
    const j=()=>{
        let b=1
        console.log(b)
    const k=()=>{
            //let b=2
            console.log(b)
    const l=()=>{
            //let b=3
            console.log(b)
    }
    l()
    }
    b=999
    k()
    }
    return j
    }
    let b=returnF()
    b()