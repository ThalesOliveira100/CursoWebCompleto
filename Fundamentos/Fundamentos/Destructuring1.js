const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'ORA ORA ORA ORA ORA ORA',
        numero: 123
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const {sobrenome, BemHumorada = True} = pessoa;
console.log(sobrenome, BemHumorada);

const {endereco: {logradouro, numero, cep} } = pessoa; // Não realiza o destructuring no endereco, não criando a variável.
console.log(logradouro, numero, cep);

// const {banco: {ag, num}} = pessoa; // Não consegue adentrar em propriedades não criadas, retornando erro.
