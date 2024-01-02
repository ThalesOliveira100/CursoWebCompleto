const pessoa = {
    nome: 'Rebecca',
    idade: 4,
    peso: 13
}
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa)); // Retorna um sub-array com o par chave e valor inseridos

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Se aparece na lista de keys
    writable: false,
    value: '05/05/2019'
})

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript2015)
// Concatena em um objeto de destino todos os próximos objetos que forem sendo passados
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(obj);
