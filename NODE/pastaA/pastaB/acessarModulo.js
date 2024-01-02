// Caminho relativo. Para sair da pasta atual utilizar ../
const moduloA = require('../../ModuloA');

const c = require('./pastaC') // Irá trazer o arquivo index.js na pasta por padrão.
console.log(c.ola2);

const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia!');
    res.write(c.ola2);
    res.end()
}).listen(8080);

