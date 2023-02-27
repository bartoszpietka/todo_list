const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const port = 3000

var todos = [
    {name: 'Nauczyc sie Node', daystoend: '2', done: false},
    {name: 'Nauczyc sie JavaScript', daystoend: '13', done: false},
    {name: 'Nauczyc sie HTML', daystoend: '7', done: true}
]

app.get('/', function(req, res){
    res.send("ok")
})

app.get(`/gettodos`, function(req, res){
    res.json(todos)
})

app.get('/addtodo/:nazwa/:dni', function(req, res){
    const dni = req.params.dni
    const nazwa = req.params.nazwa

    const tmptodo = {name: nazwa, daystoend: dni, done: false}

    todos.push(tmptodo)

    console.log("dodano zadanie "+nazwa+" na czas "+dni)
    console.log(tmptodo)
    res.send("ok")
})

app.listen(port, function(){
    console.log("aplikacja działa na porcie: "+port)
})