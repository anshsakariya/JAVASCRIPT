let url="https://jsonplaceholder.typicode.com/posts"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((Contents)=>{
    console.log({Contents})
    ihtml = ""
    Contents.forEach(item => {
        ihtml+=`
        <div class="card" style="width: 22rem;">
        <img src="https://images.unsplash.com/photo-1709418354495-fc4e5dd6d1f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">id is ${item.id}</p>
          <p class="card-text">${item.body}</p>
          <a href="#" class="btn btn-primary my-4">visit contest</a>
        </div>
      </div>
        ` 
    });
    for (item in Contents){
        console.log(Contents[item])
       
    }
       cardcontainer.innerHTML=ihtml
    
})


//NOTE APP(REMAING QUESTIONS OF PRACTICE SET)

// let n =  localStorage.getItem("note")
// alert("your note is "+n )

// let a= prompt("enter your note")
// if(a){
// localStorage.setItem("note",a)
// }


// let c= confirm("do you want to delete your note")
// if(c){
//   localStorage.removeItem("note")
//   alert("note deleted successfully")
// }