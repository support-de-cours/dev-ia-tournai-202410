// console.log( global );
// console.log( process );

const express = require('express');
// const addition = require('./utils/add');

const { multiply, addition, subtraction, divide } = require('./utils/math');

// console.log( addition(10, 5) );
console.log( addition(10, 5) );
console.log( subtraction(10, 5) );
console.log( divide(10, 5) );
