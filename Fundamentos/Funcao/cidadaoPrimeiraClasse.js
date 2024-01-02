 // funções em JS são First Class Object (Citizens)
 // High-Order Function

 // Criar de forma literal
function func1() {
    // Bloco obrigatório

}

// Armaze em variáveis
const func2 = function () {

}

// Armazena em Array
const array = [function (a, b) { return a + b;}, func1, func2];
console.log(array[0](2, 3));

// Armazenar em atributos de objs
const obj = {};
obj.falar = function () {return 'Aopa'};
console.log(obj.falar());

// Passar function como parametro
function run(func1) {
    func1();
}

run(function () {return console.log('Executando...')});

// uma função pode retornar/conter uma outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);

