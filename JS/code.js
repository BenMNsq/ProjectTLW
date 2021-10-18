/* Header et Footer */

fetch("header.html")
    .then(contenu => contenu.text())
    .then(texte => {
        document.getElementById("header").innerHTML = texte
    })

fetch("footer.html")
    .then(contenu => contenu.text())
    .then(texte => {
        document.getElementById("footer").innerHTML = texte
    })

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

/*
var ButtonScrollTop = Document.getElementById("ButtonScrollTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 ) 
    {ButtonScrollTop.style.display = "block";} 
    else {ButtonScrollTop.style.display = "none";}
}
function ScrollToTop() {// For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
function personnaliser() {
    document.location.href="Personnaliser.html"
}


