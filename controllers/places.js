//dependencies
const router = require('express').Router()

//imports
const render = require('../render')
const db = require('../models')

//GET places route
router.get('/', (req, res) => {
    db.Place.find().then((places) => {
        res.send(render('places/index', {places}))
    }).catch(err => {
        console.log('err', err)
        res.status(404).send(render('error404'))
    })
})

//GET new route
router.get('/new', (req, res) => {
    res.send(render('places/new'))
})

//GET show route
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then((places) => {
        // console.log(places.comments)
        res.send(render('places/show', {places}))
    }).catch(err => {
        console.log('err', err)
        res.status(404).send(render('error404'))
    })
})

//PUT update route
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
        res.status(400).send('400: BAD REQUEST')
    })
  })
  

//POST create route
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
            res.status(400).send('400: BAD REQUEST')
        }
    })
})

//GET edit route form
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id).then((foundPlace) => {
        res.send(render('places/edit', {places: foundPlace}))
    }).catch(err => {
        console.log('err', err)
        res.status(404).send(render('error404'))
    })
})

//DELETE route
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(303).redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.status(400).send('400: BAD REQUEST')
    })
})

//POST comment create
router.post('/:id/comments', (req, res) => {
    let commentData = req.body
    commentData.rant = commentData.rant ? true : false
    commentData.stars = Number(commentData.stars)
    console.log(commentData)
    db.Place.findById(req.params.id)
        .then((place) => {
            db.Comment.create(commentData)
                .then((comment) => {
                    place.comments.push(comment)
                    place.save()
                    res.redirect(`/places/${place.id}`)
                })
                .catch((err) => {
                    console.log(err)
                    res.status(404).send(render('error404'))
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send('400: BAD REQUEST')
        })
})

//exports router for modular use
module.exports = router