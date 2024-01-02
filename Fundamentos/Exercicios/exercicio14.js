// For function
objetoParaArray_= objeto => {
    const resultado = [];
    for (key in objeto) {
        resultado.push([key, objeto[key]])
    }

    return console.log(resultado);
}

// Declaration Function
objetoParaArray_ = objeto => {
    const chaves = Object.keys(objeto);
    console.log(chaves)
    const resultado = chaves.map( chave => [chave, objeto[chave]]);

    return console.log(resultado);
}

// cho arrayFunction
objetoParaArray = objeto => console.log(Object.entries(objeto));

obj1 = { nome: 'thales', profissao: 'Desenvolvedor de Softwares' };
objetoParaArray(obj1);

