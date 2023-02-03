const mongoose=require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },

    price: {
        type: number,
        required:[true,"Price must be provided"]
},

  
    feature: {
        type: Boolean,
        default:false,
    },
    company:{
        type: String,
        enum: {
            values: ["Apple", "Samsung", "HP", "DELL"],
            message: `{values} is not supported`
        },
        createdAt:{
            type: number,
                default:Date.now(),
            }
    }
})

module.exports=mongoose.model('Product',productSchema)

