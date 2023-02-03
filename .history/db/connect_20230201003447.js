const mongoose = require("mongoose");


url = "mongodb+srv://amit8948:eKyJ5G91mHjAkcQL@api.vljkmlh.mongodb.net/API?retryWrites=true&w=majority";

const connectDB = () => {

  return  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set("strictQuery", false);

module.exports = connectDB;
