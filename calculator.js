
(function(){

    let screen = document.querySelector('.screen');
    let clear=document.querySelector(".btn-clear")
    let eqaulvalabutton=document.querySelector(".btn-equal")
   let button= document.querySelectorAll(".btn")



   button.forEach(function(button){
    
    button.addEventListener("click",function(e){


          let value=e.target.dataset.num  
  

        screen.value += value


    })



    eqaulvalabutton.addEventListener("click",function(e){

        
           let answer= eval(screen.value)

           console.log(answer)


           screen.value=answer

    })


    clear.addEventListener("click",function(e){

            screen.value=""

    })







  });
})



()



