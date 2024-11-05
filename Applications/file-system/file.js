const fs = require('fs');
const fileAsync = "data-async.txt";
const fileSync = "data-sync.txt";

// Write File Async
// --

fs.writeFile(fileAsync, "Hello There (Async) !", error => {
    if (error) throw error;
    console.log("1. Fichier Async enregistré.");
});


// Write File Sync
// --

fs.writeFileSync(fileSync, "Hello There (Sync) !");
console.log("2. Fichier Sync enregistré.");



// Read File Async
// --

fs.readFile(fileAsync, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


// Read File Sync
// -- 
const data = fs.readFileSync(fileSync, 'utf8');
console.log(data);