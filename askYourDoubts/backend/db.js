const mongoose = require('mongoose')

const url = "mongodb+srv://Gaurav:Gaurav.1@cluster0.adrrh.mongodb.net/?retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose
        .connect(url)
        .then((res) => console.log("MongoDB is connected successfully"))
        .catch((err) => console.log("Error:", err));
};