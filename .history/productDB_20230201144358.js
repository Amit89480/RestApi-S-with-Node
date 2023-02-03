const connectDB = require("./db/connect")
const product=require("./models/products")

const productJSON = require("./products.json")

const start = async() => {
    try {
        console.log("Success Tran")
        await connectDB()
        await product.create(productJSON)
    }
    catch(error) {
        console.log(error)
    }
}
start();
