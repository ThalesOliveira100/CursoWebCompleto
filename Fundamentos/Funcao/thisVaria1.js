/* 
Em funções definidas no metodo tradicional o this irá variar de acordo com o contexto em que for chamado. Entretanto, em funções elo, o this irá sempre apontar para o contexto em que foi gerado.

Em funções normais, utilizando a a função "bind", há como o this não variar, trazendo novamente o contexto léxico, thislexia. 
*/


// THIS E BIND:
const pessoa = {
    saudacao: 'Aopa',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar;
falar(); // Conflito entre o mundo da programão funcional e a Orientada à Objetos.

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();