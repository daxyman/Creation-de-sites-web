let booksList = (localStorage.getItem("books") === null || localStorage.getItem("books") === "") ? [] : localStorage.getItem("books").split(',');

chargerLivres();

function ajouterLivre(){
    let livre = document.getElementById("Titre").value;
    let auteur = document.getElementById("Auteur").value;
    let book = livre + " par " + auteur;
    booksList.push(book);
    localStorage.setItem("books", booksList.toString());
    chargerLivres();
}
function chargerLivres(){
    let liste_livres = document.getElementById("liste-livres");
    liste_livres.innerHTML = "";
    for(let i=0; i<booksList.length; i++){
        let newItem = document.createElement("li");
        newItem.textContent = booksList[i];
        // delete button section
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "supprimer";
        newItem.appendChild(deleteButton);
        deleteButton.addEventListener("click", function(){supprimerLivres(i);})
        // end of delete button section
        newItem.appendChild(deleteButton);
        liste_livres.appendChild(newItem);
    }
}

function supprimerLivres(i){
    booksList.splice(i,1);//this deletes things in a kinda weird way, look into it
    localStorage.setItem("books", booksList);
    chargerLivres();
}
