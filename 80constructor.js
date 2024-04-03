// method overriding
class Employess{
    constructor(name){
        console.log(`${name} - Employees's constructor here`)
        this.name=name
    }
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestleaves(leaves){
        console.log(`Employees has requested ${leaves} leaves-auto approved`)
    }
}
class programmer extends Employess{
    // constructor(...args){   -->if there is no constructor in the child class,this is created automatically
    //     super(...args)
    // }
    requestCoffee(x){
        console.log(`Employees has requested 4{x} coffees`)
    }
    requestleaves(leaves){
        super.requestleaves(4)
        console.log("one extra is granted")
        // console.log(`Employees has requested ${leaves+1} leaves (one extra)`)
    }
}

let e=new programmer("Harry")
e.login()
e.requestleaves(2)


console.log("===============================")
// method overriding
class Employes{
    constructor(name){
        console.log(`${name} - Employees's constructor here`)
        this.name=name
    }
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestleaves(leaves){
        console.log(`Employees has requested ${leaves} leaves-auto approved`)
    }
}
class program extends Employes{
    constructor(name){
        super(name)
        console.log(`this is a newly written constructor`)
    }
    // constructor(...args){   -->if there is no constructor in the child class,this is created automatically
    //     super(...args)
    // }
    requestCoffee(x){
        console.log(`Employees has requested 4{x} coffees`)
    }
    requestleaves(leaves){
        super.requestleaves(4)
        console.log("one extra is granted")
        // console.log(`Employees has requested ${leaves+1} leaves (one extra)`)
    }
}

let f=new program("Harry")
f.login()
f.requestleaves(2)


