//sets the required node modules
const express = require('express')
const app = express()

//gets the environment variables
require('dotenv').config()

//static file server
app.use(express.static('public'))
//import places router
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

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

app.listen(process.env.PORT, () => {
    console.log(`Wittle server running on port ${process.env.PORT}`)
})