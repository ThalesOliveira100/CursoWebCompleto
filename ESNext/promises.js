function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

// Resolve só aceita um parametro
// then pode ser utilizado inumeras vezes.
// catch apenas uma vez para a tratação de erro

falarDepoisDe(3, 'Show de bolice')
    .then(frase => frase.concat('?!?'))
    .then(outrafrase => console.log(outrafrase))
    .catch(e => console.log(e))