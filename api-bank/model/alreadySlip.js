const mongoose = require('mongoose')

const alredySlip = mongoose.Schema({
    ref: String,
    name: String,
    amount: Number,
    msg: String
})

module.exports = mongoose.model('slip', alredySlip)