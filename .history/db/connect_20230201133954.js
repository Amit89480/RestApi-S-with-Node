const mongoose = require("mongoose");



uri = "mongodb+srv://amit:@amitp.gyaumnv.mongodb.net/?retryWrites=true&w=majority"

const connectDB = () => {
  return mongoose.connect(uri ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
