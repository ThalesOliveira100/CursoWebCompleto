// let e const
// Var > Função e Global
// Let > Bloco, Função e Global

{
    var a = 2
    let b = 3
    
    console.log(b); // Só consegue aqui
}

// Consegue aqui
console.log(a);


// Template String
const produto = 'Ipad'

console.log(`isso 
é um 
${produto}
template string`)

// Destructuring
const [l, e, ...tras] = 'Thales'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3];
console.log(x, y)

const { idade: i, nome } = { nome: 'Thales', idade: 19 };
console.log(i, nome)

