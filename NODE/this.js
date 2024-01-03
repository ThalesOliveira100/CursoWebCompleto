console.log(this === global); // this aponta para module.exports
console.log(this === module);

// true
console.log(this === module.exports);
console.log(this === exports);

// falso
function logThis(){
    console.log('Dentro de uma função...');
    console.log(this === exports);

    // Dentro de funções o this é estritamente igual a global
    console.log(this === global);
};
logThis();
