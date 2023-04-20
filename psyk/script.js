//Variables:

const aLeft = document.getElementById("arrowleft");
const aRight = document.getElementById("arrowright");
const kender = document.getElementById("kender");
const stjerne = document.getElementById("stjerne");

const fidget = document.getElementById("figdetspinner");
const bobbel = document.getElementById("bobbel");

//Array:
const carousel = [kender, stjerne];

carousel[0].style.display = "flex";
carousel[1].style.display = "none";



//knapper:
aRight.addEventListener("click", nextPic);
aLeft.addEventListener("click", previousPic);


//Funktioner:
function nextPic() {
  carousel[0].style.display = "none"; // Skjul den viste
  carousel.push(carousel[0]); // Put den første ind til sidst
  carousel.shift(); // Fjern den første og flyt alle en ned
  carousel[0].style.display = "flex"; // Vis den der nu er først
}

function previousPic() {
  carousel[0].style.display = "none";
  carousel.unshift(carousel[carousel.length - 1]);
  carousel.pop();
  carousel[0].style.display = "flex";
}



//slide i kender du
aRight.addEventListener("click", slide)
let visible = false;
function slide() {
  if (visible == false) {
    stjerne.style.animationName = "slideIn";
    kender.style.animationName = "slideOut";
    visible = true;
  } else {
    kender.style.animationName = "slideOut";
    stjerne.style.animationName = "slideIn";
    visible = false;
  }
}

aLeft.addEventListener("click", slide)

function slide() {
  if (visible == false) {
    kender.style.animationName = "slideOut";
    stjerne.style.animationName = "slideIn";
    visible = true;
  } else {
    stjerne.style.animationName = "slideIn";
    kender.style.animationName = "slideOut";
    visible = false;
  }
}

//tryk på fidgetspinner 2 gange første gang for at få frem
document.getElementById("button").addEventListener("click", showBubble);
function showBubble(){
    if(visible == false){
        bobbel.style.visibility = "hidden";
        visible = true;
    }else{
      bobbel.style.visibility = "visible";
      visible = false;
    }
}


/*
var hidden = false;
function showBubble(){
  if (!hidden) {
    bobbel.style.visibility ='visible';
   
  } else {
    bobbel.style.visibility ='visible';
}


}

function myAlert(){
  alert("debug");
}

/*function bubble(){
  if (visible==true) {
    bobbel.style.display = "block";
    visible=true;
  } else {
    fidget.style.display = "none";
    visible=false;
  }
}*/







/*Fade in effekt, genbruges når man skriver reveal efter tag
https://alvarotrigo.com/blog/css-animations-scroll/*/
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



