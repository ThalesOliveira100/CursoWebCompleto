const receberPrimeiroEUltimoElemento_ = array => {
    novoArray = [];
    novoArray.push(array[0], array.slice(-1));
    novoArray = novoArray.flat()

    return console.log(novoArray);
}

receberPrimeiroEUltimoElemento = array => {
    novoArray = [];
    novoArray.push(array[0], array.slice(-1));
    novoArray = novoArray.flat();
    
    return console.log(novoArray)
}

receberPrimeiroEUltimoElemento(['Aopa', 12312, 123312, 321312132, 'Thales']);
