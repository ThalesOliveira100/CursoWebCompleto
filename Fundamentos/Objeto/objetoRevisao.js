const produto = new Object
produto.nome = 'cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'miata',
    valor: 250000,
    proprietario: {
        nome: 'Thales Oliveira',
        cpf: '164.215.656-62',
        idade: 19,
        endereco: {
            logradouro: 'Av. 123',
            numero: '390'
        },
        condutores: [{
            nome: 'Thales',
            idade: 19
        }, {
            nome: 'Ayumi',
            idade: 19
        }]
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Rua ASBCS';

delete carro.condutores;
delete carro.proprietario.endereco
console.log(carro.condutores)