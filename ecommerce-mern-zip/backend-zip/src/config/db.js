const mongoose = require("mongoose")

const mongoDbUrl='mongodb://127.0.0.1:27017'
const connectDb=()=>{
    return mongoose.connect(`${mongoDbUrl}/krutik`)
}

module.exports={connectDb}