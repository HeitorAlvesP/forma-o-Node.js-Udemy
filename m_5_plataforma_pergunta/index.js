const express = require('express')
const app = express()

//Estou dizendo para o express usar o EJS como engine
app.set('view engine', 'ejs')

app.get('/:nome/:lang',(req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    //var exibirMsg = true

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "coca-cola", preco: 5},
        {nome: "leite", preco: 1.45},
        {nome: "Carne", preco: 12.5},
        {nome: "Suco", preco: 3.45},
    ]

    res.render('index', {
        nome: nome,
        lang: lang,
        empresa: 'Guia do programador',
        //msg: exibirMsg,
        produtos: produtos
    })
})

app.listen(8080,() => {console.log('Servidor On na PORT 8080')})