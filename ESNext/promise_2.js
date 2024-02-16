// Simular timeout dentro de timeout

// - CALLBACK HELL-
setTimeout(function () {
    console.log('Executando callback...')
    
    setTimeout(function() {
        console.log('Executando callback 2...')
        
        setTimeout(function() {
            console.log('Executando callback 2...')
            
        }, 2000)

    }, 2000)
}, 2000);

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Exceutando promise...');
            resolve('Viiiiishhh');
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())