const btnenvoyerformulaire = document.querySelector("#envoyerformulaire");

btnenvoyerformulaire.addEventListener("click", (e)=>{
e.preventDefault();
localStorage.setItem("prenom", document.querySelector("#prenom").value);
localStorage.setItem("nom", document.querySelector("#nom").value);
localStorage.setItem("email", document.querySelector("#email").value);
localStorage.setItem("numtel", document.querySelector("#numtel").value);
localStorage.setItem("adresse", document.querySelector("#adresse").value);
localStorage.setItem("codepostal", document.querySelector("#codepostal").value);
var accueil = "Bonjour " + personne.prenom + " " + personne.nom
console.log(accueil)
document.body.innerHTML += accueil
})

var personne = {
    prenom : localStorage.getItem("prenom"),
    nom : localStorage.getItem("nom"),
    email : localStorage.getItem("email"),
    numtel : localStorage.getItem("numtel"),
    adresse : localStorage.getItem("adress"),
    codepostal : localStorage.getItem("codepostal"),
}


function before() {
    localStorage.setItem("prenom", document.querySelector("#prenom").value);
    localStorage.setItem("nom", document.querySelector("#nom").value);
    localStorage.setItem("email", document.querySelector("#email").value);
    localStorage.setItem("numtel", document.querySelector("#numtel").value);
    localStorage.setItem("adresse", document.querySelector("#adresse").value);
    localStorage.setItem("codepostal", document.querySelector("#codepostal").value);
    return true
}

function supprimer() {
    localStorage.clear();
}


