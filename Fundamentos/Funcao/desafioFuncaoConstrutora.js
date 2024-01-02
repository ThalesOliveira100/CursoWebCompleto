function criarPessoa(nome = 'Unnamed') {
    this.nome = nome;

    this.falar = function () {
        return console.log(`Olá, meu nome é ${this.nome}`);
    }
}

p1 = new criarPessoa('Thales');
p1.falar();
