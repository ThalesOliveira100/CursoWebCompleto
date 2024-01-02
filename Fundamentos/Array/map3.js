Array.prototype.map2 = function(callback) {
    let novoArray = [];

    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray;
}




const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const toObj = json => JSON.parse(json);
const returnPreco = e => e.preco;

produtos = carrinho.map2(toObj).map2(returnPreco);
// produtos = carrinho.map(toObj = json => JSON.parse(json)).map(e = e => e.preco)


console.log(produtos)
