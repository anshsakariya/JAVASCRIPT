class password{
    constructor(){
        console.log("welcome to password generactor ")
        this.pass = ""
    }
    generaterPassword(len){
        let chars="abcdefghijklmnopqrstuvwxyz"
        let numbers="1234567890"
        let special="!@#$%^&*()"
        if(len<3){
            console.log("your password should be atleast 3 character long")
        }
        else{
        let i=0
        while(i<len){
            this.pass += chars[Math.floor(Math.random()*chars.length)]
            this.pass += numbers[Math.floor(Math.random()*numbers.length)]
            this.pass += special[Math.floor(Math.random()*special.length)]
            i+=3
        }
        return this.pass.substr(0,len)
        }
    }
}
let p=new password()
console.log(p.generaterPassword(7))