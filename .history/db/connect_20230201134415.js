const mongoose = require("mongoose");






const connectDB = () => {
  return mongoose.connect(uri ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
