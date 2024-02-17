//dependencies
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//imports
const render = require('./render')

//gets the environment variables
require('dotenv').config()
const PORT = process.env.PORT

//MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//homepage
app.get('/', (req, res) => {
    res.send(render('home'))
})

//places route
const placesController = require('./controllers/places')
app.use('/places', placesController)

//404 page
app.get('*', (req, res) => {
    res.status(404).send(render('error404'))
})

//listening
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})