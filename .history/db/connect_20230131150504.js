const moongoose = require('mongoose')

const u

const connectDB = () => {
    return moongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
}

module.exports = connectDB;