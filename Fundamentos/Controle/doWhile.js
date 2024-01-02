// o doWhile funciona como o While, entretanto ele não irá verificar a situação da variável informada enquanto ele não rodar a primeira vez

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// Não é necessário atribuir o valor inicial da variável se a mesma for ser reatribuida durante a execução;
let opcao;

do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`A opção escolhida foi ${opcao}!`);
} while (opcao != -1);

console.log('Final');
