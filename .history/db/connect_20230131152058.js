const moongoose = require('mongoose')

const uri = "mongodb+srv://Amit8948:Amitmisti45@#@learningapi.u6iwbty.mongodb.net/LearningAPI?retryWrites=true&w=majority"

const connectDB = () => {
    moongoose.set('strictQuery', true)
    
    return moongoose.connect(uri, {
       
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}



module.exports = connectDB;