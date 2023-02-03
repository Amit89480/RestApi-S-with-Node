const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(process.env., {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set("strictQuery", false);

module.exports = connectDB;
