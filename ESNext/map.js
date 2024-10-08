const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias);
console.log(tecnologias.get('react').framework);
console.log(tecnologias.get('react'));

const chavesVariadas = new Map([
    [function () {}, 'Funcao'],
    [{}, 'objeto'],
    [123, 'Numero']
]);

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b'); // redefine o valor de 123
chavesVariadas.set(456, 'b');