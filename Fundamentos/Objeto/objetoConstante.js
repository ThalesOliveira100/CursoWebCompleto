// Um novo objeto utilizando a memoria de um novo local, com seus atributos definidos. É possível alterar o valor dos seus atributos, não o do objeto em sim.
const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa);

// Aqui, é tentado realocar a const pessoa em um novo objeto, que estará em um outro local, o que não é permitido.
// pessoa = {nome: 'Maria'};

Object.freeze(pessoa); // não permite que os atributos do objeto sejam alterados, não gera erro.
pessoa.nome = 'Thales';
pessoa.end = 'Avnda 123';
delete pessoa.nome;
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'Thales'});
pessoaConstante.nome = 'Antonio';
console.log(pessoaConstante);


