const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set("strictQuery", false);

module.exports = connectDB;
