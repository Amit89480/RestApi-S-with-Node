// const mongoose = require("mongoose");




// // const uri = "mongodb://localhost:27017"
//  const uri = "mongodb+srv://Amitp:Amitmisti@productapi.asjublu.mongodb.net/ProductAPI?retryWrites=true&w=majority";


// const connectDB = () => {
//   return mongoose.connect(uri, {
//    useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// mongoose.set('strictQuery', true);

// module.exports = connectDB;



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Amitp:Amitmisti@productapi.asjublu.mongodb.net/ProductAPI?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
 // perform actions on the collection object
  client.close();
});