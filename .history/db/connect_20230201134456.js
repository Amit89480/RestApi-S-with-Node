const mongoose = require("mongoose");



uri =


const connectDB = () => {
  return mongoose.connect(uri ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
