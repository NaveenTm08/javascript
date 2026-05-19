let ml =0

document.getElementById("b1").addEventListener("keydown",(e)=>{
    console.log(e.key)
    
    let boy = document.getElementById("runningboy")
    if (e.key == "ArrowRight"){
        ml+=10
        boy.style.marginLeft = `${ml}px`
        boy.classList.remove("boyleft")
        
    }
    else if (e.key =="ArrowLeft"){

        if (ml>0){
            ml-=10
        boy.style.marginLeft = `${ml}px` 
        boy.classList.add("boyleft") 
        }
      
    }
    else if (e.key =="ArrowUp"){
       boy.classList.toggle("boyjumb")
    }


    
    // boy.classList.remove("boyjumb")
    
    
})