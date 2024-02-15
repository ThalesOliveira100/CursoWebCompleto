// integra em cima de valores. O for normal integra em cima de indices.

for (let letra of "Cod3r") {
    console.log(letra);
}

const assuntosEmca = ['map', 'set', 'promise'];


// For in - Pega indices
for (let i in assuntosEmca) {
    console.log(i);
}

// For of - Pega os valores do indices
for (let assunto of assuntosEmca) {
    console.log(assunto);
}

const assuntosMap = new Map ([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false}]
]);

// Percorre pelas chaves e valores do map
for (let abordados of assuntosMap) {
    console.log(abordados);
}

// Percorre apenas pelas chaves do map
for (let chave of assuntosMap.keys()) {
    console.log(chave);
}

// Percorre apenas pelos valores do map
for (let valor of assuntosMap.values()) {
    console.log(valor);
}

// Percorre as entradas do map, acessando chave e valor de forma separada.
for (let [ch, vlr] of assuntosMap.entries()) {
    console.log(ch, vlr);
}

const s = new Set(['a', 'b', 'c']);
for (let letras of s) {
    console.log(letras);
}