function verificaValorDoProduto(codigo) {
    switch (codigo) {
        case 100:
            console.log(`Cachorro Quente escolhido, preço: R$3,00`);
            break;
        case 200:
            console.log('Hambúrger Simples escolhido, preço: R$4,00');
            break;
        case 300:
            console.log('Cheeseburger escolhido, preço: R$5,50');
            break;
        case 400:
            console.log('Bauru escolhido,preço: R$7,50');
            break;
        case 500:
            console.log('Refrigerante escolhido, preço: R$3,50');
            break;
        case 600:
            console.log('Suco escolhido, preço: R$2,80');
            break;
        default:
            console.log('Produto não existente.');
            break;
    }
}

verificaValorDoProduto(100);
verificaValorDoProduto(400);
verificaValorDoProduto(600);
verificaValorDoProduto(900);
