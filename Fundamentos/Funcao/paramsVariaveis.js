function soma() {
    let soma = 0;
    for(i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1.2, 321, 32, 4.54));
console.log(soma('teste', 0, 4390));


