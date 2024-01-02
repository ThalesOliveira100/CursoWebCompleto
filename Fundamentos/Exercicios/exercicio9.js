function repetir(elemento, vezes) {
    array = []
    for (let i = 0; i < vezes; i++) {
        array.push(elemento);
    }
    return array;
}

console.log(repetir('Aopa', 5));