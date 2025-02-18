const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    gender: {type: String, required: true},
    profileImageUrl: {type: String},
    tier: {type: String, default: "free"}
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);