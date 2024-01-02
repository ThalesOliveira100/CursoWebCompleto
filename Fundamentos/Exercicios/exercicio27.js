inverter = objeto => {
    const paresDeValoresInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )

    return Object.fromEntries(paresDeValoresInvertidos)
};

inverter = objeto => {
    const objetoInvertido = {};

    Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0, valor = 1;

        objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })

    return objetoInvertido;
};

obj1 = {nome: 'Thales', idade: 19, profissao: 'Developer'};

console.log(inverter(obj1));
