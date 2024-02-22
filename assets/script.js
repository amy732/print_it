// script.js
const slides = [
  {
    image: "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    "tagLine":
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// recuperation des element 
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const bannerImg = document.querySelector(".banner-img");
const p =document.querySelector("#banner p");

// Sélectionnez tous les points
const dots = document.querySelector(".dots");


let position = 0;
const numberOfSlide = slides.length;

// ajouter event litener sur les boutons
arrowRight.addEventListener("click", function () {


  if (position == numberOfSlide - 1) {
    position = 0;
  } else{
    position++;
  }

 

  bannerImg.src = "assets/images/slideshow/" + slides[position].image;
  bannerImg.alt = "assets/images/slideshow/" + slides[position].tagLine;
  // ajouter texte
  p.innerHTML = slides[position].tagLine;
  createdots();
});


arrowLeft.addEventListener("click", function () {
  

  if (position == 0) {
    position = numberOfSlide - 1;
  } else {
    position--;
  }

  bannerImg.src = "assets/images/slideshow/" + slides[position].image;
  bannerImg.alt = "assets/images/slideshow/" + slides[position].tagLine;
  p.innerHTML = slides[position].tagLine;
});
// création des points
function createdots(){
  dots.innerHTML="";
  for(let i = 0; i <slides.length ;i++){
    const dot = document.createElement("div");

    if(i===position){dot.className="dot dot_selected";
    }
    else{
       dot.className="dot";
    }
   
    dots.appendChild(dot);
  }
}
createdots();