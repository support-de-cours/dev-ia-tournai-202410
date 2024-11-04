function addition(a, b) {
    return a+b;
}
function subtraction(a, b) {
    return a-b;
}

module.exports = {
    addition,
    subtraction,
    multiply: function(a, b) {
        return a*b
    },
    divide: (a, b) => a/b
}