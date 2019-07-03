var metodo= function(datos) {const SimpleSimplex = require('simple-simplex');

const solver = new SimpleSimplex(datos);
const result = solver.solve({
	methodName: 'simplex'
})

console.log(result.details);
return result.details.finalTableau;
}

module.exports = metodo