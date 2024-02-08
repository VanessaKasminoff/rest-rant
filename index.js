//sets the required node modules
const express = require('express')
const app = express()

//imports render function
const render = require('./render')

//gets the environment variables
require('dotenv').config()

//MIDDLEWARE
//static file server
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

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

//listens for connections
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})