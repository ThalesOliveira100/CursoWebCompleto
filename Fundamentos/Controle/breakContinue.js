const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
    if (x == 5) {
        break; // Age no bloco mais proxima do tipo for, while e switch
    }
    console.log(`x = ${nums[x]}`);

}

for (y in nums) {
    if (y == 5) {
        console.log('Chegou no 5 hein!!!!!!')
        continue; // não interrompe o bloco geral em questão, apenas pula a execução do bloco local e vai para aos proxs comandos
        console.log('Aqui já não pega');
    }
    console.log(`y = ${nums[y]}`);
}



// Rotular pares de repetição para poder chamar a função break em blocos externos:
externo: for (a in nums) {
    for (b in nums) {
        console.log(`Par = ${a}, ${b}`)
        if (a == 2 && b == 3) break externo;
    }
}