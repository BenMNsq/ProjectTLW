let profile = {
    name : "Ben",
    surname : "Sayaque",
    email : "benjaminsaaque@gmail.com",
    DateOfBirth : "31/05/2001",
}
console.log("variable");{} */ Permet de débug car sert de "print" */

let btn=document.getElementById("btn");
btn.onclick=function(event) {
    console.log("j'ai été cliqué");
}
btn.addEventListener('click',function(event){
    console.log("deuxieme fonction!");
});
