const product = require("../models/products")
const getallProducts = async (req, res) => {
    // const myData=await product.find({})

    const { company,name ,sort,select} = req.query
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
        let sortFixSpacingProblem = sort.split(",").join(" ")
        apiData=apiData.sort(sortFixSpacingProblem)

    }
    
    // here we will be implementing the select functionality

    if (select)
    {
        // here we are fixing this spacing issue
        let selectFixSpacingProblem = select.split(",").join(" ")
        apiData=apiData.select(selectFixSpacingProblem)

        }



  
    const myData = await apiData
    res.status(200).json({myData})
}



const getallProductsTesting = async (req, res) => {
      const myData1=await product.find({}).select("name")
    res.status(200).json({myData1,})
}

module.exports={getallProducts,getallProductsTesting}
