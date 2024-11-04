const path = require('path');

// const math_file = `${__dirname}/../utils/math.js`;
const math_file = path.join(__dirname, 'utils/math.js');
const math = require( math_file );
console.log( math_file );

const dotenv = require('dotenv');
dotenv.config();

// console.log( process.env );
