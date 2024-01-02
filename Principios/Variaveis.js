let nomeCaneta = "Isqueiro BIC"
let qntCanetas = 10;
let precoCaneta = 6.4;
let impostoCaneta = 1.5;
let precoFinal = precoCaneta + impostoCaneta;

console.log("Nome: " + nomeCaneta);
console.log("Quantidade: " + qntCanetas);
console.log("Preço: " + precoCaneta);
console.log("Imposto: " + impostoCaneta);
console.log("Preço final: " + precoFinal);

// TIPOS BÁSICOS DE DADOS
/*
Funcão Typeof() retorna o tipo de dado utilizado em alguma variavél
*/

let idade = 19;                 // number (negativo ou não)
let salario = 1800.50;          // number, não float/double
let estaChovendo = false;       // boolean
let nome = "Thales";            // string

// TIPO CONSTANTE EM VARIAVEIS
/*
Não permite a alteração do valor da variável em questão.
Variáveis constantes normalmente são declaradas em letra maiúscula.
*/
const IDCOMPUTADOR = "00329-10180-00000-AA786";