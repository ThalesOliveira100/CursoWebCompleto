// Não confundir com o JSON -> Java Script Object Notion
const prod1 = {};

// Variavéis do objeto podem ser definidas dinamicamente
prod1.nome = "Celular Ultra Mega";
prod1.valor = 4998.90;
prod1['Desconto muito bom'] = 0.40; // Evitar atributos com espacos

console.log(prod1);

// Criação de objeto de forma literal
const prod2 = {
    nome: "Camisa boa",
    preco: 79.90,
    obj: {
        eai: 10,
        obj: {
            aopa: "bão?"
        }
    }
};

console.log(prod2);