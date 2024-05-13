var http = require('http')

http.createServer(function(req , res){
    res.end('<h1>Bem vindo ao site</h1><br><h4>Sub titulo</h4>')
}).listen(3333)

console.log('Meu server em port 3333')