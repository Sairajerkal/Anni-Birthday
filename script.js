// fade transition

function openSite(){

let start = document.getElementById("startPage");
let main = document.getElementById("mainSite");

start.classList.remove("show");

setTimeout(function(){

start.style.display="none";

main.style.display="flex";

setTimeout(function(){

main.classList.add("show");

},50);

},500);

}


// countdown timer

var timer = setInterval(function(){

var now = new Date().getTime();

var distance = birthday - now;

var days = Math.floor(distance/(1000*60*60*24));
var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
var seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s";

},1000);
