//Variables:

const aLeft = document.getElementById("arrowleft");
const aRight = document.getElementById("arrowright");
const kender = document.getElementById("kender");
const stjerne = document.getElementById("stjerne");

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



/*FORSØG MED BURGER SLIDE IN*/
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



