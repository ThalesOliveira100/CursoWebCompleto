/*
NUMBER
*/

const peso1 = 1;
const peso2 = Number(3.14);

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.8739;
const avaliacao2 = 8.4390;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)
console.log(media.toFixed(2));
console.log(media.toString(2)) // Retorna um valor em string, e com o valor 2 inserido retornará a string em binário.

/*
Alguns cuidados ao utilizar o tipo Number:
*/

// -> Retorna o tipo Infinity
console.log(7/0);

// -> Consegue dividir e multiplicar valores em strings
console.log("10" * 5)
console.log("10.5" / 5) // Não consegue realizar a operação, retornando NaN


console.log(0.2 + 0.3) // Não retorna o valor preciso devido algumas especificações