// Funcão sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
};

imprimirSoma(2, 3);
imprimirSoma(2); // b => Undefined --> 2 + Undefined = NaN
imprimirSoma(2, 3, 4, 5, 6); // Ignora todos os outros parametros que não sejam declarados na função

// Função con retorno
function soma(a, b = 100) {
    return a + b;
}

console.log(soma(2));