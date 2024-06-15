const express = require('express')
const cheklistRouter = require('./src/routes/checklist')

const app = express()
app.use(express.json())

app.use('/checklists', cheklistRouter)

app.listen(3000, () => {
    console.log("Servidor foi iniciado")
})