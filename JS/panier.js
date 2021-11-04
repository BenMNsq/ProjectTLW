// Prise en compte des Cookies 
// Pour sauvegarder le panier 

function setCookies(nomC,valeurC,expirationC){
    var d= new Date();
    d.setTime(d.getTime()+ (expirationC*24*60*60*7));
    var expires= "expires="+d.toUTCString();

    document.cookie = nomC + "=" + valeurC + "; " + expires+';path=/';
    
}


function saveTable(inCartItemsNum,cartArticles){ 
// setCookie('inCartItemsNum', inCartItemsNum, 5);   Pour le widget sur la page d'accueil
setCookie('cartArticles', JSON.stringify(cartArticles), 5);
}



function getCookie(nomC) {
    let name = nomC + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

//  AJOUT D'UN ARTICLE AU PANIER  //
//                                //

  // click bouton ajout panier
$('.ajoutPanier').click(function() {

    // récupération des infos du produit
    var $this = $(this);
    var id = $this.attr('data-id');
    var name = $this.attr('nom');
    var price = $this.attr('price');
    var url = $this.attr('data-url');
    var qt = parseInt($('#qt').val());
    inCartItemsNum += qt;

    // mise à jour du nombre de produit dans le widget
    $('#in-cart-items-num').html(inCartItemsNum);

    var newArticle = true;

    // vérifie si l'article n'est pas déjà dans le panier
    cartArticles.forEach(function(presence) {
        // si l'article est déjà présent, on incrémente la quantité
        if (presence.id == id) {
            newArticle = false;
            presence.qt += qt;
            $('#'+ id).html('<a href="'+ url +'">'+ name +'<br><small>Quantité : <span class="qt">'+ presence.qt +'</span></small></a>');  // change la quantité de l'article dans le code HTML

        }
    });

    // s'il est nouveau, on l'ajoute
    if (newArticle) {
        $('#cart-dropdown').prepend('<li id="'+ id +'"><a href="'+ url +'">'+ name +'<br><small>Quantité : <span class="qt">'+ qt +'</span></small></a></li>'); // Rajoute la ligne html sur le produit

        cartArticles.push({
            id: id,
            name: name,
            price: price,
            weight: weight,
            qt: qt,
            url: url
        });
    }

    // sauvegarde le panier
    saveCart(inCartItemsNum, cartArticles);

    // affiche le contenu du panier si c'est le premier article
    cartEmptyToggle();
});


//  Rendu de la page panier //
//                             //


if (window.location.pathname == '/panier/') {
    var items = '';
    var subTotal = 0;
    var total;
    

    /* on parcourt notre array et on créé les lignes du tableau pour nos articles :
    * - Le nom de l'article (lien cliquable qui mène à la fiche produit)
    * - son prix
    * - la dernière colonne permet de modifier la quantité et de supprimer l'article
    */

    cartArticles.forEach(function(presence) {
        // opération sur un entier pour éviter les problèmes d'arrondis
        var itemPrice = presence.price.replace(',', '.') * 1000;
        items += '<tr data-id="'+ presence.id +'">\
             <td><a href="'+ presence.url +'">'+ presence.name +'</a></td>\
             <td>'+ presence.price +'€</td>\
             <td><span class="qt">'+ presence.qt +'</span> <span class="qt-minus">–</span> <span class="qt-plus">+</span> \
             <a class="delete-item">Supprimer</a></td></tr>';
        subTotal += presence.price.replace(',', '.') * presence.qt;
        
    });

    // on reconverti notre résultat en décimal
    subTotal = subTotal / 1000;

    // On insère le contenu du tableau et le sous total
    $('#cart-tablebody').empty().html(items);
    $('.sousTot').html(subTotal.toFixed(2).replace('.', ','));

    // lorsqu'on clique sur le "+" du panier
    $('.qt-plus').on('click', function() {
        var $this = $(this);

        // récupère la quantité actuelle et l'id de l'article
        var qt = parseInt($this.prevAll('.qt').html());
        var id = $this.parent().parent().attr('data-id');
        
        // met à jour la quantité et le poids
        inCartItemsNum += 1;
        $this.prevAll('.qt').html(qt + 1);
        $('#in-cart-items-num').html(inCartItemsNum);
        $('#'+ id + ' .qt').html(qt + 1);

        // met à jour cartArticles
        cartArticles.forEach(function(presence) {
            // on incrémente la qt
            if (presence.id == id) {
                presence.qt += 1;

                // récupération du prix
                // on effectue tous les calculs sur des entiers
                subTotal = ((subTotal * 1000) + (parseFloat(presence.price.replace(',', '.')) * 1000)) / 1000;
            }
        });

        // met à jour la quantité du widget et sauvegarde le panier
        $('.subtotal').html(subTotal.toFixed(2).replace('.', ','));
        saveCart(inCartItemsNum, cartArticles);
    });

    // quantité -
    $('.qt-minus').click(function() {
        var $this = $(this);
        var qt = parseInt($this.prevAll('.qt').html());
        var id = $this.parent().parent().attr('data-id');
        

        if (qt > 1) {
            // maj qt
            inCartItemsNum -= 1;
            $this.prevAll('.qt').html(qt - 1);
            $('#in-cart-items-num').html(inCartItemsNum);
            $('#'+ id + ' .qt').html(qt - 1);

            cartArticles.forEach(function(presence) {
                // on décrémente la qt
                if (presence.id == id) {
                    presence.qt -= 1;

                    // récupération du prix
                    // on effectue tous les calculs sur des entiers
                    subTotal = ((subTotal * 1000) - (parseFloat(presence.price.replace(',', '.')) * 1000)) / 1000;
                }
            });

            $('.subtotal').html(subTotal.toFixed(2).replace('.', ','));
            saveCart(inCartItemsNum, cartArticles);
        }
    });

    // suppression d'un article
    $('.delete-item').click(function() {
        var $this = $(this);
        var qt = parseInt($this.prevAll('.qt').html());
        var id = $this.parent().parent().attr('data-id');
        var arrayId = 0;
        var price;

        // maj qt
        inCartItemsNum -= qt;
        $('#in-cart-items-num').html(inCartItemsNum);
    });

    // Ajout d'un article

}
