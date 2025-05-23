let currentAudio=null;
var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.textContent.trim();
        if(currentAudio){
            currentAudio.pause();
            currentAudio.currentTime=0;
        }
        switch(buttonInnerHTML){
            case "Akkam Pakkam":
                currentAudio=new Audio('audio/akkam.mp3');
                break;

            case "Irupadhu Kodi":
                currentAudio=new Audio('audio/irupadhu.mp3');
                break;

            case "PriyaSakhi":
                currentAudio=new Audio('audio/priya.mp3');
                break;

            case "Unnai Kanda":
                currentAudio=new Audio('audio/unnai.mp3');
                break;

            case "UnPer":
                currentAudio=new Audio('audio/unper.mp3');
                break;

            case "Yaar Indha":
                currentAudio=new Audio('audio/yaar.mp3');
                break;

                case "Yenadi":
                currentAudio=new Audio('audio/yenadi.mp3');
                break;

            default:
                console.log(buttonInnerHTML);
                return;
        }
        currentAudio.play();
    });
}