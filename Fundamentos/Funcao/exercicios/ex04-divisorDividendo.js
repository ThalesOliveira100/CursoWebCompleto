function divide(dividendo, divisor) {
    console.log(`Resultado: ${Math.floor(dividendo/divisor)}`);
    console.log(`Resto: ${dividendo % divisor}`);
}

divide(10,3);

divideArrow = (dividendo, divisor) => {
    console.log(`Resultado: ${Math.floor(dividendo/divisor)}`);
    console.log(`Resto: ${dividendo % divisor}`);
}

divideArrow(100, 10);
