function calcularValorDaNota(valorDeSaque) {
    if (valorDeSaque >= 200) {
        return 200;
    } else if (valorDeSaque >= 100) {
        return 100;
    } else if (valorDeSaque >= 50) {
        return 50;
    } else if (valorDeSaque >= 20) {
        return 20;
    } else if (valorDeSaque >= 10) {
        return 10;
    } else if (valorDeSaque >= 5) {
        return 5;
    } else if (valorDeSaque >= 2) {
        return 2;
    } else if (valorDeSaque >= 1) {
        return 1;
    } else if (valorDeSaque >= 0.5) {
        return 0.5;
    } else if (valorDeSaque >= 0.25) {
        return 0.25;
    } else if (valorDeSaque >= 0.10) {
        return 0.1;
    } else if (valorDeSaque >= 0.05) {
        return 0.05;
    }
}

function sacarDinheiro(valorDeSaque) {
    let contador200 = 0;
    let contador100 = 0;
    let contador50 = 0;
    let contador20 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador2 = 0;
    let contador1 = 0;
    let contador50c = 0;
    let contador25c = 0;
    let contador10c = 0;
    let contador5c = 0;

    let valorDaNota = calcularValorDaNota(valorDeSaque);

    while (valorDeSaque >= valorDaNota) {
        
        console.log(valorDeSaque);
        switch (valorDaNota) {
            case 200:
                contador200++;
                valorDeSaque -= 200;
                break;
            case 100:
                contador100++;
                valorDeSaque -= 100;
                break;
            case 50:
                contador50++;
                valorDeSaque -= 50;
                break;
            case 20:
                contador20++;
                valorDeSaque -= 20;
                break;
            case 10:
                contador10++;
                valorDeSaque -= 10;
                break;
            case 5:
                contador5++;
                valorDeSaque -= 5;
                break;
            case 2:
                contador2++;
                valorDeSaque -= 2;
                break;
            case 1:
                contador1++;
                valorDeSaque -= 1;
                break;
            case 0.5:
                contador50c++;
                valorDeSaque -= 0.5;
                break;
            case 0.25:
                contador25c++;
                valorDeSaque -= 0.25;
                break;
            case 0.1:
                contador10c++;
                valorDeSaque -= 0.1;
                break;
            case 0.05:
                contador5c++;
                valorDeSaque -= 0.5;
                break;

        }
        valorDaNota = calcularValorDaNota(valorDeSaque);
    }

}


sacarDinheiro(25); //378.90