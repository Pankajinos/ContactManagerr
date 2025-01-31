const mongoose = require("mongoose")
// const Contact=require("../models/contactModel")
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('connected to db',connect.connection.host,connect.connection.name)
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = connectDb;