const moongoose = require('mongoose')

const uri = "mongodb+srv://Amit8948:Amitmisti45@#@learningapi.u6iwbty.mongodb.net/LearningAPI?retryWrites=true&w=majority"

const connectDB = () => {
    
    return moongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}
moongoose.set('strictQuery', true); 


module.exports = connectDB;