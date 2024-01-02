function denominaTrianguloPorMedidas(lado1, lado2, lado3) {
    if ((lado1 == lado2) || (lado2 == lado3)) {
        if (lado1 == lado3) {
            console.log('O triangulo é Equilatero');
        } else {
            console.log('O triangulo é Isósceles');
        }
    } else {
        console.log('O triangulo é Escaleno');

    }
}


// Correção
function classificaTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

classificaTrianguloArrow = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificaTrianguloArrow(10, 10, 10));
