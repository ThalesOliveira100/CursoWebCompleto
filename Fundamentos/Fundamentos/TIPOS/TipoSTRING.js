const escola = "Cod3r";

console.log(escola.charAt(4)); // Retorna o caractere no índice indicado.
console.log(escola.indexOf('3')); // Retorna o indice do caractere indicado.

console.log(escola.substring(3)); // Retorna uma nova string a partir do indice indicado.
console.log(escola.substring(0, 3)); // Retorna uma nova string a partir do primeiro até último indice informado, mas sem contar o último.

console.log("Escola ".concat(escola).concat("!")); // Concatena strings, sejam literais ou não.
console.log(escola.replace("3", "e")); // Substitui o primeiro valor pelo segundo informado. ACEITA REGEX

console.log("Thales, Philipe, Bernardo".split(",")); // Separa, gerando um array, todos os elementos utilizando o caractere indicado como separador. ACEITA REGEX

