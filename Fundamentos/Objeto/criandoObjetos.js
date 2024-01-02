// Usando notação literal
const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// Função Construtora
function Produto(nome, preco, desc) {
    this.nome = nome;

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto("caneta", 7.99, 0);
const p2 = new Produto("notebook", 4999.59, 0.1);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,

        getSalario() {
            return ((salarioBase / 30) * (30 - faltas))
        }
    }
}

const f1 = criarFuncionario('João', 7800, 2);
const f2 = criarFuncionario('Maria', 9800, 4);
console.log(f1.getSalario(), f2.getSalario());


// Object.create()

const filha = Object.create(null);
filha.nome = 'ana';

console.log(filha);


// Uma função famosa que retorna objeto:
const fromJSON = JSON.parse('{"info": "Sou um objeto"}');
console.log(fromJSON.info);
