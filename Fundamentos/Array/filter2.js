Array.prototype.filter2 = function(callback) {
    let novoArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            novoArray.push(this[i]);
        }       
    }

    return novoArray;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragl: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

const produtoCaro = produto => produto.preco > 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(produtoCaro).filter2(fragil)); 
