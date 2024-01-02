// Utilizando função elo
// 1) Nome, 2) expressão que retorne v ou f, 3) Resultado se V, 4) Resultado se F
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.7));

const status = nota => {
    nota >= 7 ? 'Aprovado' : 'Reprovado';
}

