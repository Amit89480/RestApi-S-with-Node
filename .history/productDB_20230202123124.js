const connectDB = require("./db/connect")
const product=require("./models/products")

const productJSON = require("./products.json")

const start = async() => {
    try {
        console.log("Success Transfered the data to database")
        await connectDB()
        // Below we are writing the code for not uploading the same data
        awa
        await product.create(productJSON)
    }
    catch(error) {
        console.log(error)
    }
}
start();
