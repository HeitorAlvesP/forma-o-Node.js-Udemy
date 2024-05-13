//Aqui ele ensina oq é o modulo para q serve e tb explica rapidamente oq é a função
function soma (a, b){
    return a + b 
}

//Aqui vc usa para exportar a funçao
modulo.exports = soma

// para receber ela em outro arquivo
var funcaoSoma = require('./modulo.js') //apenas exemplo