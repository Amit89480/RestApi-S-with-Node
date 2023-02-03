const mongoose = require("mongoose");


uri ="mongodb+srv://amit8948:eKyJ5G91mHjAkcQL@api.vljkmlh.mongodb.net/API?retryWrites=true&w=majority"
    
    
    
    

const connectDB = () => {
 console.log(uri)

  return  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set('strictQuery', false);

module.exports = connectDB;
