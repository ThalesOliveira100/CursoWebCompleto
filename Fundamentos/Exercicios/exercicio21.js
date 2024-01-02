// Classic
menorNumero = numeros => {
    let menor = numeros[0];

    for(let i in numeros) {
        if(numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    return console.log(menor);
}

// Reduce arrowFunction
menorNumero = numeros => {
    return console.log(numeros.reduce((anterior, atual) => (anterior > atual ? atual : anterior)));
}

// ultra modest arrowFunction
menorNumero = numeros => console.log(Math.min(...numeros));


arr1 = [0, -4, 32, 54, 6,56, 54, -9, -1];
menorNumero(arr1);