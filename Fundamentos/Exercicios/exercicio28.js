filtrarPorQuantidadeDeNumeros = (numeros, digitos) => {
    novoArray = [];

    for(numero of numeros) {
        const quantidadeDeDigitos = String(numero).length; // Conversão de Number para String

        if (quantidadeDeDigitos === digitos) {
            novoArray.push(numero);
        }
    }

    return novoArray;
}

filtrarPorQuantidadeDeNumeros = (numeros, digitos) => {
    return numeros.filter(numero => {
        const quantidadeDeDigitos = String(numero).length; // Conversão de Number para String
        return quantidadeDeDigitos == digitos;
    })
}


arr1 = [20, 4, 349, 342, 21, 43, 900, 3];
console.log(filtrarPorQuantidadeDeNumeros(arr1, 3));