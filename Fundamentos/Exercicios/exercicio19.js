calcularMedia = numeros => {
    soma = numeros.reduce((acumulador, total) => acumulador + total);
    quantidade = numeros.length

    return soma / quantidade;
}

arr = [0, 10];

console.log(calcularMedia(arr));
