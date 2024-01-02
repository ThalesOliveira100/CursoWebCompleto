function verificaDivisaoPor3(numero) {
    if (numero % 3 > 0) {
        return console.log(`${numero} não é divisível por 3!`);
    } else {
        return console.log(`${numero} é divisível por 3!`);
    }
}

verificaDivisaoPor3(3);
verificaDivisaoPor3(4);
verificaDivisaoPor3(150);
