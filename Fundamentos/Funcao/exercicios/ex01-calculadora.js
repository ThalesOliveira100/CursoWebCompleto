function calc(num1, num2) {
    console.log(` A soma entre ${num1} e ${num2} é: ${num1 + num2}`)
    console.log(` A subtracao entre ${num1} e ${num2} é: ${num1 - num2}`)
    console.log(` A multiplicação entre ${num1} e ${num2} é: ${num1 * num2}`)
    console.log(` A divisão entre ${num1} e ${num2} é: ${num1 / num2}`)
}
calc(4, 2);

calcArrow = (num1, num2) => {
    console.log(` A soma entre ${num1} e ${num2} é: ${num1 + num2}`)
    console.log(` A subtracao entre ${num1} e ${num2} é: ${num1 - num2}`)
    console.log(` A multiplicação entre ${num1} e ${num2} é: ${num1 * num2}`)
    console.log(` A divisão entre ${num1} e ${num2} é: ${num1 / num2}`)
}

calcArrow(10, 100);
