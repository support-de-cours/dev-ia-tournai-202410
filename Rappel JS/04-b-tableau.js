// Tableau de nombres
const nombres = [
    /*0*/ 1, 
    /*1*/ 2, 
    /*2*/ 3, 
    /*3*/ 4, 
    /*4*/ 5
];

// Accéder à un élément du tableau
// console.log(nombres[0]); // 1

// Ajouter un index
nombres.push(6)      // ajoute une entrée a la fin du tableau
nombres.pop()        // Supprime le dernier index du tableau
nombres.shift()      // supprime le premier index
nombres.unshift(12)  // ajoute une entrée en debut de tableau
const taille = nombres.length; // retourne la taille du tableau

nombres.reverse();

// console.log(nombres);

const fruits = ['Apples', 'Bananas', 'Kiwis'];

console.log( fruits.indexOf('Apples') );
console.log( fruits.includes('Apples') );


