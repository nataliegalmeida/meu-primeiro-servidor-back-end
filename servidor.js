

const express = require ("express")
const app = express()
const porta = 3333

function mostraResposta(request,response){
    response.send('Olá mundo')
}


function mostraPorta(){
    console.log(`Servidor rodando e funcionado na porta ${porta}`)
}

app.get ('/oi',mostraResposta)
app.listen(porta, mostraPorta)