const mongoose = require("mongoose");


uri = "mongodb+srv://amit8948:eKyJ5G91mHjAkcQL;

const connectDB = () => {

  return  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set("strictQuery", false);

module.exports = connectDB;
