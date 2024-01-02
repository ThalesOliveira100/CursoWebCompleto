function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }  

funcaoDaSorte = numero => {
    if (numero > 10) {
        return "Número Inválido, tente novamente com um número entre 0 e 10";
    }

    numeroAleatorio = getRandomInt(0, 10);

    return (
        numeroAleatorio == numero ?
        `Parabéns! O número da sorte foi ${numeroAleatorio}!` :
        `Que pena! O número da sorte foi ${numeroAleatorio}!`
    );
}

console.log(funcaoDaSorte(5));