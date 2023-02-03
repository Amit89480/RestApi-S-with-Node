const product = require("../models/products")
const getallProducts = async (req, res) => {
    // const myData=await product.find({})

    const { company,name } = req.query
    const queryObject = {}
    if (company)
    {
        queryObject.company=company
        }

        if (name)
        {
            queryObject.name={$regex:name,$option:"i"}
    }


    // Here we will be implementing the sort functionality

    let
    console.log(queryObject)
    const myData = await product.find(req.query).sort("name")
    res.status(200).json({myData})
}



const getallProductsTesting = async (req, res) => {
    res.status(200).json({msg: "Hey I am getallProductsTesting"})
}

module.exports={getallProducts,getallProductsTesting}

