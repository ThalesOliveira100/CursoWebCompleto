// area = PI * raio^2

let raio = 10;
const PI = Math.PI;
const area = PI * (raio * raio);

console.log(`A área da Circunferencia de raio ${raio} é de ${area.toFixed(2)}`)


/*
Caso o valor da variável de um dos operadores seja alterado durante a execução do programa,
o valor da variável final também não será alterada caso seja definida como constante, mesmo
que a definição da mesma em si não mude.
*/

raio = 123;

console.log(`A área da Circunferencia de raio ${raio} é de ${area.toFixed(2)}`)

