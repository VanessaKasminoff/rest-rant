//creates router
const router = require('express').Router()

//imports
const render = require('../render')
const db = require('../models')

//GET places
router.get('/', (req, res) => {
    db.Place.find().then((places) => {
        res.send(render('places/index', {places}))
    }).catch(err => {
        console.log('err', err)
        res.status(404).send(render('error404'))
    })
})

//GET new
router.get('/new', (req, res) => {
    res.send(render('places/new'))
})

//GET show
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id).then((places) => {
        res.send(render('places/show', {places}))
    }).catch(err => {
        console.log('err', err)
        res.status(404).send(render('error404'))
    })
})

//Update edit
router.put('/:id', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = undefined
    }
    if (!req.body.city) {
        req.body.city = 'Some City'
    }
    if (!req.body.country) {
        req.body.country = 'Some Country'
    }
    db.Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedPlace) => {
        console.log(updatedPlace)
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.status(404).send(render('error404'))
    })
  })
  

//create
router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = undefined
    }
    if (!req.body.city) {
        req.body.city = 'Some City'
    }
    if (!req.body.country) {
        req.body.country = 'Some Country'
    }
    db.Place.create(req.body).then(() => {
        res.redirect('/places')
    }).catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error: '
            for (var field in err.errors) {
                message += `${field} was ${err.errors[field].value}.`
                message += ` ${err.errors[field].message}`
            }
            res.send(render('places/new', { message }))
        } else {
            res.status(404).send(render('error404'))
        }
    })
})

//GET edit
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id).then((foundPlace) => {
        res.send(render('places/edit', {places: foundPlace}))
    }).catch(err => {
        console.log('err', err)
        res.status(404).send(render('error404'))
    })
})

//DELETE
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(303).redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.status(404).send(render('error404'))
    })
})

//exports router for modular use
module.exports = router