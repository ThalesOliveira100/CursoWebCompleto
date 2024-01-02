 // Clousure é o escopo criado quando uma função é declarada.
 // Esse escopo permite a fuunção acessar e manipular variáveis externas à função


const x = 'global';

function fora() {
    const x = 'local';
    function dentro() {
        return x;
    }
    return dentro(x)
}

const minhaFuncacao = fora();
console.log(minhaFuncacao);