const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    position: {
        type: String,
    },
    age: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = User = mongoose.model('users', UserSchema)