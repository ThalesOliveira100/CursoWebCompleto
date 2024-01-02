console.log(typeof Array, typeof new Array, typeof []);

// Não recomendada, mas valida.
let aprovados = new Array( 'Bia', 'Carlos', 'Ana' );
console.log(aprovados);

aprovados = [ 'Thales', 'Bernardo', 'Philipe' ];
console.log(aprovados[0]);
console.log(aprovados[2]);

aprovados[3] = 'Leonardo';
aprovados.push('Gabryel');

console.log(aprovados.length);

aprovados[8] = 'Ludwig';
console.log(aprovados);
console.log(aprovados[6] === undefined && !null)

aprovados.sort(); // Reordena o array, de padrão em ordem alfabetica romanji
console.log(aprovados);


testeEmJap = ['ひらがな', 'カタカナ', '漢字', 'タレス', 'あ']
testeEmJap.sort();
console.log(testeEmJap);

delete aprovados[1]; // Kotoba doori aitemu wo deretushimasu, desuga, array ni sort() wo tsukawanai
console.log(aprovados[1], aprovados[2]);

aprovados = [ 'Thales', 'Bernardo', 'Philipe' ];
aprovados.splice(1, 2, 'Elemento 1', ['Teste', 'teste 1']); // Indice a ser trabalhado, quantidade de indices a serem afetados, ...novos elementos
console.log(aprovados);

