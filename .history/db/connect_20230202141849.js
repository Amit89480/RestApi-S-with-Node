const mongoose = require("mongoose");



// uri = "mongodb+srv://Amit8948:894808@learningapi.u6iwbty.mongodb.net/LearningAPI?retryWrites=true&w=majority";
uri = "mongodb://localhost:27017"


const connectDB = () => {
  return mongoose.connect(uri ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
