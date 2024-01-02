function criarProdutos(nome, preco) {
    return {
        nome, preco, desconto: 0.1
    }
}

a = criarProdutos('teset0', 2011);
console.log(a);
 