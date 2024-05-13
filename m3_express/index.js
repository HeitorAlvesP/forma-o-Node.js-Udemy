const express = require( 'express' )
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Fala porra</h1>')
})

app.get('/blog', (req, res) => {
    res.send('Blog')
})

app.get('/canal/youtube', (req, res) => {
    var canal = req.query['canal']
    if(canal){
        res.send(canal)
    }else{ 
        res.send('Nenhum canal fornecido')
    }

    
})

app.get('/ola/:nome?', (req, res) => {
    var nome = req.params.nome
    //if (nome === undefined){
    //    res.send(`<h1>Ola Babaca !!</h1>`)
    //}
    res.send(`<h1>Ola ${nome}!!</h1>`)
})

app.listen(3333, (erro) => {
    if(erro){ console.log('Olha o erro animalll') }
    else{ console.log('Servidor na porta 3333') }
})