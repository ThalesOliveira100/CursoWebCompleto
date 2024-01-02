function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota);

    };
};

soBoaNoticia(6.1);
soBoaNoticia(8.1);

function seForVerdade(valor) {
    if (valor) {
        console.log('É verdade que... ' + valor)
    };
};

seForVerdade(6 > 4);
seForVerdade(false);
seForVerdade(true);

seForVerdade(-1);
seForVerdade(' ');
seForVerdade([]);
seForVerdade({});
