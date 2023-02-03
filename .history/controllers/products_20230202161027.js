const product = require("../models/products")
const getallProducts = async (req, res) => {
    // const myData=await product.find({})

    const { company,name ,sort} = req.query
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

    let apiData = product.find(req.query)
    
    if (sort)
    {
        let sortFixSpacingProblem = sort.replace(",", " ")
        apiData=apiData.sort(sortFixSpacingProblem)

        }



  
    const myData = await apiData
    res.status(200).json({myData})
}



const getallProductsTesting = async (req, res) => {
      const myData=await product.find({})
    res.status(200).json(req.query).select("name")
}

module.exports={getallProducts,getallProductsTesting}

