function confereAumento(plano, salario) {
    plano = plano.toLowerCase();

    switch (plano) {
        case 'a':
            console.log(`Parabéns! Aumento de ${salario} para ${salario * 1.1}`);
            break;
        case 'b':
            console.log(`Parabéns! Aumento de ${salario} para ${salario * 1.15}`);
            break;
        case 'c':
            console.log(`Parabéns! Aumento de ${salario} para ${salario * 1.2}`);
            break;
        default:
            console.log('Sinto muito, este plano não possuí novas promoções!');
            break;
    }
}

confereAumento('a', 1000);
confereAumento('b', 1000);
confereAumento('c', 1000);
confereAumento('d', 1000);
