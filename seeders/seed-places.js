const db = require('../models')

db.Place.create([
    {
        name: 'Otterly Delightful Cafe',
        city: 'Kyoto',
        country: 'Japan',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Otterly-Delightful-Cafe.jpg',
        founded: 2019
    },
    {
        name: 'Seoul Grill & Chill',
        city: 'Seoul',
        country: 'South Korea',
        cuisines: 'Korean Barbecue',
        pic: '/images/Seoul-Grill-&-Chill.jpg',
        founded: 2000
    }
])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})