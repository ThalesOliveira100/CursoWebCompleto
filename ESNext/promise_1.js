// p.then(function teste(argumento) {

// })

const primeiroElemento = arrayOuString => arrayOuString[0];

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Calos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letra => letra.toLowerCase())
    // .then(letraMinuscula => console.log(letraMinuscula))
    .then(console.log)