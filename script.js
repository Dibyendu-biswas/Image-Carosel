const move= document.getElementById("move")
const img =document.querySelectorAll("img")
let carousel=0;

function image(){
    carousel++
    console.log(img.length);
    if(carousel>img.length-1){
        carousel=0
    }
    move.style.transform=`translateX(${-carousel*100}%)`

}
setInterval(image,2000)