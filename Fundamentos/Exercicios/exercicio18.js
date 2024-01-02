somarTotalDespesas = arrProdutosServicos => {
    const precos = arrProdutosServicos.map(p => p.preco);

    return console.log(precos.reduce((acumulador, atual) => acumulador += atual ))
}

// Não funcionou aqui, mas tá lá
somarTotalDespesas = arr => arr.reduce((acumulador, atual) => acumulador + atual.preco); 

somarTotalDespesas = arr => {
    var total = 0;

    for(let item of arr) {
        total += item.preco
    }
    return total;    
}


let produtos = [
    { nome: 'Jornal da Cidade', categoria: 'Informação', preco: 89.99 },
    { nome: 'Cinema', categoria: 'Entretenimento', preco: 150 }
]

console.log(somarTotalDespesas(produtos));