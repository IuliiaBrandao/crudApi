const mongoose = require('mongoose')

const voitureSchema = mongoose.Schema({
    make: {
        type: String, 
        required: [ true, 'Nom de maker est obligatoire']
    },
    model: {
        type: String,
        required: [ true, 'Nom de modele est obligatoire']
    },
    year: {
        type:Date,
        required: [ true, 'Nom de year est obligatoire']
    },
    transmission: {
        type: String,
        required: [ true, 'Nom de transmission est obligatoire' ]
    },
    fuelType: {
        type: String,
        required: [ true, 'Nom de fuelType est obligatoire']
    },
    mileage: {
        type: Number
    },
    price: {
        type:Number,
        required: [ true, 'Ajouter un prix']
    },
    sales: {
        type: Number,
        default: 0
    },
    country: {
        type: String,
        required: [ true, 'Ajouter un pays']
    },
    inStock: {
        type:Boolean
    }

})

const voitureModel = mongoose.model('voitures', voitureSchema)

module.exports = voitureModel