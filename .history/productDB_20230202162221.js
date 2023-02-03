const connectDB = require("./db/connect")
const product=require("./models/products")

const productJSON = require("./products.json")

const start = async() => {
    try {
       
        await connectDB()
        // Below we are writing the code for not uploading the same data
        await product.deleteMany()
        await product.create(productJSON)
        console.log("Success Transfered the data to database")
    }
    catch(error) {
        console.log(error)
    }
}
start();
