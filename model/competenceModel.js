const mongoose = require('mongoose')
const comptenceSchema = mongoose.Schema({
    skill:String
})

const Competence = mongoose.model('Competence', comptenceSchema)
module.exports = Competence