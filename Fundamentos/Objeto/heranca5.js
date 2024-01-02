console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function () {
    return this[0];
}

array = [0, 1, 2, 3];
console.log(array.first())