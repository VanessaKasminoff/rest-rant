//creates router
const router = require('express').Router()

//places page
router.get('/', (req, res) => {
    res.send('GET /places')
})

//exports router for modular use
module.exports = router