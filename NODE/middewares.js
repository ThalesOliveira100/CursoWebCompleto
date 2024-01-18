// Middleware Pattern - Chain of Responsability

// ctx é um objeto que é passado de um passo para o outro;
// next é uma função, que quando chamada dispara o próximo passo na cadeia.
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1';
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2';
    next()
}

const passo3 = (ctx) => ctx.valor3 = 'mid3';

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1));
    }
    execPasso(0);
}

const teste = {};
exec(teste, passo1, passo2, passo3);
console.log(teste);

