const fabricantes = ['Mercedes', 'Audi', 'BMW', 'Mazda Miata'];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

imprimir = (nome, indice) => console.log(`${indice + 1}. ${nome}`);

fabricantes.forEach(imprimir); // chama a função para cada elemento do array, passando o valor e o indice no caso do array.

fabricantes.forEach(fabricante => console.log(fabricante));

