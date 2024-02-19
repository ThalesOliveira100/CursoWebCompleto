function funcionarOuNao(valor, chanceDeErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            // O random irá gerar um valor entre 0 e 1, e caso ele seja menor que o informado pelo usuário o erro irá ocorrer.
            if (Math.random() < chanceDeErro) {
                reject('Ocorreu um erro');
            } else {
                resolve(valor);
            }
        } catch(e) {
            reject(e);
        }
    })
}

funcionarOuNao('teste', 0.5)
    .then(vlr => `Valor: ${vlr}`)
    .then(
        vlr => consol.log(vlr),
        // err => console.log(`Erro Esp.: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))

    // Quando um erro é tratado dentro um then, o catch não será chamado.

    // Não é recomendado tratar o erro no then pois os dados não serão passados para o proximo then, fazendo com que o ciclo se encerre.