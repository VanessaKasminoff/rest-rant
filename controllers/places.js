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
        res.status(404).send('error404')
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
        res.status(404).send('error404')
    })
})

//Update edit
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
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
        console.log('err', err)
        res.status(404).send('error404')
    })
})

//GET edit
router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

//DELETE
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

//exports router for modular use
module.exports = router