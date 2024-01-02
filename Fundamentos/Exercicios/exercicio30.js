const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0);
const media = array => soma(array) / array.length;

receberMelhorEstudante = estudantes => {
    const estudantesComMedia = Object.entries(estudantes).map(estudante => {
        const chave = 0, valor = 1;

        return { nome: estudante[chave], media: media(estudante[valor])};
    })

    const estudantesOrdenados = estudantesComMedia.sort(
        (estudanteA, estudanteB) => estudanteB.media - estudanteA.media
    );
    const melhorEstudante = estudantesOrdenados[0]; 
    return melhorEstudante;
}

const estudantes = {
    Joao: [8, 7.6, 8.9, 6],
    Maria: [9, 5.5, 8.1, 7],
    Carla: [10, 8, 7.4, 9]
}

console.log(receberMelhorEstudante(estudantes));