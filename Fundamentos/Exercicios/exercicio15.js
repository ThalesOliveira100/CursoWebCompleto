receberSomente0sParesDeIndicesPares_ = array => {
    resultado = [];

    for (let i = 0; i < array.length; i+=2) {
        if (array[i] % 2 === 0) {
            resultado.push(array[i]);
        }
    }
    return console.log(resultado);
}

receberSomente0sParesDeIndicesPares = array => {
    return console.log(array.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0;
        const indicePar = indice % 2 === 0;

        return numeroPar && indicePar;
    }))
}


array1 = [2, 45, 44, 34, 51];
receberSomente0sParesDeIndicesPares(array1);