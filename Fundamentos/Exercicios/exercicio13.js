// classical
filtrarNumeros_ = array => {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            novoArray.push(array[i]);
        }
    }

    return console.log(novoArray);
}

// for let of
filtrarNumeros__ = array => {
    const resultado = [];
    for (let item of array) {
        if (typeof item === 'number') {
            resultado.push(item);
        }
    }

    return console.log(resultado);
}

// Cho arrowFunction
filtrarNumeros = array => array.filter(item => typeof item === 'number')



array1 = [1, , 2, 'a', 5, 'casdsac'];
console.log(filtrarNumeros(array1));
