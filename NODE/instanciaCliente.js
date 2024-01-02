// Onde não usamos o factory o node utilizara a mesma instancia, se referindo ao mesmo objeto, devido ao cache.
const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

// Ao usar o factory, ultrapassamos este problema, e nos é gerado duas novas instancias.
const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();
contadorA.inc();
console.log(contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);


