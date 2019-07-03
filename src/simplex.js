const SimpleSimplex = require('simple-simplex');

var metodo = function(){
// initialize a solver
var resultado;
var resultado2;
const solver = new SimpleSimplex({
  objective: {
    a: 1,
    b: 2
   	
  },
  constraints: [
    {
      namedVector: { a: 1, b: 1 },
      constraint: '<=',
      constant: 10
    },
    {
      namedVector: { a: 2, b: 3},
      constraint: '<=',
      constant: 24
    },
    {
      namedVector: { a: 0, b: 1 },
      constraint: '<=',
      constant: 6
    },
  ],
  optimizationType: 'min',
});
 
// call the solve method with a method name
const result = solver.solve({
  methodName: 'simplex',
});
 
// see the solution and meta data
/*console.log({
  solution: result.solution,
  isOptimal: result.details.isOptimal,
});*/

//var {details: { finalTableau: tablafinal, tableaus: tabla, isOptimal: optimo }, solution: {coefficients: {a: a_op, b: b_op, c: c_op}, optimum: punto_optimo}} = resultado

//resultado = result.details.finalTableau;

resultado = result;
resultado2 = Object.values(result.solution.coefficients);
console.log(resultado2);
console.log(resultado);
return result.details.finalTableau;

/*
console.log(result.details.finalTableau[0]);
console.log(result.details.finalTableau[1]);
console.log(result.details.finalTableau[2]);
console.log(result.details.finalTableau[3]);
*/
}

module.exports = metodo;











