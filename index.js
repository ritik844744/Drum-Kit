for (a=0;a<document.querySelectorAll(".drum").length;a++)
{document.querySelectorAll(".drum")[a].addEventListener("click",function(){
   let bb =this.innerHTML;
   makesound(bb);
   animation(bb);
})
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    animation(event.key);
})
function makesound(key){
switch(key){
   case "w": 
    let crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

   case "a": 
    let snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

   case "s": 
    let kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

   case "d": 
    let tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

   case "j": 
    let tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

   case "k": 
    let tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

   case "l": 
    let tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    
   default:
   }}
function animation(keyani){
   let eve = document.querySelector("."+keyani);
   eve.classList.add("pressed");
   setTimeout(function(){
      eve.classList.remove("pressed"),200
   })
}

  