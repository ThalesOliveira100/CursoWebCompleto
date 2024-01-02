console.log(soma(3, 4));
// function declaration
// Vantagem: Pode ser chamada antes da declaração, pois o compilador carrega todas as funções antes de rodar o código
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x- y;
}

// named function expression
const mult = function mult(x, y) {
    return x * y;
}

