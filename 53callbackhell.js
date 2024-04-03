
//call backs
function loadscript(src,callback){
    var script = document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log("loadded script with src: "+src)
        callback(null,src);
    }
    script.onerror = function(){
        console.log("Error loading script with src: "+src);
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("Hello World"+src);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", 
function goodmorning(error,src){
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap2.bundle.min.js", 
function goodmorning(error,src){
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap3.bundle.min.js", 
function goodmorning(error,src){
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap4.bundle.min.js", 
function goodmorning(error,src){
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
})
})
})
})