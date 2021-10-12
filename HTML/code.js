function monpanier() {
    document.location.href="MonPanier.html"
}

function pagecompte() {
    document.location.href="PageCompte.html"
}

function index() {
    document.location.href="index.html"
}

function team() {
    document.location.href="team.html"
}

function contact() {
    document.location.href="Contact.html"
}


 /////////* Code Carousel*//////////
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "inline-block";
  dots[slideIndex-1].className += " active";
} 
