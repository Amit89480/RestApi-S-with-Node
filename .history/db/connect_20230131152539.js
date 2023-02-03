const mongoose = require('mongoose')

const uri = "mongodb+srv://Amit8948:Amitmisti45@#@learningapi.u6iwbty.mongodb.net/LearningAPI?retryWrites=true&w=majority"



const connectDB = () => {
  
    
    return mongoose.connect(uri, {
       
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

mongoose.set('strictQuery', true);



module.exports = connectDB;