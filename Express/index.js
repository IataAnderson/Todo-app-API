const express = require('express')
const app = express() // instancia


const tarefaController = require('../src/controllers/tarefa-controller')
const usarioController = require('../src/controllers/usuario-controller')


tarefaController(app)
usarioController(app)


//porta se comunica
app.listen(3000,() =>{
console.log('Rodando servidor na porta 3000')
})