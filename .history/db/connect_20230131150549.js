const moongoose = require('mongoose')

const uri = "mongodb+srv://Amit8948:Amitmisti45@#@learningapi.u6iwbty.mongodb.net/?retryWrites=true&w=majority"

const connectDB = () => {
    return moongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
}

module.exports = connectDB;