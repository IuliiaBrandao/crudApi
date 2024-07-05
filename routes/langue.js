const express = require('express')
const router = express.Router()
const langueModel = require('../model/langue')

router.get('/langue', async(req, res)=> {
    const langues = await langueModel.find()
    res.json(langues)
})

router.post('/langue', async(req, res)=>{
    const langue = req.body
    await langueModel.create(langue)
    res.json({message:`La langue ${langue.name} a été ajouté`})
})

router.delete('/langue/:id', async(req, res)=>{
const id = req.params.id
await langueModel.findByIdAndDelete(id)
res.json({message:'une langue a été supprimé'})
})

module.exports = router