const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
    if (inclusivo === true) {
        return minimo <= numero && numero <= maximo;
    } else {
        return minimo < numero && numero < maximo;
    };
};

console.log(estaEntre(1, 1, 3));
console.log(estaEntre(1, 1, 3, true));
