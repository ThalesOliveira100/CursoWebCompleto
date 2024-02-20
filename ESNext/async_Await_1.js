function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// Dino permite colocar o await diretamente no arquivo, o node não. Logo, se faz necessário criar uma função para isso.
/* await esperarPor(3000) */

// esperarPor(2000)
//     .then(() => console.log('Executando Promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 3...'))


async function retornarValorRapido() {
    return 20;
}

// Refazer mesmo código usando async e await
async function executar() {
    let valor = await retornarValorRapido()

    // Toda função que retorna uma promise pode ser usada com await
    await esperarPor(1500);
    console.log(`Async/Await ${valor}...`);

    await esperarPor(1500);
    console.log(`Async/Await ${valor + 1}...`);

    // Sem o await será instantaneo
    esperarPor(1500);
    console.log(`Async/Await ${valor + 2}...`);

    return valor + 3;
}

async function executarDeVerdade() {
    const valor = await executar();
    console.log(valor);
}

executarDeVerdade()