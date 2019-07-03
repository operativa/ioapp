var metodo= function(dato1,dato2) {var simplex = require('simplex-solver');

var result = simplex.maximize(dato1, dato2);

console.log(result);
}

module.exports = metodo;