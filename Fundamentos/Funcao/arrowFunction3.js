let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global); // window no browser

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);

comparaComThisArrow(global);
comparaComThisArrow(module.exports); // Modulo que foi escrito

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports)