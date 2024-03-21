const mongoose = require('mongoose')
const { database_url } = require('./config.json')

function connectDatabase() {
    try {
        mongoose.connect(database_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database Connected!!!")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDatabase