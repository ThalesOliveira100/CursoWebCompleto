let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo+"\n\n")

console.log("Itens que retornam valores verdadeiros..");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // Verifica o resultado de uma atribuição

console.log("\n");

console.log("Itens que retornam falso..");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false)); // Verifica o resultado de uma atribuição

console.log("\n");

console.log("SAIGO NI..");
console.log(!!("" || null || 0 || "aopa")) // Com o !! ele irá verificar se algum dos valores é verdadeiro ou não
console.log("" || null || 0 || "eai") // Sem o !! ele retornará o valor verdadeiro

console.log("\n\nAplicações: ")
// Verifica nome preenchido

const nome = "";
console.log(nome || "não informado")



