let books = localStorage.getItem("books") ? localStorage.getItem("books").split(',') : [];

function ajouterLivre(){
    let livre = document.getElementById("Titre").value;
    let auteur = document.getElementById("Auteur").value;
    let book = livre + "par " + auteur;
    books.push(book);
    localStorage.setItem("books", books.toString());
    chargerLivres();
}
function chargerLivres(){
    let liste_livres = document.getElementById("liste-livres");
    liste_livres.innerHTML = "";
    for(let i=0; i<books.length; i++){
        let newItem = document.createElement("li");
        newItem.textContent = books[i];
        // delete button section
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "supprimer";
        newItem.appendChild(deleteButton);
        deleteButton.addEventListener("click", function(){
            supprimerLivres(i);
        })
        // end of delete button section
        liste_livres.appendChild(newItem);
    }
}

funtion supprimerLivres(i){
    books.splice(i,1);
}