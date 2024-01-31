// Processar template strings em funções
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra String'
}

const aluno = 'Thales';
const situacao = 'Aprovado';
console.log(tag `${aluno} está ${situacao}.`);