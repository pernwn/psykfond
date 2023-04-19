//Variables:
const aLeft = document.querySelector("#arrow-left");
const aRight = document.querySelector("#arrow-right");

const karu = document.querySelector('#container');
const fstKaru = document.querySelector('#fstKaru');
const sndKaru = document.querySelector('#sndKaru');

/*
const k2 = document.getElementById("kvinde2");
const m2 = document.getElementById("mand2");*/

/*
const m3 = document.getElementById("mand3");
const m4 = document.getElementById("mand4");

const k3 = document.getElementById("kvinde3");
const k4 = document.getElementById("kvinde4");


const fstKaru = document.getElementById("fstKaru");
const sndKaru = document.getElementById("sndKaru");*/


//Array:
//const array = [fstKaru, sndKaru];

const array = [fstKaru, sndKaru];

array[0].style.display = "block";
array[1].style.display = "none";



/*array[2].style.display = "none";
array[3].style.display = "none";
array[4].style.display = "none";
array[5].style.display = "none";
array[6].style.display = "none";
array[7].style.display = "none";*/

//knapper:
aRight.addEventListener('click', nextPic);
aLeft.addEventListener('click', previousPic);


//Funktioner -- SE PAPIR
function embed(){
    
}

function nextPic(){
    array[0].style.display = "none"; // Skjul den viste
    array.push(array[0]); // Put den første ind til sidst
    array.shift(); // Fjern den første og flyt alle en ned
    array[0].style.display = "block"; // Vis den der nu er først
}

function previousPic(){
    array[0].style.display = "none";
    array.unshift(array[array.length-1]);
    array.pop(); //Fjerne sidste element i array
    array[0].style.display = "block";
}

//DEBUG ALERT
function myAlert(){
    alert("debug");
}

myAlert();