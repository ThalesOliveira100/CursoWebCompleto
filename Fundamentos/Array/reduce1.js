const alunos = [
    { nome: 'Maria', nota: 9.2, bolsita: true },
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsita: false },
    { nome: 'Jessica', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
}, 100)

console.log(resultado)