// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(5, 5));

// São anonimas e devem ser atribuidas a um variavél
// Arrow Function (this)
// Associado ao local em que a funca foi escrita

const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})
lexico1();
lexico2();

// parametro default
function log(texto= 'none') {
    console.log(texto)
};
log();

// operador rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n)
    return total;
}
console.log(total(2,3,4,5));