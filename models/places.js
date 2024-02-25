const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, default: 'Some City'},
    country: {type: String, default: 'Some Country'},
    cuisines: {type: String, required: true},
    pic: {type: String, default: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

//helper methods
placeSchema.method('showEstablished', function() {
    return `${this.name} has been proudly serving ${this.city}, ${this.country} since ${this.founded}.`
})

module.exports = mongoose.model('Place', placeSchema)