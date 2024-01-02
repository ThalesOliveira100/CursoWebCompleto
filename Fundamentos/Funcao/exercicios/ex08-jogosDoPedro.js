let stringPontuacoes = '10, 20, 20, 8, 25, 0, 0, 1, 30, 40';

function avaliaPontuacoes(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(', ');
    let qtdQuebraDeRecords = 0;
    let piorJogo = 1;
    let maiorPontuacao = pontuacoes[0];
    let menorPontuacao = pontuacoes[0];

    for (let i = 1; i < pontuacoes.length; i++) {
        if (parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i];
            qtdQuebraDeRecords++;
        } else if (parseInt(pontuacoes[i]) <= parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i];
            piorJogo = i + 1;
        }
    }

    return console.log([qtdQuebraDeRecords, piorJogo]);
}


avaliaPontuacoes(stringPontuacoes);