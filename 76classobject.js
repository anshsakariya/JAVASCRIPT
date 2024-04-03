class RailwayForm{
    submit(){
        alert(this.name + ": form submitted : "+this.trainno)
    }
    cancel(){
        alert(this.name +": this form is cancelled : "+this.trainno)
    }
    fill(givenname,trainno){
        this.name=givenname
        this.trainno=trainno
    }
}
//create a form for harry
let Harry=new RailwayForm()
//fill the  form with Harry's details
Harry.fill("Harry",145316)

//create a form for Rohan
let Rohan=new RailwayForm()
let Rohan1=new RailwayForm()
//fill the  form with Rohan's details
Rohan.fill("Rohan",124222)
Rohan1.fill("Rohan",124223)


Harry.submit()
Rohan.submit()
Rohan1.submit()
Rohan1.cancel()


