// class RailwayForm{
//     constructor(givenname,trainno){
//         console.log("CONSTRUCTOR CALLED...."+ givenname + " " +trainno)
//         this.name=givenname
//         this.trainno=trainno
//     }
//     submit(){
//         alert(this.name + ": form submitted : "+this.trainno)
//     }
//     cancel(){
//         alert(this.name +": this form is cancelled : "+this.trainno)
    
//     }
// }
// //create and fill form for harry
// let Harry=new RailwayForm("harry", 145316)
// //no need to fill the  form with Harry's details
// // Harry.fill("Harry",145316)

// //create and fill a form for Rohan
// let Rohan=new RailwayForm("Rohan",124222)
// let Rohan1=new RailwayForm("Rohan",124223)
// //fill the  form with Rohan's details
// // Rohan.fill("Rohan",124222)
// // Rohan1.fill("Rohan",124223)


// Harry.submit()
// Rohan.submit()
// Rohan1.submit()
// Rohan1.cancel()



class RailwayForm{
    constructor(givenname,trainno,add){
        console.log("CONSTRUCTOR CALLED...."+ givenname + " " +trainno)
        this.name=givenname
        this.trainno=trainno
        this.address=add
    }
    preview(){
        alert(this.name + ":your form is  for train number: "+this.trainno + " and your address is "+this.address)
    }

    submit(){
        alert(this.name + ": form submitted for train number: "+this.trainno)
    }

    cancel(){
        alert(this.name +": this form is cancelled  for train number: "+this.trainno)
        this.trainno = 0
    }
}

let harry= new RailwayForm("Harry",13488,"420,pacific ocean ,ocean ,bihar - 0000555")
harry.preview()
harry.submit()
harry.cancel()
harry.preview()
