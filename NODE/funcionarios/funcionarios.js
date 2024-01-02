const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios'); // Client http
const { times } = require('lodash');

const japonesas = funcionario => funcionario.pais === 'Japan' && funcionario.genero === 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data;
    // console.log(funcionarios.filter(japonesas));

    const func = funcionarios
    .filter(japonesas)
    .reduce(menorSalario);

    console.log(func);
})


