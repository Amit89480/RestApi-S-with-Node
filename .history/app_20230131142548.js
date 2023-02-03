const express = require('express')
const app = express()

const port = process.env.port || 5000


const product_route = { getallProducts, getallProductsTesting }


// Here we are creating middleware

app.use()

app.get("/", (req, res) => {
    res.send("Hey I am Live Now!")
});

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Listening at Port  ${port} `)
        });
    }
    catch (error) {
        console.log("500 Internal server error")
    }
};

start();