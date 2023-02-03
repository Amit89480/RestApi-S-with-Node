require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGO_DB;

const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set("strictQuery", true);

module.exports = connectDB;
