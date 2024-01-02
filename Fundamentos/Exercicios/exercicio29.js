ordenaArrayNumerico = numeros => numeros.sort((numeroA, numeroB) => numeroB - numeroA);

segundoMaior = numeros => {
    const maiorNumero = Math.max(...numeros);
    numeros = numeros.filter(numero => numero != maiorNumero);
    const segundoMaior = Math.max(...numeros);

    return segundoMaior;
}

segundoMaior = numeros => {
    numerosOrdenados = ordenaArrayNumerico(numeros);
    return numerosOrdenados[1];
}

numeros = [12, 16, 4, 7, 10];
console.log(segundoMaior(numeros));
