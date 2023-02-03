const mongoose = require("mongoose");



// const uri = "mongodb+srv://productapi.asjublu.mongodb.net/ProductAPI"
// uri = "mongodb://Amitp:Amitmisti@ac-3apk8oj-shard-00-00.asjublu.mongodb.net:27017,ac-3apk8oj-shard-00-01.asjublu.mongodb.net:27017,ac-3apk8oj-shard-00-02.asjublu.mongodb.net:27017/ProductAPI?ssl=true&replicaSet=atlas-38imv7-shard-0&authSource=admin&retryWrites=true&w=majority"


const uri ="mongodb://localhost:27017/"
const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  
  });
};

mongoose.set("strictQuery", true);

module.exports = connectDB;
