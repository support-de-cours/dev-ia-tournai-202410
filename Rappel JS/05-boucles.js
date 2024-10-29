const fruits = ['Apples', 'Bananas', 'Kiwis'];

// for (let i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }


// let i = 0;
// while (i<fruits.length) {
//     console.log(fruits[i]);
//     i++;
// }

// while (fruits.length) {
//     console.log(fruits[0]);
//     fruits.shift();
// }


// fruits.forEach( function(fruit) { console.log(fruit); } );
// fruits.forEach( fruit => console.log(fruit) );

// for (const fruit of fruits) {
//     console.log(fruit);
// }
// for (const fruit in fruits) {
//     console.log(fruit);
// }

// console.log(fruits);


const personne = {
    nom        : "Dupont",
    prenom     : "Jean",
    age        : 30,
    ville      : "Paris",
    estEtudiant: false
};

// for (const element in personne) {

//     console.log( personne[element] );
    
// }

// console.log(personne.prenom);
// console.log(personne['prenom']);



Array.from(fruits, fruit => console.log(fruit))
