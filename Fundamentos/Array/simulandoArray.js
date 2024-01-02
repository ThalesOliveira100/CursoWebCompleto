const hotontoArray = {0: 'Taresu', 1: 'Fuiripe', 2: 'Reonarudo', 3: 'Gaburieru'}
console.log(hotontoArray);
Object.defineProperty(hotontoArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
});

console.log(hotontoArray[0]);

const oreNoArray = ['Taresu', 'Fuiripe', 'Reonarudo', 'Gaburieru'];
console.log(hotontoArray.toString(), oreNoArray);
