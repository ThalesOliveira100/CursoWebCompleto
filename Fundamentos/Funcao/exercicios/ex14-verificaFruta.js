function verificaFruta(fruta) {
    fruta = fruta.toLowerCase()

    switch (fruta) {
        case 'maca':
            console.log('Não vendemos essa fruta aqui! うっせろこっら！');
            break;
        case 'maçã':
            console.log('Não vendemos essa fruta aqui! うっせろこっら！');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis.');
            break;
        case 'melancia':
            console.log('Aqui está, são R$2,99 o quilo.')
            break;
        default:
            console.log('Você sabe que não vendemos isso aqui.')
            break;
    }
}

verificaFruta('maçã');
verificaFruta('maca');
verificaFruta('melancia');
verificaFruta('kiwi');
verificaFruta('ブドウ');

