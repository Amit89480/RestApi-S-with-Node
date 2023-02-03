const mongoose = require("mongoose");


uri =mongodb+srv://amit8948:<password>@api.vljkmlh.mongodb.net/?retryWrites=true&w=majority
    
    
    
    ;

const connectDB = () => {

  return  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set("strictQuery", false);

module.exports = connectDB;
