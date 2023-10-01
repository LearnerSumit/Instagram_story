var storia=document.querySelector("#storia");

storia.addEventListener("click",function(dets){
   var value=(dets.target);
   document.querySelector("#display").style.display="block";
    document.querySelector("#display").style.backgroundImage="url("+value.src+")";
    setTimeout(function(){
        document.querySelector("#display").style.display="none";
    },2000);
});