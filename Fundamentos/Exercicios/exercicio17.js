somarNumeros = numeros => {
    let soma = 0;
    numeros.forEach( numero => soma += numero );

    return console.log(soma);
}

// reduce arrowFunction
somarNumeros = numeros => console.log(numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0));


array1 = [1, 4, 7, 3, 5, 2];

somarNumeros(array1);
