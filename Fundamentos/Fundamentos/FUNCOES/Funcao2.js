// Armazenar função dentro de uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b);
};

imprimirSoma(2, 100);

// Armazenar função arrow em uma variável
const soma = (a, b) => {
    return a + b;
};

console.log(soma(1, 2));

// retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2("dasifnfasdnfsad");

