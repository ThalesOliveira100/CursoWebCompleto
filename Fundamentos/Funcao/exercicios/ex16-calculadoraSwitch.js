function calculadora(num1, op, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
            
        case '-':
            return num1 - num2;
            
        case '*':
            return num1 * num2;
            
        case '/':
            return (num1 / num2).toFixed(2);
            
        default:
            return 'Operação não disponível';
            break;
    }
}


console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, '%', 3));
