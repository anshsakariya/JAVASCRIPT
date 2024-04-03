class complex{
    constructor(real,imaginary){
        this.real=real
        this.imaginary=imaginary
    }
    add(num){
        this.real=this.real+num.real    
        this.imaginary=this.imaginary+num.imaginary
    }
    get real(){
        return this._real
    }
    get imaginary(){
        return this._imaginary
    }
    set imaginary(newimaginary){
       this._imaginary=newimaginary
    }
    set real(newreal){
        this._real=newreal
    }
}
let a=new complex(2,4)
console.log(a.real,a.imaginary)
a.real=10
a.imaginary=10
let b=new complex(7,3)
a.add(b)
console.log(`${a.real} + ${a.imaginary}i`)



class human{
    constructor(name,favfood){
        this.name=name
        this.favfood=favfood
    }
    walk(){
        console.log(this.name+" human is walking")
    }
}

class students extends human{
    walk(){
        console.log(this.name+": student is walking")
    }
}

let o=new students("harry","Bhindi")
o.walk()
console.log(o instanceof human)