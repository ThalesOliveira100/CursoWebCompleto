// Consegue acessar variáveis declaradas em blocos normais
{
    {
        {
            {
                var sera = "Sera???";
            }
        }
    }
}

console.log(sera);


// Não consegue acessar variáveis declaradas em blocos de funções
function teste(){
    var local = 123;
    console.log(local);
}

teste()
// console.log(local)