const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const toObj = json => JSON.parse(json);
const returnPreco = e => e.preco;

produtos = carrinho.map(toObj).map(returnPreco);
// produtos = carrinho.map(toObj = json => JSON.parse(json)).map(e = e => e.preco)


console.log(produtos)
