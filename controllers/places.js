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

//create route
router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    if (!req.body.city) {
        req.body.city = 'Some City'
    }
    if (!req.body.country) {
        req.body.country = 'Some Country'
    }
    Place.push(req.body)
    res.redirect('/places')
})

//exports router for modular use
module.exports = router