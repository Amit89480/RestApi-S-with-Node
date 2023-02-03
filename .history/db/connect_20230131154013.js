const mongoose = require('mongoose')

const uri = mongodb+srv://amit8948:<password>@api.vljkmlh.mongodb.net/API?retryWrites=true&w=majority



const connectDB = () => {
  
    mongoose.set('strictQuery', false);
   return mongoose.connect(uri, {
       
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

mongoose.set('strictQuery',false);



module.exports = connectDB;