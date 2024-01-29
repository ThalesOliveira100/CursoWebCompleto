const schedule = require('node-schedule')

// '*/5 * 20 * * 1'
// A cada 5 segundos, as 20 horas em segunda-feiras
const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 1', function() {
    console.log('Executando Tarefa 1', new Date().getSeconds())
})

// Define um timeout para a tarefa, caso ela seja executada ou não!!
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// Há também outras funções como:
// setImmediate: é como se o valor do timeout fosse 0;
// setinterval: consegue realizar tarefas pelo periodo de tempo definido;

// Define regras sem precisar da string anterior
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 20;
regra.second = 20;

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2', new Date().getSeconds());
})