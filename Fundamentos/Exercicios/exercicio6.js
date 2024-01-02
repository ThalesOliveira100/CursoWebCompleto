const inverso = valor => {
    if (typeof valor == "number") {
        return -valor;
    } else if (typeof valor == "boolean") {
        return !valor;
    } else {
        return `boolean value or number value has expedect, but paramecter is ${typeof valor} type`;
    }
};

console.log(inverso(true));
console.log(inverso(322));
console.log(inverso('aopa'));