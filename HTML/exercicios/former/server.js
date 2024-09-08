const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extends: true}))
 

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabains. Usuário incluido!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabains. Usuário Alterado!</h1>')
})

app.listen(5500)