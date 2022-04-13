module.exports = (app)=>{
    //requisição http - verbo
app.get('/tarefa', function (req, res) {
    res.send('Rota ativada com GET e recurso definir o nome da entidade')
  })

}

