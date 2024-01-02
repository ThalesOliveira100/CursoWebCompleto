function removerPropriedade_(objeto, parametroParaRemover) {
    const novoObjeto = Object.assign({}, objeto);
    delete novoObjeto[parametroParaRemover];

    return console.log(novoObjeto);
}

removerPropriedade = (objeto, parametroParaRemover) => {
    const novoObjeto = Object.assign({}, objeto);
    delete novoObjeto[parametroParaRemover];

    return console.log(novoObjeto);
}

obj1 = { nome: 'Thales', idade: 19, endereco: '' }

removerPropriedade(obj1, 'endereco');

