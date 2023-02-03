const moongoose = require('mongoose')

const connectDB = () => {
    return moongoose.connect(uri, {
        useNewUrlParser
    })
}