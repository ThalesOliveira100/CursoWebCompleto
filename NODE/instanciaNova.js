// Uma factory retorna um novo objeto, e nesse caso, iremos utiliza-la para zerar o cache retornando uma nova instancia.
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++;
        }
    }
}