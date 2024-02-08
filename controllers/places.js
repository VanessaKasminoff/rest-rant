//creates router
const router = require('express').Router()

//imports render function
const render = require('../render')

//import places data
const Place = require('../models/places.js')

//places page
router.get('/', (req, res) => {
    res.send(render('places/index', {places: Place}))
})

//new route
router.get('/new', (req, res) => {
    res.send(render('places/new'))
})

//exports router for modular use
module.exports = router