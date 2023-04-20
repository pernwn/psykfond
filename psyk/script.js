//Variables:

const aLeft = document.getElementById("arrowleft");
const aRight = document.getElementById("arrowright");
const kender = document.getElementById("kender");
const stjerne = document.getElementById("stjerne");

let fidget = document.getElementById("figdetspinner");
let bobbel = document.getElementById("bobbel");
let button = document.getElementById("button");



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



//slide i "kender du"

aRight.addEventListener("click", slide)
function slide() {
  if (visible == true) {
    stjerne.style.animationName = "slideIn";
    kender.style.animationName = "slideOut";
    visible = false;
  } else {
    kender.style.animationName = "slideOut";
    stjerne.style.animationName = "slideIn";
    visible = true;
  }
}

aLeft.addEventListener("click", slide)

function slide() {
  if (visible == true) {
    kender.style.animationName = "slideOut";
    stjerne.style.animationName = "slideIn";
    visible = false;
  } else {
    stjerne.style.animationName = "slideIn";
    kender.style.animationName = "slideOut";
    visible = true;
  }
}

//Funktion til at vise bobbel frem på fidgetspinner – tryk 2 gange første gang
let visible = true;

button.addEventListener("click", showBubble);
function showBubble() {
  if (visible == true) {
    bobbel.style.visibility = "hidden";
    visible = false;
  } else {
    bobbel.style.visibility = "visible";
    visible = true;
  }

}



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



