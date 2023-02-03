const express = require('express')
const app = express()

const port = process.env.port || 5000

app.get("/", (req, res) => {
    res.send("Hey I am Live Now!")
})

const start = async() => {
    app.listen(port, () => {
        console.log(`$Liste{port} `)
    }

}