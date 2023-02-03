const mongoose = require("mongoose");



// const uri = "mongodb+srv://productapi.asjublu.mongodb.net/ProductAPI"
 uri = process.env.MONGO_DB


// const uri ="mongodb://localhost:27017/"
const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  
  });
};

mongoose.set("strictQuery", true);

module.exports = connectDB;
