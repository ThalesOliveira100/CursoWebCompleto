let valor; // não inicializado
// console.log(valor2) ---> não declarado
console.log(valor);

valor = null; // ausencia de valor, mas não aponta pra nenhum objeto em memoria
console.log(valor)

const produto = {};
console.log(produto.preco);

produto.preco = 3.50;
produto.preco = undefined; // evitar
console.log(!!produto.preco);
console.log(produto);

