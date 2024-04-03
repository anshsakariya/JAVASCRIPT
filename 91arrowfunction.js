const sayhello = ()=>{
    console.log("hello")
}
sayhello()


const hello = ()=> console.log("Hello world")
hello()


const hello1 = ()=> console.log("HELLO WORLD"); console.log("Ansh")
hello1()


const hello2 = (name)=> console.log("HELLO " + name)
hello2("Raj")

const hello3 = name=> console.log("HELLO " + name)
hello3("mansi")


const hello4 = (name,greeting)=> console.log(greeting +" " + name)
hello4("mansi","good afternoon")


const d={
    name:"manoj",
    role:"js developer",
    exp:30
}
console.log(d.name,d.exp)


const x={
    name:"kartik",
    role:"js developer",
    exp:30,
    show: function(){
        console.log(`the name is ${this.name}\nthe role is ${this.role}`)
    }
}
x.show()


const y={
    name:"harry",
    role:"python developer",
    exp:30,
    show: function(){
        let that =this
        console.log(this)
        setTimeout(function(){
        console.log(`the name is ${that.name}\nthe role is ${that.role}`)
    },2000)
}
}
y.show()


const z={
    name:"shiv",
    role:"full stack developer",
    exp:30,
    show: function(){
        setTimeout(() =>{
        console.log(`the name is ${this.name}\nthe role is ${this.role}`)
    },4000)
}
}
z.show()


const hello5 = name => {
    console.log("greeting"  + " " + name )
    console.log("hii")
}
hello5("DHYEY")

