//sets the required node modules
const express = require('express')
const app = express()

const render = require('./render')

//gets the environment variables
require('dotenv').config()

//MIDDLEWARE
//static file server
app.use(express.static('public'))
//import places router
app.use('/places', require('./controllers/places'))

//homepage
app.get('/', (req, res) => {
    res.send(render('home'))
})

//404 page
app.get('*', (req, res) => {
    res.status(404).send(`
        <style>
            body {
                text-align: center;
            }
        </style>
        <h1>404 PAGE NOT FOUND</h1>
        <img src='/images/crying cat.jpg'>
    `)
})

//listens for connections
app.listen(process.env.PORT, () => {
    console.log(`Wittle server running on port ${process.env.PORT}`)
})