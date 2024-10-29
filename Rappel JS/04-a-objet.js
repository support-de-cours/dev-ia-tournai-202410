const personne = {
    nom        : "Dupont",
    prenom     : "Jean",
    age        : 30,
    ville      : "Paris",
    estEtudiant: false
};

console.log( personne.nom + " " + personne.prenom );
console.log( personne.nom.concat(" ").concat(personne.prenom) );
console.log( personne.nom.concat(" ", personne.prenom) );

console.log( `${personne.nom} ${personne.prenom}` );

// ----

// const nom = personne.nom;
// const prenom = personne.prenom;

// console.log( `${nom} ${prenom}` );

const {nom, prenom, x} = personne;

console.log( `${nom} ${prenom}` );
console.log(x);

// ----

const voiture = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2021,
    proprietaire: {
        nom: "Martin",
        age: 35
    }
};
  
const voiture2 = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2021,
    proprietaire: personne
};

console.log( voiture2.proprietaire.prenom );



// ----

// Fusion d'objet, avec l'operateur de propagation (...)
// console.log( voiture + voiture2 );
const superCar = { ...voiture, ...voiture2 };

console.log(superCar);



function doSomething(options) {
    const defaults = {
        color: "green",
        level: 4
    };

    options = {...defaults, ...options}

    console.log(options);
    
    // ...
}


doSomething();
doSomething({level:42});
