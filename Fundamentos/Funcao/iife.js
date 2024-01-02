// Immediately Invoked Function Expression
// O escopo global é lava

(function () {
    console.log('Será executado na hora.')
    console.log('Foge do escopo mais abrangente.')
})()

