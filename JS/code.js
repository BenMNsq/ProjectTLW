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

// Etat des boutons de personnalisation

function monpanier() {
    document.location.href = "MonPanier.html"
}

function pagecompte() {
    document.location.href = "PageCompte.html"
}

function index() {
    document.location.href = "index.html"
}

function team() {
    document.location.href = "team.html"
}

function contact() {
    document.location.href = "Contact.html"
}

class Gateau {
    constructor(etages, nom, base_price, topping_price, gout) {
        this.nom = nom;
        this.etages = etages;
        this.base_price = base_price;
        this.topping_price = topping_price
        this.price = base_price + topping_price
        this.gout = gout
    }
}


if (location.pathname == "/HTML/Personaliser.html") {
    let etages = new URLSearchParams(window.location.search).get("etages");
    document.getElementById("item1").innerHTML = `${etages} étages`;
    let nom = etages + ' floor cake'
    let base_price = etages * 20
    let cake = new Gateau(etages, nom, base_price, 0, '')
    console.log(cake)
}

let gouts = {
    chocolat: false,
    fraise: false,
    pomme: false,
    yaourt: false,
    caramel: false
}

function activer(gout) {
    // for (let g in gouts) {
    //     gouts[g] = false;
    //     document.getElementById(g).classList.remove("boptionchoisie")
    // }

    if (gouts[gout] == false) { document.getElementById(gout).classList.add("boptionchoisie"); gouts[gout] = true }
    else { document.getElementById(gout).classList.remove("boptionchoisie"); gouts[gout] = false }
    // cake.gout = gout;
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
if (location.pathname == "/HTML/index.html") {
    var slideIndex = 1;
    showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// contrôles avant/apres
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "inline-block";
    dots[slideIndex - 1].className += " active";
}
function personnaliser() {
    document.location.href = "Personnaliser.html"
}


// PARTIE PERSONNALISATION  //
// utilisation Template //

let contenu_json = {};
fetch('/JSON/baseDonnee.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        var gateaux = json.gateau;
        let template = document.querySelector("#listeGateau");
        for (const g of gateaux) { // itère sur le tableau
            let clone = document.importNode(template.content, true);      // clone le template
            newContent = clone.firstElementChild.innerHTML // remplace {{nom}}
                .replace(/{{nom}}/g, g.nom)
                .replace(/{{image}}/g, g.image)
                // .replace(/{{attribut}}/g, g.att) 
                .replace(/{{lien}}/g, g.lien);
            clone.firstElementChild.innerHTML = newContent;
            document.getElementById("bgateaudiv").appendChild(clone); // Placer les elements du template au dessus de footer dans le div bgateaudiv

        }
    });



