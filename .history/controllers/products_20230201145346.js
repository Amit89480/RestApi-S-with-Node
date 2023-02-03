const product = require
const getallProducts = async (req, res) => {
    res.status(200).json({msg: "Hey I am getallProducts"})
}



const getallProductsTesting = async (req, res) => {
    res.status(200).json({msg: "Hey I am getallProductsTesting"})
}

module.exports={getallProducts,getallProductsTesting}

