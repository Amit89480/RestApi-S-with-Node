const product = require("../models/products")
const getallProducts = async (req, res) => {
    // const myData=await product.find({})

    const { company } = rq.query
    const queryObject = {}
    if(company)
    const myData = await product.find(req.query)
    res.status(200).json({myData})
}



const getallProductsTesting = async (req, res) => {
    res.status(200).json({msg: "Hey I am getallProductsTesting"})
}

module.exports={getallProducts,getallProductsTesting}

