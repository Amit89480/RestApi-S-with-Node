const mongoose = require("mongoose");



 uri = "mongodb+srv://Amitp:Amit12345@productapi.asjublu.mongodb.net/ProductAPI?retryWrites=true&w=majority";
// uri = "mongodb://localhost:27017"


const connectDB = () => {
  return mongoose.connect(uri ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
