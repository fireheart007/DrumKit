//Detecting the button that is clicked using mouse
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click",haveclicked);
}
function haveclicked(){
    var buttonClicked=this.innerHTML; //It will give us the text of button that we have clicked
    playSound(buttonClicked);
    buttonAnimation(buttonClicked);
}
//Detecting the key that is pressed
document.addEventListener("keydown",function(event){ //"event" is the argument that triggered this eventlistener event
    playSound(event.key); //"key" property returns the value of the key pressed by the user
    buttonAnimation(event.key);
});

function playSound(buttonClicked){
    switch (buttonClicked) {
        case "w": 
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a": 
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:console.log(buttonClicked);
    }
}

function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("."+key).classList.remove("pressed");
    },100);

    //setTimeout function takes 2 parameters, a function and time in mili seconds taken to apply that function
}
