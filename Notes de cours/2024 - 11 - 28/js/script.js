const premiertitreh1 = document.getElementById("titre-principal");
premiertitreh1.textContent = "Bienvenue dans le monde du DOM !";

let paragraphes = document.getElementsByClassName("description");
paragraphes[0].className += " highlight";

let items = document.getElementsByTagName("li");
items[2].textContent = "item modifié";

let list = document.getElementById("ma liste");
let newItem = document.createElement("li");
newItem.textContent = "NouvelItem";
list.appendChild(newItem);

document.getElementById("texte").textContent = "texte modifié";

document.getElementById("conteneur").style.backgroundColor = "red";