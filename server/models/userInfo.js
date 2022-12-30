const mongoose = require('mongoose')
const UserInfoSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    mobileNumber: { type: String },
    email: { type: String },
    DateOfBirth: { type: Date },
    })

module.exports = mongoose.model('UserInfo', UserInfoSchema)