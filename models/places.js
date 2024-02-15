const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, default: 'Some City'},
    country: {type: String, default: 'Some Country'},
    cuisines: {type: String, required: true},
    pic: {type: String, default: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    founded: Number
})

// module.exports = [
//     {
//         name: 'Otterly Delightful Cafe',
//         city: 'Kyoto',
//         country: 'Japan',
//         cuisines: 'Coffee, Bakery',
//         pic: '/images/Otterly-Delightful-Cafe.jpg'
//     },
//     {
//         name: 'Seoul Grill & Chill',
//         city: 'Seoul',
//         country: 'South Korea',
//         cuisines: 'Korean Barbecue',
//         pic: '/images/Seoul-Grill-&-Chill.jpg'
//     }
// ]

module.exports = mongoose.model('Place', placeSchema)