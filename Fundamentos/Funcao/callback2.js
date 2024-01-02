const notas = [6.7, 8.9, 9.0, 10.0, 5.5, 8.1, 1.1];

// Extrair notaos menos que 7
const notasMenorQue7 = nota => nota < 7;

// Sem callback
let notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

// Com callback
const notasBaixas2 = notas.filter(notasMenorQue7); // Realiza a operação/função informada e retorna apenas os valores com resultado positivos
console.log(notasBaixas2);
