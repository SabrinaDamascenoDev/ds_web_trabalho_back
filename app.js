const express = require("express")

const livroRouter = require('./routers/LivroRoutes')

const app = express()
const port = 3000

app.use(express.json()); 

app.use("/api/livros", livroRouter)

app.use(
    (request, resolve) => {
        resolve.status(404).json({erro:"Rota não encontrada!"})
    }
)

app.listen(
    port,
    () => {
        console.log(`API executando na porta ${port}`)
    }
)