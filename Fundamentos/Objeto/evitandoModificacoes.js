// Object.preventsExtensions
// Permite modificar os atributos, mas não permite adicionar novos.
const produto = Object.preventExtensions({
    nome: 'prod1', preco: 1.99, tag: 'promocao'
});

console.log('Extensível: ' + Object.isExtensible(produto));

produto.nome = 'Borracha maneira';
produto.descrisao = 'Uma borracha muito maneira';
delete produto.tag;
console.log(produto);

// Object.seal
// Permite modificar valores dos atributos, mas não permite adicionar novos ou excluí-los.
const pessoa = { nome: 'Thales', idade: 19 };
Object.seal(pessoa);

console.log('Selado: ' + Object.isSealed(pessoa));

pessoa.sobrenome = 'Oliveira';
delete pessoa.nome;
pessoa.idade = 20;

console.log(pessoa);

// Object.freeze
// Junção do Object.seal e do Object.preventsExtensions
