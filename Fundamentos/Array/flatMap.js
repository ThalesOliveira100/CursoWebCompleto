const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },
    {
        nome: 'Ana',
        nota: 9.2
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },
    {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaAluno = aluno => aluno.nota;
const getNotasTurma = turma => turma.alunos.map(getNotaAluno);

const notas1 = escola.map(getNotasTurma);

console.log(notas1.flat());

Array.prototype.flatMap2 = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap2(getNotasTurma);
console.log(notas2);