contarCaractereEmFrase = (caractere, frase) => {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == caractere) {
            contador++;
        };
    };

    return console.log(contador);
}

contarCaractereEmFrase = (caractere, frase) => {
    return console.log([...frase].filter((char => char == caractere)).length);
}

contarCaractereEmFrase('e', 'Isto aqui não passa de um teste e eu não sei qual letra usarei');