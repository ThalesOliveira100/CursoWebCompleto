calcularArea = triangulo => {
    const base = triangulo[0]
    const altura = triangulo[1];

    return (base * altura) / 2;
}

console.log(calcularArea([10, 15]));
