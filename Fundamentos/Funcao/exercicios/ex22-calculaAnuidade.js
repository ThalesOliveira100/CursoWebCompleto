function calculaAnuidade(mes, valor) {
    atraso = mes - 1;
    juros = valor * Math.pow(1.05, atraso)
    console.log(juros.toFixed(2));
}

calculaAnuidade(10, 500);
