function verificaCarro(carro) {
    carro = carro.toLowerCase();
    
    switch (carro) {
        case 'hatch':
            console.log('Venda bem sucedida!');
            break;
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?');
            break;   
        default:
            console.log('Não trabalhamos com este tipo de modelo.')
            break;
    }
}

verificaCarro('hatch');
verificaCarro('motocicletas');
verificaCarro('caminhonetes');
verificaCarro('mazda miata');
verificaCarro('toyota dragon');