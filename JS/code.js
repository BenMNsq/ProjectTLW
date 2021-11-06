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
if (location.pathname=="/ProjectTLW/HTML/Personaliser.html"){
    let gouts = {
        chocolat: false,
        fraise: false,
        pomme: false,
        yaourt: false,
        caramel: false,
    }
    console.log(gouts)

    let toppings = {
        copeaux: false,
        arc: false,
        smarties: false,
        kinder: false,
        fruits: false,
    }
    console.log(toppings)

    for (let t in toppings) {
        document.getElementById(t).disabled = false
    }

    for (let g in gouts) {
        document.getElementById(g).disabled = false
    }

    if (gouts[gout] == false) { document.getElementById(gout).classList.add("boptionchoisie"); gouts[gout] = true }
    else { document.getElementById(gout).classList.remove("boptionchoisie"); gouts[gout] = false }
    // cake.gout = gout;
}

    function activer(gout) {
        // for (let g in gouts) {
        //     gouts[g] = false;
        //     document.getElementById(g).classList.remove("boptionchoisie")
        // }

        if (gouts[gout] == false) { 
            gouts[gout] = true;
            let g = "chocolat"
            for (let g in gouts){
                document.getElementById(g).className = "boptioninactive";
                document.getElementById(g).disabled = true;
            }
            document.getElementById(gout).disabled = false;
            document.getElementById(gout).className = "boptionchoisie";
        } 

        else { 
            gouts[gout] = false;
            for (let g in gouts) {
                document.getElementById(g).disabled = false;
                document.getElementById(g).className = "boption"
            }
        }
    }
    function topping_fct(topping) {

        if (toppings[topping] == false) {
            toppings[topping] = true;
            document.getElementById(topping).className = "boptionchoisie";
        }

        else {
            toppings[topping] = false;
            document.getElementById(topping).className = "boption";
        }
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
fetch('../JSON/baseDonnee.json')
    .then(function (response) {
        return response.json();
    })
    .then(function(json) {
        var gateaux = json.gateau;
        let template = document.querySelector("#listeGateau");
        for (const g of gateaux) { // itère sur le tableau
            let clone = document.importNode(template.content, true);      // clone le template
            newContent = clone.firstElementChild.innerHTML // remplace {{nom}}
                .replace(/{{nom}}/g, g.nom)
                .replace(/{{image}}/g, g.image)
                .replace(/{{Prix}}/g, g.prix)
                .replace(/{{lien}}/g, g.lien);
            clone.firstElementChild.innerHTML = newContent;
            document.getElementById("bgateaudiv").appendChild(clone); // Placer les elements du template au dessus de footer dans le div bgateaudiv

        }
        
    });

// PARTIE  FILTRE //

// function filtreM() {
//         var fmax = document.getElementsByClassName('fmax')
//         for (var i=0; i<fmax.length; i++) {
//             var buttonF= fmax[i]
//             buttonF.addEventListener('click',filtreMon)
//         }
//     }
//      function filtreMon(event) { 
//       var button.clicked = event.target
//       button.clicked.parentElement.find(Math.max(g.prix))
      
//      }


// PANIER //
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {   
    alert('Votre commande a bien été prise en compte, merci')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) { // FAIRE LIEN AVEC PAGE PERSONNALISATION !!
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
    console.log(title)
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Vous avez déjà ce gateau dans votre panier :)')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>` // Faire un Template ?
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('€', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total
}

