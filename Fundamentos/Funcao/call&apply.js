function getPreco(imposto = 0, moeda = '円') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 1800,
    desc: 0.11111,
    getPreco
}

global.preco = 20;
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco());


const carro = {preco: 50000, desc: 0.01}
console.log(getPreco.call(carro)); 
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, "R$"));      // Recebe os parametros diretamente
console.log(getPreco.apply(carro, [0.2, 'Yen']))    // Recebe os parametros em um array


