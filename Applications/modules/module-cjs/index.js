// Exemple d'appel de modules CommonJS
// --

const math = require('./math');
const { multiply } = require('./math');

console.log( math.add(10, 5) );
console.log( multiply(10, 5) );
