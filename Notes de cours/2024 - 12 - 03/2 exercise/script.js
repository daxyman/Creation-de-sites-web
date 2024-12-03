let langue = localStorage.getItem("langue") ? localStorage.getItem("langue") : "en"; 
if(langue == "en") {
    document.getElementById("Titre").textContent = "Welcome to my page!";
    document.getElementById("button1").textContent = "Passer en français";
}
function change() {
    if(langue == "fr") {
        document.getElementById("Titre").textContent = "Welcome to my page!";
        document.getElementById("button1").textContent = "Passer en français";
        langue = "en";
        localStorage.setItem("langue", langue);
    }else{
        document.getElementById("Titre").textContent = "Bienvenue a ma page!";
        document.getElementById("button1").textContent = "Continue in english";
        langue = "fr";
        localStorage.setItem("langue", langue);
    }
}