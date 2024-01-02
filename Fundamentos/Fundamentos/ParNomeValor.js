 // par nome e valor
 const saudacao = 'Opa'; // contexto léxico 1

 function exec() {
    const saudacao = 'Faaaala'; // contexto léxico 2
    return saudacao;
 };

 const Cliente = {
    nome: 'Thales',
    idade: 20,
    peso: 80,
    endereco: {
        logradouro: 'Avenida Coronel Juventino Dias',
        numero: 190
    }
 };

 console.log(saudacao);
 console.log(exec());
 console.log(Cliente);
 