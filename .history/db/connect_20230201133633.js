const mongoose = require("mongoose");



uri = "mongodb+srv://Amit:Amitmisti@cluster0.zswjvbh.mongodb.net/Cluster0?retryWrites=true&w=majority"

const connectDB = () => {
  return mongoose.connect(uri ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
