//Variables:
const aRight = document.getElementById("arrow-right");
const aLeft = document.getElementById("arrow-left");
const fstCarousel = document.getElementById("kortKarrusel");
const sndCarousel = document.getElementById("kortKarruselEkstra");

//Array:
const carousel = [kortKarrusel, kortKarruselEkstra];

carousel[0].style.display = "block";
carousel[1].style.display = "none";

//Knapper:
aRight.addEventListener("click", nextSlide);
aLeft.addEventListener("click", previousSlide);

//Functions:
function nextSlide(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

function previousSlide(){
    carousel[0].style.display = "none";
    carousel.unshift(carousel[carousel.length-1]);
    carousel.pop();
    carousel[0].style.display = "block";
}