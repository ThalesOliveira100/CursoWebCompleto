function arredondarNota(nota) {
    if (nota < 38) {
        return nota;
    } else if(nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota;
    }
}

function classificaAluno(nota) {
    let notaCorrigida = arredondarNota(nota);
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

classificaAluno(98);
classificaAluno(38);
classificaAluno(37);
classificaAluno(43);
classificaAluno(68);
classificaAluno(93);
