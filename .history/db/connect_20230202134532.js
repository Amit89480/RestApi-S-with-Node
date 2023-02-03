const mongoose = require("mongoose");



// uri = "mongodb://localhost:27017"
uri="mongodb+srv://amit:Amit12@amitp.gyaumnv.mongodb.net/?retryWrites=true&w=majority"


const connectDB = () => {
  return mongoose.connect(uri ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
