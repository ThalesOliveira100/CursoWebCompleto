const alunos = [
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Jessica', nota: 8.7, bolsista: false }
]


// Retornar verdadeiro ou falso para todos os alunos bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));


// Retornar verdadeiro ou falso caso algum dos alunos seja bolsista
function retornaBolsita(aluno) {
    return aluno.bolsista;
}

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(retornaBolsita).reduce(algumBolsista));

