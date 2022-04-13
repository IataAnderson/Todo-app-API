module.exports = (app)=>{

    //requisição http - verbo
app.get('/usuario', function (req, res) {
    res.send('Rota ativada com GET e recurso usuario: valores de usario devem ser retornados')
  })
}

