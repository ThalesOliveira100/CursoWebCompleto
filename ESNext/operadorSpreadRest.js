// operador ... rest(juntar) / spread(espalhar)
// usar rest com paramentro de funcção
const total = (...numeros) => {
    let total = 0;
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5));

// Usar Spread com Objeto
const funcionario = { nome: 'Thales', salario: 2300 }
const clone = { ativo: true, ...funcionario }
console.log(clone);

// Usar Spread com Array
const grupo1 = ['Thales', 'Ph', 'Kill'];
const grupoFinal = ['Leo', ...grupo1, 'Cobrador'];
console.log(grupoFinal)