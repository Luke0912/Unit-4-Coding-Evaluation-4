const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://shubham09:qwerty12@cluster0.ry4r4.mongodb.net/c4?retryWrites=true&w=majority"
    )
}