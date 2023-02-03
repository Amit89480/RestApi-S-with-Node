const connectDB = require("./db/connect")
const product=require("./models/products")

const productJSON = require("./products.json")

const start = async() => {
    try {
        await connectDB()
        await product.create(pro)
    }
}
