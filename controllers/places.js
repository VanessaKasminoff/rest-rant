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
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //     res.status(404).send(render('error404'))
    // } else if (!Place[id]) {
    //     res.status(404).send(render('error404'))
    // } else {
    //     res.send(render('places/show', {places: Place[id], id: id}))
    // }
})

//Update edit
router.put('/:id', (req, res) => {
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //     res.status(404).send(render('error404'))
    // }
    // else if (!Place[id]) {
    //     res.status(404).send(render('error404'))
    // }
    // else {
    //     if (!req.body.pic) {
    //         req.body.pic = 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    //     }
    //     if (!req.body.city) {
    //         req.body.city = 'Some City'
    //     }
    //     if (!req.body.country) {
    //         req.body.country = 'Some Country'
    //     }
    //     Place[id] = req.body
    //     res.redirect(`/places/${id}`)
    // }
  })
  

//create
router.post('/', (req, res) => {
    // if (!req.body.pic) {
    //     req.body.pic = 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // }
    // if (!req.body.city) {
    //     req.body.city = 'Some City'
    // }
    // if (!req.body.country) {
    //     req.body.country = 'Some Country'
    // }
    // Place.push(req.body)
    // res.redirect('/places')
    db.Place.create(req.body).then(() => {
        res.redirect('/places')
    }).catch(err => {
        console.log('err', err)
        res.status(404).send('error404')
    })
})

//GET edit
router.get('/:id/edit', (req, res) => {
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //     res.status(404).send(render('error404'))
    // } else if (!Place[id]) {
    //     res.status(404).send(render('error404'))
    // } else {
    //     res.send(render('places/edit', {places: Place[id], id: id}))
    // }
})

//DELETE
router.delete('/:id', (req, res) => {
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //     res.status(404).send(render('error404'))
    // } else if (!Place[id]) {
    //     res.status(404).send(render('error404'))
    // } else {
    //     Place.splice(id, 1)
    //     res.redirect('/places')
    // }
})

//exports router for modular use
module.exports = router