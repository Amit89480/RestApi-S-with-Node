const mongoose=require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },


    createdAt:{
    type: number,
        default:Date.now(),
},
    company:{
        type: String,
        enum: {
            values: ["Apple", "Samsung", "HP", "DELL"],
            message: `{values} is not supported`
        }
    }
})