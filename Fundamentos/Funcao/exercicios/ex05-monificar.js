function monificaValor(valor) {
    return `R$ ${valor.toFixed(2).toString().replace('.', ',')}`; // Capssense
}

console.log(monificaValor(32.30984308));
