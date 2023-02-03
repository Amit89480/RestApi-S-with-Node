const mongoose = require('mongoose')

const uri = "mongodb+srv://Amit8948:Amitmisti45@#@learningapi.u6iwbty.mongodb.net/LearningAPI?retryWrites=true&w=majority"



const connectDB = () => {
  
    mongoose.set('strictQuery', false);
    mongoose.connect(uri, {
       
        useNewUrlParser: true,
        
        useUnifiedTopology: true
    })
}

mongoose.set('strictQuery',false);



module.exports = connectDB;