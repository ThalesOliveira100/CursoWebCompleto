const nome = "Thales";
const concatenacao = ("Olá " + nome + "!");
const template = (`
    Olá 
    ${nome}!`); // interpreta espaços de indexação

console.log(concatenacao, template);

// Função elo
const up = s => s.toUpperCase();

console.log(`Ei.. ${up("teste")}`);