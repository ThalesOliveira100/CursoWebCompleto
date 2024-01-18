// Express servidor web
const porta = 3003;

const express = require('express');
const app = express();
const db = require('./db')

// app.use == sempre irá conseguir acessar o middleware informado, independente do caminho.

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
});

// Dois pontos antes do id, representa que o id é um parametro de rota. Neste caso, é possível acessar através de /produtos/123 por exemplo.

// Em casos compostos '/produtos/:id/:nome' teriamos a req.params.id e req.params.nome
app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

// Deve ser enviado utilizando o metodo POST, escrito em um body com a opção 'x-www-form-urlencoded' selecionada.
app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    });
    res.send(produto); // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está sendo executando na porta ${porta}.`);
})
