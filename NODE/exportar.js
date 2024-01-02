console.log(module.exports === this);
console.log(module.exports === exports);

// Os três apontam para o mesmo local no disco, entretanto, não são de fato iguais.

this.a = 1;
exports.b = 2;
module.exports.c = 3

exports = null;
console.log(module.exports);

exports = {
    nome: 'objeto'
}

console.log(module.exports)

// Para se criar um novo objeto do que será retornado ao exportar, é necessário usar o module.exports

module.exports = { publico: true }