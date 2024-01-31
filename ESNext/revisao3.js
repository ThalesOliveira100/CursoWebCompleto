// ES*: Object.values / Object.entries
// Pega os valores e a chave e valor dos objetos
const obj = { a: 1, b: 2, c:3 }
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));


// Melhorias na Notação Literal
const nome = 'carla';
const pessoa = {
    nome,
    ola() {
        return 'Consigo criar funtions sem declarar'
    }
}

console.log(pessoa.nome, pessoa.ola());

// Class
// Internamente serão convertidas para funções
class Animal {};
class Cachorro extends Animal {
    falar() {
        return 'au au au!'
    }
}

console.log(new Cachorro().falar())