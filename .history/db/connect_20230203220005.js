const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;



uri = "mongodb://localhost:27017"
//  const uri = "mongodb+srv://Amitp:Amitmisti@productapi.asjublu.mongodb.net/ProductAPI?retryWrites=true&w=majority";


const connectDB = () => {
  return mongoose.connect(uri, {
   useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
