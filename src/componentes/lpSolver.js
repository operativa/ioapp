

var metodo = function(dato){

const solver = require('javascript-lp-solver/src/solver');

var model = dato;

model = solver.ReformatLP(model); 
var results = solver.Solve(model);
console.log(results);

}

module.exports = metodo;