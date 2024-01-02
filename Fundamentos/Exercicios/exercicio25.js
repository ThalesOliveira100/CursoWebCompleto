buscarPalavrasSemelhantes = (inicio, palavras) => {
    const resultado = [];

    for (let palavra of palavras) {
        if (palavra.includes(inicio)) {
            resultado.push(palavra);
        };
    };

    return console.log(resultado);
};

buscarPalavrasSemelhantes = (inicio, palavras) => {
    return console.log(palavras.filter(palavra => palavra.includes(inicio)));
}


buscarPalavrasSemelhantes("java", ["javascript", "java", "Microsoft", "javali", "UNINTER"]);
