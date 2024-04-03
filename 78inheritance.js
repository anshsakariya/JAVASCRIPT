class Animal{
    constructor(name,color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is shouting")
    }
    
}

class Monkey{
    constructor(name,color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is shouting")
    }
    eatBanana(){
        console.log(this.name +" is eating banana")
    }
}

let ani =new  Animal("Bruno","white")
let m= new Monkey("chimapu","orange")
ani.shout()
m.eatBanana()



console.log("=========================")
class animal{
    constructor(name,color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is shouting")
    }   
}
class monkey extends animal{
    eatBanana(){
        console.log(this.name +" is eating mango")
    }
    hide(){
        console.log(`${this.name} is hiding`)
    }
}

let an =new animal("kalu","white")
let mo= new monkey("bhim","orange")
an.shout()
mo.eatBanana()
mo.hide()
//ani.hide() //  this will throw an error