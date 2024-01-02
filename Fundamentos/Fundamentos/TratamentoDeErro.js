function tratarErroELançar(erro) {
    // throw new Erro(erro.description);
    // throw 10;
    throw {
        name: erro.name,
        msg: erro.msg,
        date: new Date()
    }
};

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!!");

    } catch (e) {
        tratarErroELançar();
    } finally {
        console.log('final');
    };
    
};


const obj = { Nome: 'Thales' };

imprimirNomeGritado(obj);
