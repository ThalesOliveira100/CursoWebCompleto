function resolveBhaskara (ax2, bx, c) {
    let delta = Math.pow(bx, 2) - (4 * ax2 * c);

    if (delta < 0) {
        return console.log('Delta é negativo');
    }

    let x1 = (-bx + Math.sqrt(delta)) / 2*ax2;
    let x2 = (-bx - Math.sqrt(delta)) / 2*ax2;

    respostas = [];
    respostas.push(x1, x2);
    return console.log(respostas);
}

resolveBhaskara(3, -5, 12);
resolveBhaskara(1, 12, -13);
