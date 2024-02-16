const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados;
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}


// Recurso do ES8
// Objetiva simplifica o uso de promises, deixando o código assincrono mais sincrono.


// Await só irá funcionar em funções marcadas como async
// Caso uma promise seja utilizada junto com await, a função só irá continuar após concluir o passo await
let obterAlunos = async () => {
    const ta = await getTurma('A');
    const tb = await getTurma('B');
    const tc = await getTurma('C');

    return [].concat(ta, tb, tc);
} // Retorna um objeto AsyncFuncion

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
