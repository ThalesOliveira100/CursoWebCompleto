let dobro = function(a) {
    return 2 * a;
}

dobro = (a) => {
    2 * a;
}

dobro = a => 2 * a; // return implicito


console.log(dobro(Math.PI));


let ola = function () {
    return 'Aopa';
}

ola = () => 'Opa';
ola = _ => 'Aopa'; // _ é um param que será ignorado
console.log(ola());