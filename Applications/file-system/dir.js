const fs = require('fs');


// Creation d'un répertoire
// --

// fs.mkdir('a/b/c/d', { recursive: true }, (err) => {
//     if (err) throw err;
//     console.log('Répertoire créé!');
// });

// fs.mkdirSync('e/f/g/h', { recursive: true });
// console.log('Répertoire créé!');


// Suppression d'un fichier
// --

// fs.unlink('a/b/c/d/test.txt', (err) => {
//     if (err) throw err;
//     console.log('Fichier supprimé!');
// });

// Suppression de repertoire
// --

// fs.rmdir('a/b/c', { recursive: true }, (err) => {
//     if (err) throw err;
//     console.log('Répertoire supprimé!');
// });


// Verifier l'existence d'un fichier
// --

fs.access('a/b/c/d/test.txt', fs.constants.F_OK, (err) => {
    console.log(err ? 'Fichier n’existe pas' : 'Fichier existe');
});