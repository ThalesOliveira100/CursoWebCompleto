const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[-1]); // Nesse contexto não exite um último item no array
console.log(valores[valores.length]); // Consegue puxar o último item inserido

valores[6] = 10;
console.log(valores);
console.log(valores.length)

valores.push({id: 0}, null, undefined, false, "string"); // adiciona novos valores ignorando casas vazias
console.log(valores);

// Remove itens de um array
valores.pop(-1); // Nesse contexto ele reconhece o -1 como o último item inserido
delete valores[0]; // Não remove, apenas apaga o item no array inserido
console.log(valores);

console.log(typeof(valores)); // Tratado como object

