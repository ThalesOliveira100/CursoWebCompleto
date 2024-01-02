const aprovados = ['Agatha', 'Aldo', 'Taresu', 'Raquel'];

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
})

aprovados.forEach(nome => { console.log(nome); })

const exibirAprovadorComIndice = (nome, indice) => console.log(`${indice + 1}) ${nome}`);
aprovados.forEach(exibirAprovadorComIndice);
