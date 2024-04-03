// method overloading
class Employess{
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
    requestCoffee(x){
        console.log(`Employees has requested 4{x} coffees`)
    }
    requestleaves(leaves){
        super.requestleaves(4)
        console.log("one extra is granted")
        // console.log(`Employees has requested ${leaves+1} leaves (one extra)`)
    }
}

let e=new programmer()
e.login()
e.requestleaves(2)