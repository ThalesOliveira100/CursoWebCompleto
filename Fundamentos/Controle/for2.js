const notas = [6.4, 4.4, 7.1, 9.8, 8.3];

for (let i in notas) {
    console.log(`i = ${i}, nota = ${notas[i]}]`);
}

const pessoa = {
    nome: 'Thales',
    sobrenome: 'Oliveira',
    idade: 19,
    cpf: '164.215.656-02'
};

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);

}

