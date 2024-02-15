function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)

        if (segundos > 5) {
            reject(reason = 'Tempo inaceitável')
        }
    })
}

// Resolve só aceita um parametro
// then pode ser utilizado inumeras vezes.
// catch apenas uma vez para a tratação de erro

falarDepoisDe(7, 'Show de bolice')
    .then(frase => frase.concat('?!?'))
    .then(outrafrase => console.log(outrafrase))
    .catch(e => console.log(e))