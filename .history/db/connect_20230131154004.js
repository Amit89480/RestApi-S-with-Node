const mongoose = require('mongoose')

const uri = 



const connectDB = () => {
  
    mongoose.set('strictQuery', false);
   return mongoose.connect(uri, {
       
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

mongoose.set('strictQuery',false);



module.exports = connectDB;