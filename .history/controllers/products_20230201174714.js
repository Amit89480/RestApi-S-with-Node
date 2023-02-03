const product = require("../models/products")
const getallProducts = async (req, res) => {
    const myData=await product.find({})
    const myData=await product.find({})
    res.status(200).json({myData})
}



const getallProductsTesting = async (req, res) => {
    res.status(200).json({msg: "Hey I am getallProductsTesting"})
}

module.exports={getallProducts,getallProductsTesting}

