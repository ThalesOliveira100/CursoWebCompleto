class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro { 
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.arrayLancamentos = [];
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.arrayLancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.arrayLancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 5000);
const contaDeLuz = new Lancamento('Conta de Luz', -220);

const contas = new CicloFinanceiro(11, 2023);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario(), contas.arrayLancamentos);
