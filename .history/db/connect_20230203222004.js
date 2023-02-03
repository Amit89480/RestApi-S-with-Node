const mongoose = require("mongoose");

const uri = "mongodb+srv://Amitp:Amitmisti@productapi.asjublu.mongodb.net/ProductAPI"
const uri = "mongodb+srv://Amitp:Amitmisti@productapi.asjublu.mongodb.net/ProductAPI"
// const uri =
  // "mongodb+srv://Amitp:Amitmisti@productapi.asjublu.mongodb.net/ProductAPI?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set("strictQuery", true);

module.exports = connectDB;
