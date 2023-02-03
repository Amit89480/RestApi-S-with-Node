require("dotenv").config()
const mongoose = require("mongoose");




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
