const express = require("express")
const path = require("path")

const app = express()
app.use('/static',express.static(path.join(__dirname, "/public")))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.listen(3030, ()=>{
    console.log("Servidor activo")
})