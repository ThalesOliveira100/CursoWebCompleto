function gerarNumerosEntre(min, max, numeroProibidos) {
    if (min > max) { [max, min] = [min, max]; }
    return new Promise((resolve, reject) => {
        const fator = (max - min + 1);
        const aleatorio = parseInt(Math.random() * fator) + min;
        
        if (numeroProibidos.includes(aleatorio)) {
            reject(`Número repetido: ${aleatorio}`)
        } else {
            resolve(aleatorio);
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros));
        }
        return numeros
    } catch(e) {
        if(tentativas > 5000) {
            throw 'Já deu pra mim, não vou tentar denovo não'
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1);
        }
    }
}

gerarMegaSena(30)
    .then(console.log)
    .catch(console.log)

