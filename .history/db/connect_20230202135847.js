const mongoose = require("mongoose");



// uri = "mongodb://localhost:27017"
uri="mongodb+srv://Amit8948:<password>@learningapi.u6iwbty.mongodb.net/?retryWrites=true&w=majority"


const connectDB = () => {
  return mongoose.connect(uri ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
