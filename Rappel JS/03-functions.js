// Fonctions Natives
// --

// alert("");

// Fonctions Utilisateurs
// --


// Fonction déclarée
function maFonction() {
    console.log("Fonction déclarée !");
}

// Appel de la fonction
maFonction();



// fonction anonyme
const maFonctionAnonyme = function() {
    console.log("Fonction anonyme !");
};
maFonctionAnonyme();


// fonction fléchée
const maFonctionFlechee = () => {
    console.log("Fonction fléchée !");
};
maFonctionFlechee();


// Fonctions immédiatement invoquées
(function(){
    console.log("Fonction immédiatement invoquée !");
})();


// Fonctions constructrices
function Personne(nom, age) {
    this.nom = nom;
    this.age = age;
}
const personne = new Personne("Alice", 30);


// Methodes
const objet = {
    maMethode() {
        console.log("Méthode d'objet !");
    }
};
objet.maMethode();