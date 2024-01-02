function calculaAnoBissexto(ano) {
    if (ano % 4 == 0) {
        console.log(`O ano ${ano} é bissexto!`);
        return true;
    } else {
        console.log(`O ano ${ano} não é bissexto!`)
        return false;
    }
}

calculaAnoBissexto(2024);
calculaAnoBissexto(2023);
