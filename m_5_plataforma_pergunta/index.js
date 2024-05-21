const express = require('express')
const app = express()

//Estou dizendo para o exoress usar o EJS como engine
app.set('view engine', 'ejs')

app.get('/:nome/:lang',(req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    res.render('index', {
        nome: nome,
        lang: lang,
        empresa: 'Guia do programador'
    })
})

app.listen(8080,() => {console.log('Servidor On na PORT 8080')})