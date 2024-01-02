// Arrays constantes não podem ser atribuidos a mais nada, mas o conteúdo do array em sí é passível de alterações.
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen'); // Adiciona um novo elemento ao final de um array
console.log(pilotos);

pilotos.shift() // Remove o primeiro elemnto de um array
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona um novo elemnto ao inicio do array
console.log(pilotos);

// splice pode adicionar e remover
// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Remover
pilotos.splice(3, 1); // Massa novamente
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); // novo array, indice
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4); // 4 indice ha hairanai
console.log(algunsPilotos2);

