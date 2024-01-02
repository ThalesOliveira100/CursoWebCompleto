const filhas = ['Valeska', 'Cibalena'];
const filhos = ['Wesley', 'Maeda'];
const todos = filhas.concat(filhos, 'fulano');

console.log(todos);
console.log(filhas);
console.log(filhos);

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));