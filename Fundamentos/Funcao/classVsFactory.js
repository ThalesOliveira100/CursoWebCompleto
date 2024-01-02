class Pessoa {
    constructor (nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`); // O this vai variar de acordo com o contexto
    }
}

const p1 = new Pessoa('João');
p1.falar();

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Arthur');
p2.falar();
