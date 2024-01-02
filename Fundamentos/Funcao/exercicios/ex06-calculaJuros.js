function calculaJurosSimples(capitalInicial, taxaDeJuros, TempoDeAplicacao) {
    c = capitalInicial
    i = taxaDeJuros
    t = TempoDeAplicacao;

    juros = c + (c * i * t);
    juros = juros.toFixed(2);
    return console.log(`O valor do juros simples a receber aplicado à taxa de ${i}, por ${t} dias, é igual à ${juros}`)
}

function calculaJurosCompostos(capitalInicial, taxaDeJuros, TempoDeAplicacao) {
    c = capitalInicial
    i = taxaDeJuros
    t = TempoDeAplicacao;

    juros = c * ((1 + i)**t)
    juros = juros.toFixed(2)
    return console.log(`O valor do juros compostos a receber aplicado à taxa de ${i}, por ${t} dias, é igual à R$${juros}`);
}


calculaJurosSimples(100, 0.1, 2);
calculaJurosCompostos(100, 0.1, 2);
