const mongoose = require("mongoose");



// const uri = "mongodb+srv://productapi.asjublu.mongodb.net/ProductAPI"
uri = "mongodb+srv://Amitp:Amitmisti@productapi.asjublu.mongodb.net/ProductAPI?retryWrites=true&w=majority"


// const uri ="mongodb://localhost:27017/"
const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    UseCreateIndex:true,
    useUnifiedTopology: true,
    UseF
  });
};

mongoose.set("strictQuery", true);

module.exports = connectDB;
