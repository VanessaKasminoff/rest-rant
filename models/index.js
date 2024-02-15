const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

//db connection
mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to mongo: ', MONGO_URI)
}).catch(err => {
    console.log('Error connecting to mongo: ', err)
})

module.exports.Place = require('./places')